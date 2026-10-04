# Test input for mascot-brief-check

Part 1 is a real public GitHub feature request, fetched 2026-10-03 with gh: https://github.com/anthropics/claude-code/issues/99266 (Minecraft-2048, opened 2026-10-03). Its linked prototype is https://github.com/Minecraft-2048/mascotte-claude (MIT).

Part 2 is a description of the prototype's preview GIF (sources/apercu.gif, 192 x 208, 107 frames), written by Bones after viewing it on 2026-10-03. It is a description, not the author's words.

---

## Part 1: the issue (verbatim)

# [FEATURE] Desktop mascot that reflects Claude Code session status (like the Codex pets)

### Problem Statement

When Claude Code is working on a long task (desktop app or terminal), I switch to other windows and lose track of what it is doing: still working, waiting for my approval, finished, or failed. I only find out by switching back. Notifications help for a moment, but they disappear and they never tell me "still working".

The Codex desktop app has an animated pet in the corner of the screen that changes animation with the agent's state. It is useful, and it is also just fun to have around. Claude has no equivalent.

### Proposed Solution

An optional desktop mascot for Claude: a small always-on-top animated character in a corner of the screen that

- idles (breathing, blinking) when nothing is happening,
- plays a "working" animation while a session is running,
- plays a "waiting" animation when a permission prompt or a question needs the user,
- plays a "done" or "failed" animation when the turn ends,
- offers a shortcut on hover to start a new conversation.

### Prototype

To show the idea, I built a working prototype for Windows with Claude Code:

**https://github.com/Minecraft-2048/mascotte-claude** (MIT, single exe, [download](https://github.com/Minecraft-2048/mascotte-claude/releases/tag/v1.0.0))

![preview](https://raw.githubusercontent.com/Minecraft-2048/mascotte-claude/main/sources/apercu.gif)

- It takes its state from the command line (`MascotteClaude.exe --etat running|waiting|review|failed|idle`), so it can be driven by Claude Code hooks: `UserPromptSubmit` / `PostToolUse` for working, `Notification` for waiting, `Stop` for done. The README has an example hook configuration.
- The sprite atlas uses the same layout as Codex pets (8 x 9 grid of 192 x 208 cells), so the animation states map one to one.
- The character is an original design made for the prototype. An official version would of course use Clawd.

### Alternative Solutions

Hooks plus a third-party app, which is what the prototype does. It works, but every user has to wire it up, and it cannot know things the app knows (which session, how many are running, what the pending question is).

### Additional Context

This is a fan project, not affiliated with Anthropic. If the idea is of any use, feel free to take whatever helps from the repository.


## Part 2: the current sketch (description of the preview GIF)

Pixel art, one 192 x 208 cell. An orange-red head shaped like a flower or cog with rounded petals around the edge. A dark visor across the face with two white rectangular eyes, no mouth. A small orange body with a white asterisk mark on the chest, short arms and two short legs in a darker orange. Shown standing on a dark background.
