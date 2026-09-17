# dive.radio/skills redirect

`dive-radio-promo-vercel.json` is the `vercel.json` deployed to the `dive-radio-promo` Vercel project (team toolbenders) on 2026-09-17 so that `dive.radio/skills` redirects to the public Notion skills library.

The project's source was not on this machine and has no git link, so the deploy was a static mirror of the live build (index.html, /assets, /audio, favicon, robots) plus this file, with `framework: null` so Vercel skips `vite build`. Any future deploy from the real Vite source must include these `redirects` or the path goes back to 404. Rollback: `vercel rollback` in the project.
