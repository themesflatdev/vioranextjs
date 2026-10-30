import { chromium } from "playwright";

const browser = await chromium.launch();

async function measureCLS(url, viewport, label) {
  const page = await browser.newPage({ viewport });
  await page.addInitScript(() => {
    window.__clsEntries = [];
    window.__clsTotal = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__clsTotal += entry.value;
          window.__clsEntries.push({
            value: entry.value,
            time: entry.startTime,
            sources: (entry.sources || []).map((s) => ({
              node: s.node ? s.node.outerHTML?.slice(0, 200) : null,
              prevRect: s.previousRect,
              currRect: s.currentRect,
            })),
          });
        }
      }
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto(url, { waitUntil: "load", timeout: 30000 });
  await page.waitForTimeout(4000); // let fonts/images/animations settle
  const { total, entries } = await page.evaluate(() => ({
    total: window.__clsTotal,
    entries: window.__clsEntries.sort((a, b) => b.value - a.value).slice(0, 5),
  }));
  console.log(`=== ${label} CLS total: ${total.toFixed(4)} ===`);
  for (const e of entries) {
    console.log(`  shift=${e.value.toFixed(4)} at t=${e.time.toFixed(0)}ms`);
    for (const s of e.sources) {
      console.log(`    node: ${s.node}`);
      console.log(`    prevRect: ${JSON.stringify(s.prevRect)} -> currRect: ${JSON.stringify(s.currRect)}`);
    }
  }
  await page.close();
  return total;
}

await measureCLS("http://localhost:3105/demo-insurance", { width: 1920, height: 1080 }, "insurance desktop");
await measureCLS("http://localhost:3105/demo-charity", { width: 390, height: 844 }, "charity mobile");
await measureCLS("http://localhost:3105/demo-gardenlandscaping", { width: 1920, height: 1080 }, "gardenlandscaping desktop");

await browser.close();
