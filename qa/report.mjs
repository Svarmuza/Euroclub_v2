import fs from 'fs';
import path from 'path';
import { LOCALES, V2_ROUTES } from './page-mapping.mjs';

const REPORT_DIR = path.resolve('C:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/qa/reports');

/**
 * Generate a comprehensive JSON report
 */
export function generateJsonReport(comparisonResults, translationGaps) {
  return {
    timestamp: new Date().toISOString(),
    summary: generateSummary(comparisonResults),
    translationGaps,
    locales: comparisonResults,
  };
}

/**
 * Generate summary statistics
 */
function generateSummary(results) {
  const summary = {
    totalUrls: 0,
    successUrls: 0,
    failedUrls: 0,
    totalV1Texts: 0,
    totalExactMatches: 0,
    totalPartialMatches: 0,
    totalMissing: 0,
    perLocale: {},
  };

  for (const locale of LOCALES) {
    const localeData = results[locale] || {};
    const localeSummary = {
      urls: V2_ROUTES.length,
      success: 0,
      failed: 0,
      failedRoutes: [],
      v1Texts: 0,
      exactMatches: 0,
      partialMatches: 0,
      missing: 0,
      matchRate: '0',
    };

    for (const route of V2_ROUTES) {
      const page = localeData[route];
      if (!page) continue;

      summary.totalUrls++;
      if (page.crawlSuccess) {
        summary.successUrls++;
        localeSummary.success++;
      } else {
        summary.failedUrls++;
        localeSummary.failed++;
        localeSummary.failedRoutes.push({ route, status: page.status, error: page.crawlError });
      }

      if (page.comparison) {
        summary.totalV1Texts += page.comparison.total || 0;
        summary.totalExactMatches += page.comparison.exactMatches || 0;
        summary.totalPartialMatches += page.comparison.partialMatches || 0;
        summary.totalMissing += page.comparison.missing || 0;

        localeSummary.v1Texts += page.comparison.total || 0;
        localeSummary.exactMatches += page.comparison.exactMatches || 0;
        localeSummary.partialMatches += page.comparison.partialMatches || 0;
        localeSummary.missing += page.comparison.missing || 0;
      }
    }

    const totalCompared = localeSummary.exactMatches + localeSummary.partialMatches + localeSummary.missing;
    localeSummary.matchRate = totalCompared > 0
      ? ((localeSummary.exactMatches + localeSummary.partialMatches) / totalCompared * 100).toFixed(1) + '%'
      : 'N/A';

    summary.perLocale[locale] = localeSummary;
  }

  summary.overallMatchRate = (summary.totalExactMatches + summary.totalPartialMatches + summary.totalMissing) > 0
    ? ((summary.totalExactMatches + summary.totalPartialMatches) / (summary.totalExactMatches + summary.totalPartialMatches + summary.totalMissing) * 100).toFixed(1) + '%'
    : 'N/A';

  return summary;
}

/**
 * Print colored console report
 */
