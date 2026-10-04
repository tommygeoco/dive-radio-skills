# Test output: concept-image-splitter on Backyard Designers

**Test input, labeled:** a 1440×900 screenshot of the live title screen of https://backyarddesigners.club (`backyard-designers-input.jpg`, saved as a JPEG to keep the folder small, taken 2026-10-03 with headless Chrome). We treated it as if it were a flat concept from an image model and gave the skill only the picture plus one line: "A title screen for a game where you draft seven designers. People click Start Drafting, the Classic/Hard toggle, the Dive sign, sound and restart." We picked this page because E4 says how Tommy built it, and its public CSS and JS show the real split (`backyard-designers-live-assets.txt`). That lets us grade the skill against what was built. The comparison is in the notes at the end, not in the output.

Run by following SKILL.md v0.1.0 step by step, 2026-10-03.

---

## What I see

A cartoon backyard title screen. Back to front: blue sky with a few clouds, green hills, a big tree with pink blossoms across the top, a tall wooden plank fence, a large wooden sign with "BACKYARD DESIGNERS" in carved letters on a teal board, a small plank tag "A dive EXPERIMENT", a paper strip pinned to the sign ("Draft seven designers. Build one dream team."), a teal "START DRAFTING" button, a Classic/Hard toggle with "$400K budget" and "$100K budget", a hanging "dive TALENT NETWORK →" sign, two round wooden icon buttons top right (sound, restart), two 3D-style cartoon characters (a bald figure on a ladder holding a hammer, a man with a hammer giving a thumbs up), a watering can, two flower pots, a bench, flower beds, and a lawn with daisies.

Not sure from the picture alone: whether the hills are one painted strip or part of the sky, and whether the clouds move. Ask before splitting those.

Extras to cut if this were a raw concept: none stand out. A real image-model concept would usually have more (Tommy: it "goes way overboard with details and labels", 01:07:19 to 01:07:28).

## The split

| Element | Treatment | Heavy or light | Why |
|---|---|---|---|
| Sky | Code it (CSS gradient) | Light | Smooth blue fade, no texture. Swappable for time of day |
| Clouds | Extract, one per cloud | Light | A few soft shapes; separate so they can drift |
| Hills | Extract as one wide strip | Likely heavy | Painted detail CSS can't fake. Could tile sideways if the edges match; ask |
| Tree | Extract alone | Likely heavy | Most detailed object on screen; keep it separate so it can move on its own |
| Fence | Tile it | Heavy as one image, light as a tile | Same plank repeated across the full width. Tommy did exactly this: "extract something like our fence in a way that can be used as a repeatable background pattern in a web app" (Tommy Geoco, 01:15:38) |
| Lawn | Tile it, over a CSS green fill | Heavy as one image, light as a tile | "the grass pattern is just on repeat." (Tommy Geoco, 01:16:14) |
| Big wooden sign frame | Extract | Likely heavy | Wood grain and bolts. Advice: if it must stretch, cut it as a stretchable frame (corners fixed, edges repeat) |
| "BACKYARD DESIGNERS" lettering | Real text, or art plus the same words as live text | Light | Carved display letters are hard to match with a web font. Either way, the words must exist as text |
| "A dive EXPERIMENT" tag | Extract | Light | Small textured piece |
| Tagline paper | Extract the paper; set the sentence as live text | Light | People read it |
| START DRAFTING | Component; extract the teal board as its background | Light | People click it: "because we're gonna create those as individual clickable components." (Tommy Geoco, 01:12:21). Background art: "I might actually pull those button backgrounds themselves. They might not be too heavy." (01:10:26) |
| Classic/Hard toggle and budgets | Component, coded in CSS | Light | A control with states; flat colors |
| Dive Talent Network sign | Component; extract the sign art | Light | It is a link, so it can't be baked into the fence |
| Sound and restart buttons | Component; extract the round wood frame, draw the icons in code or SVG | Light | Need hover and pressed states |
| Two characters | Extract each | Likely heavy | Detailed 3D-style figures; separate so they can be swapped or animated |
| Ladder, watering can, pots, bench, flower beds | Extract each | Light each | Small props. Separate pieces let you move them per screen size |
| Daisies in the lawn | Part of the lawn tile, or a few separate tufts | Light | Ask: random tufts look less tiled |

## Prompts for your image model

Run these in the same chat as the concept (Tommy keeps one chat per project, 01:20:40).

```
1. Now I want you to remove, like, the content from this and just give me the bare naked assets.
   Remove: all words, the START DRAFTING button, the Classic/Hard toggle, the two round icon buttons, both characters. Keep the sky, hills, tree, fence, sign boards, props and lawn.
```
```
2. Now give me each background asset individually: sky, clouds, hills, tree, fence, big sign board, small "experiment" tag, paper strip, teal button board, Dive sign, ladder, watering can, two pots, bench, flower beds.
```
```
3. Extract the fence in a way that can be used as a repeatable background pattern in a web app. The left and right edges must line up with no seam.
4. Do the same for the lawn: a strip that repeats left to right.
```
```
5. Now I need the big sign and the tree in desktop, tablet and mobile versions.
```
```
6. Give me the tree, each prop and each character on one solid magenta background (#FF00FF) so I can chroma key it out. Do not use magenta anywhere in the art.
```

