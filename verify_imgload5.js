const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('CONSOLE', m.type(), m.text()));
  page.on('pageerror', e => console.log('PAGEERROR', e));
  const reqs = [];
  page.on('request', r => { if (r.url().includes('banner-1')) reqs.push(r.url()); });
  const resps = [];
  page.on('response', r => { if (r.url().includes('banner-1')) resps.push(r.url() + ' -> ' + r.status()); });

  await page.goto('http://localhost:3000/demo-gardenlandscaping', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  const imgInfo = await page.evaluate(() => {
    const img = document.querySelector('.section-banner-7 .img-style img');
    return {
      outerHTML: img.outerHTML,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    };
  });
  console.log('img info:', imgInfo);
  console.log('requests for banner-1:', reqs);
  console.log('responses for banner-1:', resps);

  await browser.close();
})();
