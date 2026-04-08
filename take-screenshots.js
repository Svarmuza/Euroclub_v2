const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1440, height: 900 }
    });

    const pages = [
        { url: 'http://localhost:3000/hr/homepagev4', name: 'homepage_v4' },
    ];

    for (const { url, name } of pages) {
        try {
            await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
            await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
            console.log(`✓ Screenshot: ${name}`);
        } catch (e) {
            console.error(`✗ Failed: ${name} - ${e.message}`);
        }
    }

    await browser.close();
})();