Expect "phantom artifacts" (Tommy Geoco, 01:11:31). Check every piece: clean edges, no leftover words, tiles that repeat without a seam.

## Build brief

```
Reference: concept.png. This is directionally where we're trying to go. Not included: nothing yet; flag anything you think should go.

Assets in /assets/title/ (from the image model):
- tiles: fence-tile.png, lawn-tile.png (repeat-x)
- extracted: clouds-1..3, hills, tree, sign-board, experiment-tag, tagline-paper, button-board, dive-sign, icon-frame, ladder, watering-can, pot-green, pot-pink, bench, flowerbed-1..2
- characters: kid-ladder.png, man-hammer.png
You still need to pull out a couple others: the icon frame in hover and pressed states, and any piece you find missing.

Build in code, not images:
- sky as a CSS gradient
- the Classic/Hard toggle and budget labels
- all readable text as live text, including the title (if the title stays as art, add the same words as a visually hidden h1)

Components: START DRAFTING, Classic/Hard toggle, Dive Talent Network link, sound button, restart button. Each with hover, focus and pressed states.

Layering, back to front: sky, clouds, hills, tree, fence, lawn, props, sign, characters, controls.
Write a short PRD first, put every asset in its folder, then build. Show me the first build before polishing.
```

## Speed checks

Tommy's rule: every image goes through checks "to get their variations generated" (Tommy Geoco, 01:19:50), and assets come in versions for "mobile, old mobile, Android, iPhone." (01:19:21). Add these (advice):
- each extracted image saved in WebP or AVIF, in two or three widths, picked by screen size;
- a size limit per file, set by you, that fails the build when crossed;
- lazy loading for anything below the first screen;
- the title, the button board and the fence tile load first; props and characters can follow.

If you add day and night later, Tommy's notes show a cheap way: swap a CSS class, with "no shaders, no runtime cost." (01:17:27). Then measure. "Lighthouse doesn't cover everything. Some of it's a little performative." (Tommy Geoco, 01:05:46)

## What this skill cannot tell you

Real file sizes and load times: those come only from building and measuring. Whether your image model will extract each piece cleanly and tile without seams. Whether you may use the generated art the way you plan. Whether the hills and clouds are separate pieces in the concept (asked above). Whether this looks right: that is your art direction.

Rules from Dive Radio E4, Backyard Designers behind-the-scenes (Aug 6, 2026): https://youtu.be/ziyWxt6qzfM

---

## Notes from the test (not part of the output)

Graded against `backyard-designers-live-assets.txt`, what the live site actually ships.

- **Matched.** Sky in CSS (the live sky is a gradient from a time-of-day palette). Fence and lawn as tiles (`fence-display` and `grass-band`, CSS `repeat-x`, the grass over a `linear-gradient(#334116,#2b3a14)`, the same pairing the split suggested). Tree on its own (its own module, with parallax). Each prop and both characters as separate files (`bench`, `bush`, `pot-green`, `pot-pink`, `watering-can`, `ridd-ladder`, `tommy-hammer` and more). Button board, Dive sign, tagline paper and the experiment tag style pieces as extracted art (`board-teal-2bolt`, `dive-sign@1x`, `tagline-paper`, `credit-plaque`). Icon buttons as one frame image per state (`iconframe-idle`, `-hover`, `-down`), which the brief asked for.
- **Missed, fixed.** The first draft of the skill said all words must be live text, "never part of an image." The live title is lettered art (`title-sign-lettered.webp`) inside an `<h1>` with the words in a hidden span. That is a fair choice for display lettering. Step 3 now allows art lettering when the same words also exist as live text.
- **Missed, fixed.** The site cuts its wooden boards as stretchable frames (CSS `border-image` with `container-board`, `round`). The skill had no treatment for that. Step 3's "Tile it" line now names stretchable frames for panels that change size.
- **Missed, fixed in review.** The live site has separate twilight and night versions of the fence rails, grass and title. The skill only mentioned time of day in Step 7, and it said the effect "used no extra assets at runtime", which these files contradict. Step 3 now asks which pieces need a variant per state, and Step 7 says the class swap is cheap but the variant images still count toward page weight.
- **Missed, minor.** The split treats the ladder as a prop; the live site ships it inside the character file (`ridd-ladder.webp`). Either works; the skill cannot tell from a picture which pieces move together, so it should ask.
- **Not checkable.** Hills and clouds did not show up as named files in what we fetched. They may live in the sky module. We did not run the prompts through an image model, so whether they extract cleanly is untested.
- **Bias in this test.** We knew how the page was built before running the skill. The split was written from the screenshot first and graded after, but a cold test on someone else's concept would be stronger.
