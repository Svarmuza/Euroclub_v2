import { chromium } from 'playwright';
import { LOCALES, V2_PATHNAMES, V2_ROUTES } from './page-mapping.mjs';

async function crawlPage(page, url) {
  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 15000,
    });
    const status = response ? response.status() : 0;
    await page.waitForTimeout(300);

    const text = await page.evaluate(() => {
      const main = document.querySelector('main')
        || document.querySelector('[role="main"]')
        || document.querySelector('#__next')
        || document.body;
      return main.innerText;
    });

    const title = await page.title();
    const hasError = await page.evaluate(() => {
      return document.body.innerText.includes('Error: Internal Server Error')
        || document.body.innerText.includes('Application error');
    });

    return { url, status, text: text || '', title, hasError, success: status === 200 && !hasError };
  } catch (err) {
    return { url, status: 0, text: '', title: '', hasError: true, success: false, error: err.message };
  }
}

async function crawlLocale(locale, baseUrl) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  const results = {};

  for (const route of V2_ROUTES) {
    const pathname = V2_PATHNAMES[route][locale];
    const url = `${baseUrl}/${locale}${pathname}`;
    results[route] = await crawlPage(page, url);
    results[route].locale = locale;
    results[route].route = route;
    results[route].pathname = pathname;
  }

  await browser.close();
  return results;
}

export async function crawlSite(baseUrl = 'http://localhost:3000') {
  const results = {};
  const totalUrls = LOCALES.length * V2_ROUTES.length;
  console.log(`\n  Crawling ${totalUrls} URLs across ${LOCALES.length} locales...\n`);

  for (const locale of LOCALES) {
    console.log(`  [${locale}] Crawling ${V2_ROUTES.length} pages...`);
    results[locale] = await crawlLocale(locale, baseUrl);
    const ok = Object.values(results[locale]).filter(r => r.success).length;
    console.log(`    ${locale}: ${ok}/${V2_ROUTES.length} OK`);
  }

  return results;
}

export async function healthCheck(baseUrl = 'http://localhost:3000') {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const response = await page.goto(baseUrl, { timeout: 10000, waitUntil: 'domcontentloaded' });
    await browser.close();
    return response && response.status() < 400;
  } catch {
    await browser.close();
    return false;
  }
}
