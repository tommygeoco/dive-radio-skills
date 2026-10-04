// State D: remove-selected with two library items selected (count = 2), EN and DE, 1280px.
// The two library items are sample data made in the app by this script (a rectangle and an ellipse).
import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, headless: true });
const out = "./shots/";
async function addShape(p, key, x, y) {
  await p.keyboard.press(key);
  await p.mouse.move(x, y); await p.mouse.down(); await p.mouse.move(x + 120, y + 90, { steps: 5 }); await p.mouse.up();
  await p.keyboard.press("Escape");
  await p.mouse.click(x + 120, y + 45, { button: "right" });
  await p.waitForTimeout(300);
  await p.locator('li[data-testid="addToLibrary"]').click();
  await p.waitForTimeout(800);
}
for (const lang of ["en", "de-DE"]) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto("https://excalidraw.com", { waitUntil: "networkidle", timeout: 60000 });
  await p.evaluate((l) => localStorage.setItem("i18nextLng", l), lang);
  await p.reload({ waitUntil: "networkidle" });
  await addShape(p, "r", 400, 250);
  await p.mouse.click(1000, 700); // deselect canvas
  await addShape(p, "r", 450, 450);
  await p.mouse.click(1000, 700);
  await p.waitForTimeout(500);
  if (await p.locator(".library-unit").count() === 0) { await p.locator(".sidebar-trigger__label-element, .sidebar-trigger, .default-sidebar-trigger").first().click(); await p.waitForTimeout(800); }
  const units = p.locator(".library-unit:not(.library-unit--pending)");
  console.log(lang, "library units", await units.count());
  const n = await units.count();
  for (let i = 0; i < n; i++) { await units.nth(i).click({ modifiers: ["Shift"] }); await p.waitForTimeout(200); }
  console.log(lang, "selected", await p.locator(".library-unit--selected").count());
  const trig = p.locator(".library-menu-dropdown-container .dropdown-menu-button, .library-menu-dropdown-container button").first();
  await trig.click(); await p.waitForTimeout(300);
  const menu = await p.locator(".dropdown-menu-item").allInnerTexts();
  console.log(lang, "menu", menu);
  const idx = menu.findIndex(t => /^(Remove|Entfernen)/i.test(t.trim()));
  await p.locator(".dropdown-menu-item").nth(idx).click();
  const dlg = p.locator(".confirm-dialog").first();
  await dlg.waitFor({ timeout: 10000 }); await p.waitForTimeout(400);
  await p.screenshot({ path: `${out}remove-selected-count2-${lang}.png` });
  console.log(lang, "dialog:", (await dlg.innerText()).replace(/\n+/g, " | "));
  await ctx.close();
}
await b.close();
