import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, headless: true });
for (const lang of ["en","de-DE"]) {
  const ctx = await b.newContext({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await p.goto("https://excalidraw.com", { waitUntil: "networkidle", timeout: 60000 });
  await p.evaluate((l) => localStorage.setItem("i18nextLng", l), lang);
  await p.reload({ waitUntil: "networkidle" });
  await p.click('[data-testid="main-menu-trigger"]');
  await p.click('[data-testid="clear-canvas-button"]');
  const dlg = p.locator(".confirm-dialog").first();
  await dlg.waitFor({ timeout: 10000 }); await p.waitForTimeout(400);
  await p.screenshot({ path: `./shots/clear-canvas-${lang}-360px.png` });
  const box = await dlg.boundingBox();
  const over = await p.evaluate(() => [...document.querySelectorAll(".confirm-dialog *")].filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== "visible").map(e => e.className).slice(0,5));
  console.log(lang, "360px dialog box", JSON.stringify(box), "clipped:", JSON.stringify(over));
  await ctx.close();
}
await b.close();
