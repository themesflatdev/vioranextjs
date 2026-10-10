const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/demo-gardenlandscaping', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  for (let i=0;i<40;i++){ await page.mouse.wheel(0,500); await page.waitForTimeout(40); }
  await page.waitForTimeout(2000);
  const results = await page.evaluate(() => {
    return Array.from(document.images).map(img => ({
      src: img.src.slice(0,90),
      loading: img.loading,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    }));
  });
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
