import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, headless: true });
const out = "./shots/";
for (const lang of ["en", "de-DE"]) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto("https://excalidraw.com", { waitUntil: "networkidle", timeout: 60000 });
  await p.evaluate((l) => localStorage.setItem("i18nextLng", l), lang);
  await p.reload({ waitUntil: "networkidle" });
  // 1. clear canvas
  await p.click('[data-testid="main-menu-trigger"]');
  await p.click('[data-testid="clear-canvas-button"]');
  const dlg = p.locator(".confirm-dialog").first();
  await dlg.waitFor({ timeout: 10000 });
  await p.waitForTimeout(400);
  await dlg.screenshot({ path: `${out}clear-canvas-${lang}.png` });
  console.log(lang, "clear-canvas", (await dlg.innerText()).replace(/\n+/g," | "));
  await p.keyboard.press("Escape");
  await p.waitForTimeout(300);
  // 2. library: add a rectangle to library
  await p.keyboard.press("r");
  await p.mouse.move(500, 300); await p.mouse.down(); await p.mouse.move(650, 420, { steps: 5 }); await p.mouse.up();
  await p.keyboard.press("Escape");
  await p.mouse.click(650, 360, { button: "right" });
  await p.waitForTimeout(300);
  await p.locator('li[data-testid="addToLibrary"]').click();
  await p.waitForTimeout(1000);
  if (await p.locator(".library-unit").count() === 0) { await p.locator(".sidebar-trigger__label-element").first().click(); await p.waitForTimeout(800); }
  // library sidebar should open; open dropdown
  const trig = p.locator(".library-menu-dropdown-container .dropdown-menu-button, .library-menu-dropdown-container button").first();
  await trig.click();
  await p.waitForTimeout(300);
  const menu = await p.locator(".dropdown-menu-item").allInnerTexts();
  console.log(lang, "lib menu:", menu);
  const resetIdx = menu.findIndex(t => /Reset|zurücksetzen/i.test(t));
  await p.locator(".dropdown-menu-item").nth(resetIdx).click();
  const dlg2 = p.locator(".confirm-dialog").first();
  await dlg2.waitFor({ timeout: 10000 });
  await p.waitForTimeout(400);
  await dlg2.screenshot({ path: `${out}reset-library-${lang}.png` });
  console.log(lang, "reset-library", (await dlg2.innerText()).replace(/\n+/g," | "));
  // cancel
  await dlg2.locator("button").first().click();
  await p.waitForTimeout(300);
  // 3. select the library item then remove-selected
  const item = p.locator(".library-unit").first();
  await item.click({ modifiers: ["Shift"] }).catch(()=>{});
  await p.waitForTimeout(300);
  await item.hover();
  const cb = p.locator(".library-unit__checkbox, .library-unit input[type=checkbox], .library-unit .ToolIcon__icon").first();
  if (await p.locator(".library-unit--selected").count() === 0) { await cb.click({force:true}).catch(()=>{}); await p.waitForTimeout(300); }
  console.log(lang, "selected count", await p.locator(".library-unit--selected").count());
  await trig.click(); await p.waitForTimeout(300);
  const menu2 = await p.locator(".dropdown-menu-item").allInnerTexts();
  console.log(lang, "lib menu 2:", menu2);
  const remIdx = menu2.findIndex(t => /^(Remove|Entfernen)/i.test(t.trim()));
  if (remIdx >= 0) {
    await p.locator(".dropdown-menu-item").nth(remIdx).click();
    const dlg3 = p.locator(".confirm-dialog").first();
    await dlg3.waitFor({ timeout: 10000 }); await p.waitForTimeout(400);
    await dlg3.screenshot({ path: `${out}remove-selected-${lang}.png` });
    console.log(lang, "remove-selected", (await dlg3.innerText()).replace(/\n+/g," | "));
  }
  await ctx.close();
}
await b.close();
