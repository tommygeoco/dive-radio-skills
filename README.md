# Dive Radio Skills Library

One skill per episode of Dive Radio. Each skill is a `SKILL.md` in the Agent Skills format (YAML frontmatter with `name` and `description`, then the instructions), so it loads in Claude Code, Codex, Cursor and any other agent that reads skills, and the same text lives as a page in the Notion skills database.

| Skill | Episode | Replay |
|---|---|---|
| `wiki-fed-critic` | E3 — Mixed Media Workflows, Game Design (Jul 30, 2026) | https://youtu.be/szvTFybWfK4 |
| `concept-image-splitter` | E4 — Backyard Designers behind-the-scenes (Aug 6, 2026) | https://youtu.be/ziyWxt6qzfM |
| `parallel-to-prod` | E5 — Goodbye, Blank Canvas (Aug 13, 2026) | https://youtu.be/G2_F3dd3RkA |
| `mascot-brief-check` | E6 — The Mascot Industrial Complex (Aug 20, 2026) | https://youtu.be/eLA79C1jq1g |
| `agent-first-run-review` | E7 — Steal These AI Design Patterns (Aug 27, 2026) | https://youtu.be/qPAPUmg_qZE |
| `brand-tool-check` | E8 — How to Engineer a Brand Universe (Sep 3, 2026) | https://youtu.be/lnAecYrKYos |
| `design-job-search-coach` | E9 — How Designers Are Getting Hired in 2026 (Sep 10, 2026) | https://www.youtube.com/live/OZG115v6TTg |
| `founding-role-check` | E10 — How To Become a Founding Designer (Sep 17, 2026) | https://www.youtube.com/watch?v=x05zZ90lY28 |
| `component-stress-test` | E11 — Just-in-Time Interfaces (Sep 24, 2026) | https://youtu.be/2EAAU-knqRE |
| `motion-promo-brief` | E12 — Anyone Can Animate Now (Oct 1, 2026) | https://youtu.be/bwJB9EBQNSQ |

## Install

**Any agent (Claude Code, Codex, Cursor, Gemini, Grok):**

```bash
npx skills add tommygeoco/dive-radio-skills
```

That is the Vercel skills CLI; it copies each skill folder into your agent's skills directory. Or copy `design-job-search-coach/` into `~/.claude/skills/` by hand.

**Notion:** the same skills live in the public Dive Radio Skills Library (https://dive.radio/skills). Members of the uxtoolsco workspace can run them from Notion Agent; everyone else installs with the command above.

## Contributing a skill

One folder per skill, `SKILL.md` inside, frontmatter `name` (kebab-case), `description` (when to use it, first 60 characters carry the trigger), `metadata.episode_url`. Every rule in the body names the person it came from.
