import { exec } from 'child_process';
import { LOCALES } from './page-mapping.mjs';
import { extractAllV1Texts } from './extract-v1.mjs';
import { crawlSite, healthCheck } from './crawl-v2.mjs';
import { compareAll, compareTranslationCompleteness } from './compare.mjs';
import { printConsoleReport, saveReport } from './report.mjs';

const DEV_SERVER_PORT = 3000;
const BASE_URL = `http://localhost:${DEV_SERVER_PORT}`;

/**
 * Start the Next.js dev server in background
 */
function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log(`\n  Starting dev server on port ${DEV_SERVER_PORT}...`);

    const proc = exec('npm run dev', {
      cwd: process.cwd(),
      env: { ...process.env, PORT: String(DEV_SERVER_PORT) },
    });

    let started = false;

    proc.stdout.on('data', (data) => {
      const str = data.toString();
      if (str.includes('Ready') || str.includes('started') || str.includes('Local:')) {
        if (!started) {
          started = true;
          console.log('  Dev server is ready!\n');
          // Give it a moment to fully initialize
          setTimeout(() => resolve(proc), 3000);
        }
      }
      // Suppress verbose output
    });

    proc.stderr.on('data', (data) => {
      // Suppress stderr unless it's a crash
      const str = data.toString();
      if (str.includes('Error') && !started) {
        console.error('  Dev server error:', str);
      }
    });

    proc.on('error', (err) => {
      reject(new Error(`Failed to start dev server: ${err.message}`));
    });

    // Timeout after 60 seconds
    setTimeout(() => {
      if (!started) {
        // Assume it's ready if we've been waiting
        started = true;
        resolve(proc);
      }
    }, 60000);
  });
}

/**
 * Main QA run
 */
async function run() {
  const startTime = Date.now();
  let devServerProc = null;

  console.log('\n' + '='.repeat(80));
  console.log('  EUROCLUB v2 QA AGENT');
  console.log('='.repeat(80));

  try {
    // Step 1: Check if server is already running
    console.log('\n  Step 1: Checking dev server...');
    const serverRunning = await healthCheck(BASE_URL);

    if (!serverRunning) {
      devServerProc = await startDevServer();
    } else {
      console.log('  Dev server already running!\n');
    }

    // Step 2: Extract V1 texts
    console.log('  Step 2: Extracting V1 page texts...');
    const v1Texts = extractAllV1Texts();
    let totalV1Texts = 0;
    for (const locale of LOCALES) {
      const localeTexts = v1Texts[locale] || {};
      const count = Object.values(localeTexts).flat().length;
      totalV1Texts += count;
      const pages = Object.keys(localeTexts).length;
      if (pages > 0) {
        console.log(`    ${locale}: ${count} texts from ${pages} pages`);
      }
    }
    console.log(`    Total: ${totalV1Texts} V1 texts extracted\n`);

    // Step 3: Crawl V2 site
    console.log('  Step 3: Crawling V2 site...');
    const crawlResults = await crawlSite(BASE_URL);

    // Step 4: Compare V1 vs V2
    console.log('\n  Step 4: Comparing V1 texts vs V2 rendered content...');
    const comparisonResults = compareAll(v1Texts, crawlResults);

    // Step 5: Check translation JSON completeness
    console.log('  Step 5: Checking translation JSON completeness...');
    const translationGaps = compareTranslationCompleteness('en');

    // Step 6: Generate report
    console.log('  Step 6: Generating report...');
    printConsoleReport(comparisonResults, translationGaps);
    const reportPath = saveReport(comparisonResults, translationGaps);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`  QA completed in ${elapsed}s`);
    console.log(`  Report: ${reportPath}\n`);

  } catch (err) {
    console.error('\n  QA Error:', err.message);
    console.error(err.stack);
  } finally {
    // Cleanup: stop dev server if we started it
    if (devServerProc) {
      console.log('  Stopping dev server...');
      devServerProc.kill('SIGTERM');
      // Force kill after 5 seconds
      setTimeout(() => {
        try { devServerProc.kill('SIGKILL'); } catch {}
      }, 5000);
    }
  }
}

run();
