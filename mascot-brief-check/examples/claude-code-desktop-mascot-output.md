# Test run: mascot-brief-check on a Claude Code desktop mascot request

Run on 2026-10-03, following SKILL.md v1.0.0 step by step. Input: `claude-code-desktop-mascot-input.md` (a real public GitHub feature request plus a description of its prototype GIF). Notes on what the run exposed are at the end.

---

**Reads as:** a status character ("still working, waiting for my approval, finished, or failed") at the low-detail end, in pixel art. The open decision that matters most: which character this is. The prototype is "an original design", but "An official version would of course use Clawd."

## The facts

| | |
|---|---|
| What it is for | "I switch to other windows and lose track of what it is doing". Also "just fun to have around" |
| Product and audience | Claude Code, "desktop app or terminal". Audience beyond its users: not stated |
| Where it appears | "a small always-on-top animated character in a corner of the screen" |
| States named | idles "(breathing, blinking)", "working", "waiting", "done" or "failed", plus "a shortcut on hover" |
| Platform and limits | Prototype: Windows, "single exe". Sprites: "8 x 9 grid of 192 x 208 cells". Official platform: not stated. On-screen size: not stated |
| Style | Pixel art (from the GIF description). Official style: not stated |
| Who builds and animates | Prototype by a fan: "I built a working prototype for Windows with Claude Code". Official team: not stated |
| Deadline | Not stated |
| Current concept | Petal-edged orange head, dark visor, two white eyes, no mouth, asterisk on the chest, short arms and legs |

**Contradiction:** the form check below covers the prototype character, but the issue says an official version would use a different one. Every form answer may change if it does.

## The job

- **Give the agent a face as its default state.** The request is to see the agent's state without switching windows: notifications "never tell me "still working"". John Bai's team reached the same point: "we need to give character to it as a default state." (John Bai)
- **Build attachment.** "It is useful, and it is also just fun to have around." Ridd's reason to care: "little attachment layers where I feel like I'm invested into this little guy." (Ridd)
- **Earn trust:** not stated. Ask whether the character should also soften a failure, the case DJ raises: users "might become a little bit offended when the software as a service falls short". (DJ)

## Form check

- **Which end?** The low-detail end. Eyes and no mouth follow Kenneth Kuh's "perfect empty canvas", but the petals, chest mark, arms and legs add detail. (Tommy Geoco's spectrum, Kenneth Kuh)
- **How little does it need?** Petal head, visor, two eyes, chest asterisk, arms, legs: which carry the character, and which could go? Kenneth Kuh liked "how little we had to to give it before it started feeling like a character". Open.
- **Does it read at its real size?** The cell is 192 x 208; the on-screen size is not stated. Does the petal outline still read there, in every pose? Kenneth Kuh chose a shape that holds "no matter what angle you look at it from". Open.
- **Is it late to a trend?** The request is "like the Codex pets" and uses "the same layout as Codex pets". Ridd: "you just stand stick out like a sore thumb if you're late to these trends." What is this character's own angle? His way out is "a little bit of creativity in art direction". Open.

## States

| State | Trigger | What changes | Loop or once |
|---|---|---|---|
| Idle | "when nothing is happening" | behaviors: "breathing, blinking" | loop |
| Working | "while a session is running"; `UserPromptSubmit` / `PostToolUse` | not stated | loop |
| Waiting | "a permission prompt or a question needs the user"; `Notification` | not stated | loop until answered (suggested) |
| Done | "when the turn ends"; `Stop` | not stated | once |
| Failed | "when the turn ends" on failure; hook not stated | not stated | once |
| Hover | pointer over the character | shows "a shortcut on hover to start a new conversation" | while hovering |
| Several sessions (suggested) | the issue notes the app knows "how many are running" | not stated | loop |

Fill "what changes" from Kenneth Kuh's four: "shapes, colors, expressions, and behaviors".

**Flags:** Done and Failed fire at the same moment. With no mouth, a change of expression alone may not tell them apart at corner size; give them a color or shape difference too (advice). Waiting is the state you must not miss, so it needs to differ from Working at a glance, not only in motion (advice).

## Build paths

The sprite grid is already chosen, so the frames are drawn, not generated in code. These paths fit:

