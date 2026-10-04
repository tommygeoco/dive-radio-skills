# Component Stress Test: Excalidraw `ConfirmDialog`

## Scope

Component: `ConfirmDialog` (packages/excalidraw/components/ConfirmDialog.tsx). Planned change: a restyle. Searched: `packages/excalidraw/` and `excalidraw-app/` at commit ed10ac7. Files written (scratch only, nothing in product code): `contact-sheet.html`, `strings.json`, `capture.mjs`, `capture-360px.mjs`, `capture-count2.mjs`, `shots/` (10 images).

## Lookalikes

Advice, extending Teddy Ni's reuse check (00:48:33) to an existing component: one other component does the same job with its own markup, so a `ConfirmDialog` restyle will not reach it:
- `OverwriteConfirmDialog` (components/OverwriteConfirm/OverwriteConfirm.tsx:19). Its own layout: 916px wide, warning icon, `FilledButton`, extra action cards. Opened through `openConfirmModal` for loading a file over your drawing (main-menu/DefaultItems.tsx) and for opening a shared link over your drawing (excalidraw-app/App.tsx:259 and :313).

Decide whether the restyle should cover both. This skill does not decide that.

## Instances

| # | Where it renders | Triggered by | Props passed | Left at default |
|---|---|---|---|---|
| 1 | ActiveConfirmDialog.tsx:22 (clear canvas) | Main menu "Reset the canvas" (DefaultItems.tsx:226); command palette (CommandPalette.tsx:399); Cmd/Ctrl+Delete (App.tsx:5563) | `title`, `onConfirm`, `onCancel`, body `<p>` | `confirmText` = `buttons.confirm`, `cancelText` = `buttons.cancel` |
| 2 | LibraryMenuHeaderContent.tsx:70 (library) | Library sidebar menu, last item | `title`, `onConfirm`, `onCancel`, body `<p>` | `confirmText`, `cancelText` |

Copy (Christopher Downer, 01:28:07: "the correct live actual copy"):

| Key | English |
|---|---|
| clearCanvasDialog.title | Clear canvas |
| alerts.clearReset | This will clear the whole canvas. Are you sure? |
| confirmDialog.resetLibrary | Reset library |
| alerts.resetLibrary | This will clear your library. Are you sure? |
| confirmDialog.removeItemsFromLib | Remove selected items from library |
| alerts.removeItemsFromsLibrary | Delete {{count}} item(s) from library? |
| buttons.cancel / buttons.confirm | Cancel / Confirm |

## States

(Davey Heuser, 01:24:14: "render all of the different states")

| State | Created by | Rendered |
|---|---|---|
| A. Clear canvas | ActiveConfirmDialog.tsx:20 | EN, DE at 1280px and 360px |
| B. Reset library: library has items, none selected | LibraryMenuHeaderContent.tsx:65, :68 (`selectedItems.length` is 0) | EN, DE at 1280px |
| C. Remove selected: one item selected | LibraryMenuHeaderContent.tsx:64, :67 (`count` = 1) | EN, DE at 1280px |
| D. Remove selected: several items selected | same lines, `count` = 2 | EN, DE at 1280px (`capture-count2.mjs`) |
| E. Library empty | menu item hidden by `!!items.length` (line 232 area) | No dialog: the menu item does not appear |

States B, C and D need library items, which the repo does not contain. The capture scripts make them in the app during the run (rectangles added to the library), so those renders are labelled "sample, not from the code" on the sheet. A real user's library can hold items of any size and name; this run did not test that.

## Contact sheet

`examples/excalidraw-confirm-dialog/contact-sheet.html`. Open it in a browser; the images sit in `shots/`. Built by route 1 of Step 4: the live app at excalidraw.com driven by `capture.mjs`, with the language set through the app's own setting.

## Strings and German

Full file: `strings.json`. German is the repo's own `de-DE.json`, not a test translation (Christopher Downer, 01:28:33). Longest German strings: the remove-selected title, 49 characters against 34 in English; the clear-canvas body, 62 against 47.