export function printConsoleReport(comparisonResults, translationGaps) {
  const summary = generateSummary(comparisonResults);

  console.log('\n' + '='.repeat(80));
  console.log('  EUROCLUB v2 QA REPORT');
  console.log('  Generated: ' + new Date().toISOString());
  console.log('='.repeat(80));

  // URL Status Summary
  console.log('\n  PAGE STATUS (HTTP 200 CHECK)');
  console.log('  ' + '-'.repeat(40));
  console.log(`  Total URLs:      ${summary.totalUrls}`);
  console.log(`  Success (200):   ${summary.successUrls}`);
  console.log(`  Failed:          ${summary.failedUrls}`);

  // Per-locale URL status
  console.log('\n  Per-locale status:');
  for (const locale of LOCALES) {
    const ls = summary.perLocale[locale];
    const icon = ls.failed === 0 ? '\u2705' : '\u274C';
    console.log(`    ${icon} ${locale}: ${ls.success}/${ls.urls} OK` + (ls.failed > 0 ? ` (${ls.failed} FAILED)` : ''));
    if (ls.failedRoutes.length > 0) {
      for (const fr of ls.failedRoutes) {
        console.log(`        - ${fr.route}: HTTP ${fr.status}${fr.error ? ' (' + fr.error + ')' : ''}`);
      }
    }
  }

  // Text Comparison Summary
  console.log('\n  TEXT COMPARISON (V1 vs V2)');
  console.log('  ' + '-'.repeat(40));
  console.log(`  V1 texts found:  ${summary.totalV1Texts}`);
  console.log(`  Exact matches:   ${summary.totalExactMatches}`);
  console.log(`  Partial matches: ${summary.totalPartialMatches}`);
  console.log(`  Missing:         ${summary.totalMissing}`);
  console.log(`  Overall match:   ${summary.overallMatchRate}`);

  // Per-locale text match rates
  console.log('\n  Per-locale match rates:');
  for (const locale of LOCALES) {
    const ls = summary.perLocale[locale];
    const rateNum = parseFloat(ls.matchRate) || 0;
    const icon = rateNum >= 80 ? '\u2705' : rateNum >= 50 ? '\u26A0\uFE0F' : '\u274C';
    console.log(`    ${icon} ${locale}: ${ls.matchRate} match (${ls.exactMatches} exact, ${ls.partialMatches} partial, ${ls.missing} missing)`);
  }

  // Translation JSON Completeness
  console.log('\n  TRANSLATION JSON COMPLETENESS (vs English)');
  console.log('  ' + '-'.repeat(40));
  for (const locale of Object.keys(translationGaps)) {
    const gap = translationGaps[locale];
    if (gap.error) {
      console.log(`    \u274C ${locale}: ${gap.error}`);
      continue;
    }
    const coverageNum = parseFloat(gap.coverage);
    const icon = coverageNum >= 90 ? '\u2705' : coverageNum >= 60 ? '\u26A0\uFE0F' : '\u274C';
    console.log(`    ${icon} ${locale}: ${gap.coverage}% coverage (${gap.missingKeys.length} missing keys, ${gap.extraKeys.length} extra keys)`);
    if (gap.missingKeys.length > 0 && gap.missingKeys.length <= 10) {
      gap.missingKeys.forEach(k => console.log(`        - ${k}`));
    } else if (gap.missingKeys.length > 10) {
      gap.missingKeys.slice(0, 5).forEach(k => console.log(`        - ${k}`));
      console.log(`        ... and ${gap.missingKeys.length - 5} more`);
    }
  }

  // Pages with most missing text
  console.log('\n  PAGES WITH MOST MISSING TEXT');
  console.log('  ' + '-'.repeat(40));
  const missingByPage = [];
  for (const locale of LOCALES) {
    for (const route of V2_ROUTES) {
      const page = comparisonResults[locale]?.[route];
      if (page?.comparison?.missing > 0) {
        missingByPage.push({ locale, route, missing: page.comparison.missing, total: page.comparison.total });
      }
    }
  }
  missingByPage.sort((a, b) => b.missing - a.missing);
  for (const item of missingByPage.slice(0, 15)) {
    console.log(`    ${item.locale}/${item.route}: ${item.missing}/${item.total} missing`);
  }

  console.log('\n' + '='.repeat(80));
  console.log(`  Overall verdict: ${summary.failedUrls === 0 && summary.totalMissing === 0 ? 'ALL CHECKS PASSED \u2705' : 'ISSUES FOUND - see details above'}`);
  console.log('='.repeat(80) + '\n');
}

/**
 * Save report to file
 */
export function saveReport(comparisonResults, translationGaps) {
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const reportPath = path.join(REPORT_DIR, `qa-report-${timestamp}.json`);

  const report = generateJsonReport(comparisonResults, translationGaps);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  console.log(`\n  Report saved: ${reportPath}\n`);
  return reportPath;
}
