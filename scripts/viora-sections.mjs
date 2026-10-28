// Compare top-level section heights between original HTML (served via
// http-server on :8088, see master command below) and the Next.js app
// (:3000) at given widths. Scrolls to trigger wow.js reveal before measuring.
//
// Usage: node scripts/viora-sections.mjs <origPath> <nextPath> [width=1920] [width2=768] [selector]
// Example: node scripts/viora-sections.mjs /demo-agency/about.html /demo-agency/about

import { chromium } from 'playwright';

const [, , origPath, nextPath, w1 = '1920', w2 = '768', sel] = process.argv;
if (!origPath || !nextPath) {
  console.error('Usage: node scripts/viora-sections.mjs <origPath> <nextPath> [width1] [width2]');
  process.exit(1);
}

const widths = [Number(w1), Number(w2)];
const origBase = 'http://localhost:8088';
const nextBase = 'http://localhost:3000';

const browser = await chromium.launch();

async function measure(url, width) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  // scroll through full page to trigger wow.js / lazy content, then settle
  await page.evaluate(async () => {
    const step = 400;
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    let y = 0;
    const max = document.body.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      y += step;
      await delay(60);
    }
    window.scrollTo(0, 0);
    await delay(300);
  });
  await page.waitForTimeout(500);

  const data = await page.evaluate((selector) => {
    const root = selector
      ? document.querySelector(selector)
      : document.querySelector('#smooth-content') ||
        document.querySelector('.main-content') ||
        document.body;
    if (!root) return [];
    const children = Array.from(root.children);
    return children.map((el, i) => ({
      i,
      tag: el.tagName.toLowerCase(),
      cls: (el.className || '').toString().slice(0, 80),
      h: Math.round(el.getBoundingClientRect().height),
    }));
  }, sel);
  await page.close();
  return data;
}

for (const width of widths) {
  console.log(`\n=== width ${width} ===`);
  const [origData, nextData] = await Promise.all([
    measure(`${origBase}${origPath}`, width),
    measure(`${nextBase}${nextPath}`, width),
  ]);
  const max = Math.max(origData.length, nextData.length);
  console.log('idx | HTML (tag.class, h) | Next (tag.class, h) | Δ');
  for (let i = 0; i < max; i++) {
    const o = origData[i];
    const n = nextData[i];
    const oh = o ? o.h : null;
    const nh = n ? n.h : null;
    const delta = oh != null && nh != null ? nh - oh : null;
    const flag = delta != null && Math.abs(delta) > 8 ? '  <-- DIFF' : '';
    console.log(
      `${i} | ${o ? `${o.tag}.${o.cls} (${oh})` : '—'} | ${n ? `${n.tag}.${n.cls} (${nh})` : '—'} | ${delta}${flag}`
    );
  }
  const totalOrig = origData.reduce((s, x) => s + x.h, 0);
  const totalNext = nextData.reduce((s, x) => s + x.h, 0);
  console.log(`TOTAL: HTML=${totalOrig} Next=${totalNext} Δ=${totalNext - totalOrig}`);
}

await browser.close();
