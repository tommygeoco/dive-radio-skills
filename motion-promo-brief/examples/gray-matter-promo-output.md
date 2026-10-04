# Motion Promo Brief: Gray Matter portfolio promo

## The facts

| | |
|---|---|
| Purpose | Portfolio promo for one brand project |
| Where it runs | X, and the top of the portfolio page |
| Length | About 20 seconds |
| Aspect ratio | 16:9 (site) and 1:1 (X) |
| Source designs | Figma: logo (brain + G), color palette, 3 UI screens, type specimen |
| Existing motion | Procedural Blender renders, MP4 (data lines, shapes, glass textures) |
| Tools | Claude Code + Figma MCP, Remotion; fal account for a video model |
| Reference tracks | Not stated |
| Deadline | Before the portfolio reviews next week. Exact date not stated |

**Flags.**
- The page spells it two ways: "Gray Matter" in the title and client line, "Grey Matter" in the section heading. Pick one before any text goes on screen.
- Six things to show (person, renders, logo, color, UI, end card) in about 20 seconds is tight. See the storyboard.

## Route per shot

- **Logo, color, UI, type, end card: code route.** These are type, vectors and UI, the case where the Figma MCP gives "real typography, real vector elements, everything was crisp" (Stefan Poulos, 01:28:57). Render with Remotion (Kolbe Yang, 01:20:42).
- **Data lines and glass textures: your own Blender renders, as they are.** Advice: they are already the project's motion. Do not let any model redraw them.
- **Opening shot of a person: video model.** Code cannot easily draw this. Keep all text and the logo off this shot, because a video model "felt like it was reinventing everything every time based on an image" (Stefan, 01:28:57). The mark comes in on the code route afterwards.

## Storyboard

Story, in your words: "This brand began with one goal: to make data come to life."

Draft: replace with your own frames. Stefan: storyboard "The hero moments." and "Let AI fill in the kind of transitions." (01:29:45, 01:29:46).

| # | Time | Uses | On screen | Text | Changes on the way to next |
|---|---|---|---|---|---|
| 1 | 0:00 | Video model | Person, eyes closed, calm | none | Your data-line render fades up over them |
| 2 | 0:03 | Blender render | Data lines and shapes moving | none | Lines gather toward the center |
| 3 | 0:07 | Figma logo | The brain + G mark resolves from the lines | "Gray Matter" (pick a spelling) | Mark scales down, palette arrives |
| 4 | 0:11 | Figma palette | The colors | "Despite the name, the brand avoids gray" | Colors become the UI backgrounds |
| 5 | 0:14 | 3 UI screens | Screens one after another | none | Last screen pulls back to the end card |
| 6 | 0:18 | Figma type | End card | "Gray Matter", "Logo, Naming, Graphics, Animation, 3D, UI/UX Design", "[your line]" | Hold |

Simplify for video (Stefan, 01:28:41: a stylescape "works great for a presentation, but not so well for a video"): show one UI screen at a time, not the three side by side; one palette row, no hex labels; drop the type specimen as its own shot and let the end card carry the type.

Advice for 1:1: frames 1 to 3 crop to center. In frame 5 the screens stack, one at a time. Frame 6 needs the role line on two lines.

## Brief to paste

```
Look at these Figma frames through the Figma MCP: [logo frame link], [palette frame link], [UI screen 1, 2, 3 links], [type specimen link].

Make a 20-second portfolio promo, 16:9, 1920x1080, rendered as an MP4 with Remotion. Save to ./promo/gray-matter-16x9.mp4. Then a 1:1 version, 1080x1080, using the 1:1 notes below.

Story: This brand began with one goal: to make data come to life.

Keyframes (you own everything between them):
1. 0:00 Clip person.mp4 (already made). No text.
2. 0:03 My render datalines.mp4. Place it as it is. Do not redraw or restyle it.
3. 0:07 The brain + G mark resolves out of the lines. Text: "Gray Matter".
4. 0:11 The palette, one row. Text: "Despite the name, the brand avoids gray".
5. 0:14 UI screens 1, 2, 3, one at a time.
6. 0:18 End card. Text: "Gray Matter" and "Logo, Naming, Graphics, Animation, 3D, UI/UX Design". Hold to 0:20.

Your job: the transitions and in-betweens between keyframes. It must not look like a keynote slideshow.

Restraint: calm and precise, like the UI. Use one or two motion ideas across the whole piece, not every trick you know. No bounces, no glitches, no extra effects I did not ask for.

Reference: [your reference animation] and [your music]. Time the cuts to the beats in the music and list the beat times you used.

Sound: add no sound of your own. Leave the audio track for my music.

Expose these as dials before you render: hold time per keyframe, easing curve, how fast the mark draws in, stagger between UI screens, crossfade length into and out of the renders. When I send dial values back, use them exactly.

Text rule: use only the words above. Put no other text on screen.

1:1 notes: frames 1 to 3 crop to center; frame 5 one screen at a time, full width; frame 6 role line on two lines.
```

## Cheap drafts

One shot needs a video model: frame 1. Andy Orsow: "no matter how much you prompt and plan, you're not gonna nail it the first go" (01:36:45), so draft it on a "cheaper, dumber, way faster" model (01:36:52) first.
- Question the draft must answer: does the framing and the stillness of the person work before the lines come in? Shot and timing only.
- Allow three cheap drafts. Then send the prompt that worked to the expensive model, or drop the shot and open on the renders.

## Feedback rounds

Stefan: "When you give feedback, time stamp it." (01:29:51), with what "you like and what you didn't like and and why" (01:29:55).

| Time | Keep / change | What | Why |
|---|---|---|---|
| 0:07 | change | | |

- Tune the dials first. Send words only for what the dials cannot fix (advice).
- If you use a review gate, as Tommy Geoco does "for every consequential project" (01:24:45), tell it to check the cut against this brief, the restraint line included.
- Stop rule: Ridd says "we're running out of reasons for why going from an eight out of 10 to a 10 out of 10 matters" (01:07:33). The video has to get a portfolio reviewer to open the case study. Does the current round already do that?

## What this skill cannot tell you

Whether the promo will look good. Whether Claude Code can reach every frame through your Figma MCP, or how long the renders take; none of this was run. What the video model costs today. Whether you have the rights to show this client work and to use your music. Which spelling is right, Gray or Grey. Your reference tracks and exact deadline are not stated.

Workflows from Dive Radio E12, Anyone Can Animate Now (Oct 1, 2026): https://youtu.be/bwJB9EBQNSQ

---

## Test notes (Bones, 2026-10-03)

Run by Claude Opus 5.5 inside OpenClaw, following SKILL.md step by step on the sample request in `gray-matter-promo-input.md`.

What worked: the per-shot route split put the type on the code route and kept text off the video-model shot, which is the main lesson of Stefan's clip. The text rule caught a real spelling clash on the public page (Gray vs Grey). The brief came out ready to paste.

Where the skill was weak, and what changed in SKILL.md:
1. It had nowhere in the brief for the user's own footage, so the agent could have redrawn the Blender renders. Fixed: brief item 7 now names each existing file, its keyframe, and "place it as it is".
2. It ignored the second aspect ratio. Fixed: brief item 8 adds one line per keyframe for the other format (advice).
3. Not tested: the brief was not run through Claude Code and Remotion, so whether it produces a good first cut is unknown. Step 5 was tested on one shot only.
4. The face-first advice in Step 1 did not apply to a portfolio promo and was left out. That is correct behavior but worth knowing: it only fires for product launches.