Advice, since the repo ships 58 locales: longest versions across all of them are French for the remove-selected title (52 characters, "Enlever les éléments sélectionnés de la bibliothèque"), Polish for the clear-canvas body (71) and Punjabi for the reset-library body (73). Between 4 and 11 locales are missing each key and will show English instead (for example az-AZ, da-DK and kk-KZ). These were not rendered.

## What the sheet shows

- German fits in every rendered state. The 49-character title stays on one line at 1280px (state C). At 360px the dialog fills the screen, the clear-canvas body wraps to two lines and both buttons still fit side by side (state A).
- The count string does not change with the count: "Delete 1 item(s) from library?" (state C) and "Delete 2 item(s) from library?" (state D); German "1 Element(e)" and "2 Element(e)". The code passes `count`, but the strings use "(s)" and "(e)" instead of separate one and many forms.
- Every instance leaves the buttons at their defaults, so every destructive action is labelled "Confirm" / "Bestätigen" in the red danger style, never the action's name (all states; ConfirmDialog.tsx:26).
- The close button (X) shows at 360px but not on desktop (state A, both widths).
- The clear-canvas body has a leading space inside the paragraph (ActiveConfirmDialog.tsx:30). It is not visible in the renders.
- The lookalike `OverwriteConfirmDialog` will not change with this component.

## How to rerun

After the restyle, run `node capture.mjs`, `node capture-count2.mjs` and `node capture-360px.mjs` (needs `playwright-core`; set `CHROME_PATH` if Playwright's own Chromium is not installed) against a dev build or the deployed app, then reopen `contact-sheet.html` and compare. Davey Heuser does the same to keep marketing mockups current instead of "having to do that manually like every single time if something ends up changing" (01:25:13).

## What this skill cannot tell you

Whether your restyle is better. The 360px library states, which were not rendered. Library items with long names or many items, since the sample items were plain rectangles. Whether the 58 locale files are good translations. How the dialog looks in browsers, zoom levels and screen readers other than headless Chromium at 1280px and 360px. Whether the live app is exactly commit ed10ac7 (the strings matched). Any use of `ConfirmDialog` outside the two folders searched, such as apps that embed the `@excalidraw/excalidraw` package with their own props.

Method from Dive Radio E11, Just-in-Time Interfaces (Sep 24, 2026): https://youtu.be/2EAAU-knqRE

---

## Test notes (Bones, 2026-10-03)

What worked: Steps 1 to 3 took a few searches. The lookalike check found the second confirm component the user would have missed. Rendering from the real app found the count-string problem and the generic "Confirm" label, both visible on screen, not guesses from code.

Where the skill was weak. I drafted the steps and ran this test side by side; these gaps showed up in the run and the fixes are in the saved SKILL.md:
1. The planned render step only allowed a scratch page that imports the component. Excalidraw's dialog needs the whole editor's context, so that route would have meant a full monorepo build. Fixed: Step 4 now lists the running app driven by a browser script as the first route.
2. The plan said nothing about states that need data, such as library items. Fixed: Step 3 and the ground rules now require "needs sample data" and a visible label for any sample.
3. The plan only covered German. In a repo with 58 locales, German was not the longest string for any key. Fixed: Step 5 adds, as advice, the longest string across all shipped languages and missing keys.
4. The test did not render the 360px library states. That is a limit of this run, listed above, not something the skill hides.

## Review notes (adversarial review, 2026-10-03)

- The first run said "no state uses sample data", but the library items were made by the capture script. Under the skill's own rule that is sample data. Labels added on the sheet and here, and the ground rules now say so outright.
- State D (count = 2) was missing. Rendered with `capture-count2.mjs` against excalidraw.com on 2026-10-03; it confirms the count-string finding: "Delete 2 item(s) from library?".
- The capture scripts had a path to one machine's Chromium. They now read `CHROME_PATH` or use Playwright's default.
- Screenshots downscaled to 1200px wide to keep the folder under 1 MB.
