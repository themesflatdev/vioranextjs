const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/demo-gardenlandscaping', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.evaluate(() => document.querySelector('.section-banner-7').scrollIntoView({ block: 'center' }));
  const result = await page.waitForFunction(() => {
    const img = document.querySelector('.section-banner-7 .img-style img');
    return img && img.complete && img.naturalWidth > 0;
  }, { timeout: 8000 }).then(() => 'loaded').catch(() => 'TIMEOUT');
  console.log('with priority:', result);
  await browser.close();
})();