- **Keyframes by a character animator.** Daniel Kuntz: "character and normal software animation are really different disciplines", and "you kind of need key frames to do a lot of stuff really well". It costs an animator; it gets the small expressions that make Waiting and Failed read. (Daniel Kuntz)
- **AI frames, hand refined.** Yin's steps: poses from an image model, hand cleanup because "the big thing that gives that AI sloppy look is over information", animation from "six solid pose references", "first and last frames", then hand refinement. Yin's output is video ("seven twenty p", "a PNG sequence"); turning that into pixel sprites in a fixed grid is an extra step the walkthrough did not cover (advice). (Yin)
- **SVG or 2D morphing in code.** "it feels very lightweight" and has "a lot more room to get whimsical with code", but only a few expressions. It drops the pixel-art style and the sprite grid, so it only fits if that style is open. (Tommy Geoco; Ridd: SVG "has to be something that feels minimalistic")
- **Procedural 3D:** "it's heavier and requires a more complex engine", for a corner widget. (Tommy Geoco)

The working prototype is already "a prototype that I could take to an illustrator". (Tommy Geoco)

## The brief

- **Job:** show Claude Code's state from the corner of the screen, so you can tell "still working" from "waiting" without switching windows.
- **Character:** to decide (prototype or the official character).
- **Form:** low detail, eyes and no mouth; which parts stay, to decide; smallest size, to decide.
- **States:** the table above; "what changes" for working, waiting, done and failed, to decide.
- **Limits:** sprite atlas "8 x 9 grid of 192 x 208 cells"; always on top; official platform, to decide.
- **Paths still open:** animator keyframes, or AI frames refined by hand.
- **Must not look like:** not stated; to decide, given the Codex comparison.

## What this skill cannot tell you

Whether people keep it on screen or find it a distraction. Whether it is distinct enough from the Codex pets, or legally clear. How Waiting and Failed feel in motion at corner size: only the prototype on a real desktop shows that. What an animator costs. And everything marked "not stated", most of all which character ships. Tommy Geoco's list of what makes people feel something is "some eyes. It's a story. It's sounds and music." Only use shows which of those this one has.

Rules from Dive Radio E6, The Mascot Industrial Complex (Aug 20, 2026): https://www.youtube.com/watch?v=eLA79C1jq1g

---

## What the run exposed (and the fixes made to SKILL.md)

- **Two characters in one input.** The issue's prototype is "an original design", but it says an official version would use another character. The skill had no rule for that, and the form check could have looked like a verdict on the wrong character. Fix: Step 1 now says to name which character the form check covers and to flag the other as a contradiction.
- **A build path's output can clash with the platform.** Yin's steps end in 720p video and a PNG sequence; this request needs pixel sprites in a fixed grid. Fix: Step 5 now asks the skill to check each path's output (video, sprite sheet, vector, 3D) against the platform's format and say when an extra step is needed.
- **Facts outside the input.** The prototype's README lists more (a speech bubble, walking, a right-click menu), but the user pasted the issue, not the README. The run used only the issue and the GIF description. The ground rule held.
- **Word count:** about 860 words outside the tables, under the 900-word cap (recounted in review; the first count was low).
- **Quote check:** every contributor quote was checked against the E6 transcript; every input quote is in the issue or the GIF description.
- **Limit of the test:** the GIF description is mine. A user would usually paste the image or their own description.

## Adversarial review (2026-10-03)

- **Input checked against the source.** Issue #99266 matches the GitHub copy word for word, and the GIF description matches the GIF (frames 0, 40 and 80 checked: petal head, dark visor, two cream eyes, no mouth, asterisk, short limbs).
- **Every rule checked against the E6 transcript**, speaker by speaker: Kenneth Kuh (Speaker 9), John Bai (7), Daniel Kuntz (8), Yin (6), DJ (10, who says "I predominantly work with service businesses"), Tommy Geoco (3), Ridd (2). All quotes are verbatim.
- **Fixes to SKILL.md:** Tommy's SVG limit no longer says "in his words" for a paraphrase; one timestamp range corrected (00:50:32 to 00:50:48); "Tommy Geoco's first move works" became a neutral description, since the skill should not endorse a path.
- **Fixes to this run:** "His output" became "Yin's output" (the show never gives Yin's pronouns); a few words cut to stay under the cap.
