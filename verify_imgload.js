const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/demo-gardenlandscaping', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.evaluate(() => document.querySelector('.section-banner-7').scrollIntoView({ block: 'center' }));
  // wait specifically for the image to finish loading (up to 10s)
  const result = await page.waitForFunction(() => {
    const img = document.querySelector('.section-banner-7 .img-style img');
    return img && img.complete && img.naturalWidth > 0;
  }, { timeout: 10000 }).then(() => 'loaded').catch((e) => 'TIMEOUT: ' + e.message);
  console.log('wait result:', result);
  const final = await page.evaluate(() => {
    const img = document.querySelector('.section-banner-7 .img-style img');
    return { complete: img.complete, naturalWidth: img.naturalWidth, src: img.src, currentSrc: img.currentSrc };
  });
  console.log('final state:', final);
  await browser.close();
})();
