const { chromium } = require('playwright');

async function openPopup(page, route) {
  await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  // hover "Demos" to reveal mega menu, then click the button
  const demosToggle = page.locator('header.header:not(.header-fixed) .main-menu .has-menu-mega > a').first();
  await demosToggle.hover();
  await page.waitForTimeout(300);
  const btn = page.locator('header.header:not(.header-fixed) a[href="#modalDemo"]').first();
  await btn.click({ force: true });
  await page.waitForTimeout(500);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  // 1. Open on corporate (/)
  await openPopup(page, '/');
  const title = await page.locator('.demo-title').textContent();
  const itemCount = await page.locator('.demo-item').count();
  const imgsOk = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.demo-item img')).every((img) => img.complete)
  );
  const linkDeco = await page.evaluate(() => {
    const a = document.querySelector('.demo-item .demo-name');
    return a ? getComputedStyle(a).textDecorationLine : 'NOT FOUND';
  });
  console.log('title:', title, '| items:', itemCount, '| imgs ok:', imgsOk, '| link decoration:', linkDeco);

  const cols = await page.evaluate(() => {
    const grid = document.querySelector('.row-demo');
    return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  });
  console.log('columns @1920:', cols);

  const bodyLocked1 = await page.evaluate(() => document.body.style.overflow);
  console.log('body overflow while open:', bodyLocked1);

  // close via Esc
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  const stillOpen = await page.locator('.modalDemo').count();
  const bodyLocked2 = await page.evaluate(() => document.body.style.overflow);
  console.log('after Esc -> modal count:', stillOpen, '| body overflow:', bodyLocked2);

  // reopen, close via icon
  await openPopup(page, '/');
  await page.click('.icon-close-popup');
  await page.waitForTimeout(500);
  console.log('after icon close -> modal count:', await page.locator('.modalDemo').count());

  // reopen, close via outside click
  await openPopup(page, '/');
  await page.mouse.click(10, 10);
  await page.waitForTimeout(500);
  console.log('after outside click -> modal count:', await page.locator('.modalDemo').count());

  // reopen, click a demo item -> navigate + close
  await openPopup(page, '/');
  await page.click('.modalDemo .demo-item >> text=Home Charity');
  await page.waitForTimeout(800);
  console.log('after clicking Home Charity -> url:', page.url(), '| modal count:', await page.locator('.modalDemo').count(), '| body overflow:', await page.evaluate(() => document.body.style.overflow));

  // chain through a few more niches to check no leftover lock state
  await openPopup(page, '/demo-charity');
  await page.click('.modalDemo .demo-item >> text=Home Restaurant');
  await page.waitForTimeout(600);
  console.log('after Home Restaurant -> url:', page.url());

  await openPopup(page, '/demo-restaurant');
  await page.click('.modalDemo .demo-item >> text=Home Lawyer');
  await page.waitForTimeout(600);
  console.log('after Home Lawyer -> url:', page.url(), '| body overflow:', await page.evaluate(() => document.body.style.overflow));

  // popup over fixed header after scrolling
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(500);
  await page.locator('header.header-fixed .main-menu .has-menu-mega > a').first().hover();
  await page.waitForTimeout(300);
  await page.locator('header.header-fixed a[href="#modalDemo"]').first().click({ force: true });
  await page.waitForTimeout(500);
  const zOk = await page.evaluate(() => {
    const modal = document.querySelector('.modalDemo');
    const header = document.querySelector('.header-fixed');
    if (!modal || !header) return 'missing el';
    return parseInt(getComputedStyle(modal).zIndex) > parseInt(getComputedStyle(header).zIndex || '0');
  });
  console.log('modal above fixed header:', zOk);

  await browser.close();
})();
