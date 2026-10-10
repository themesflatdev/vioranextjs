const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  const reqs = [];
  page.on('request', r => { if (r.url().includes('banner-1')) reqs.push({url:r.url(), method:r.method()}); });
  const resps = [];
  page.on('response', r => { if (r.url().includes('banner-1')) resps.push(r.url() + ' -> ' + r.status()); });
  page.on('requestfailed', r => { if (r.url().includes('banner-1')) console.log('REQUEST FAILED:', r.url(), r.failure()); });

  await page.goto('http://localhost:3000/demo-gardenlandscaping', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.evaluate(() => document.querySelector('.section-banner-7').scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(5000);
  console.log('requests:', JSON.stringify(reqs, null, 2));
  console.log('responses:', resps);
  await browser.close();
})();
