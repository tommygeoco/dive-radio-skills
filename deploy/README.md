# dive.radio/skills redirect

`dive.radio` is served by the `dive-radio-dial` repo (github.com/tommygeoco/dive-radio-dial), deployed by Vercel from `main` to the `dive-radio-promo` project. The `/skills` redirect to the public Notion skills library lives in that repo's `vercel.json` (commit ff92ab1, 2026-09-17) next to the `/vote` proxy rewrites. Change it there.

Do not deploy a mirror of the built site to that project: it drops the rewrites and takes dive.radio/vote down (happened 2026-09-17 12:20–12:32, fixed by rollback). After a rollback, Vercel pins production until the next build is promoted (`vercel promote <url>`).
