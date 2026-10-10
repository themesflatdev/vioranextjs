const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/demo-charity', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const info = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('a[href="#modalDemo"]'));
    return btns.map(b => ({ class: b.className, visible: !!(b.offsetWidth || b.offsetHeight) }));
  });
  console.log('buttons found:', JSON.stringify(info));
  // just click the first one directly via JS click (bypass hover/visibility requirements)
  await page.evaluate(() => {
    document.querySelector('a[href="#modalDemo"]').click();
  });
  await page.waitForTimeout(500);
  const itemCount = await page.locator('.modalDemo .demo-item').count();
  console.log('popup item count:', itemCount);
  await browser.close();
})();
