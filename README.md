# Dive Radio Skills Library

One skill per episode of Dive Radio. Each skill is a `SKILL.md` in the Agent Skills format (YAML frontmatter with `name` and `description`, then the instructions), so it loads in Claude Code, Codex, Cursor and any other agent that reads skills, and the same text lives as a page in the Notion skills database.

| Skill | Episode | Replay |
|---|---|---|
| `design-job-search-coach` | E9 — How Designers Are Getting Hired in 2026 (Sep 10, 2026) | https://www.youtube.com/live/OZG115v6TTg |
| `founding-role-check` | E10 — How To Become a Founding Designer (Sep 17, 2026) | https://www.youtube.com/watch?v=x05zZ90lY28 |

## Install

**Any agent (Claude Code, Codex, Cursor, Gemini, Grok):**

```bash
npx skills add tommygeoco/dive-radio-skills
```

That is the Vercel skills CLI; it copies each skill folder into your agent's skills directory. Or copy `design-job-search-coach/` into `~/.claude/skills/` by hand.

**Notion:** the same skills live in the public Dive Radio Skills Library (https://dive.radio/skills). Members of the uxtoolsco workspace can run them from Notion Agent; everyone else installs with the command above.

## Contributing a skill

One folder per skill, `SKILL.md` inside, frontmatter `name` (kebab-case), `description` (when to use it, first 60 characters carry the trigger), `metadata.episode_url`. Every rule in the body names the person it came from.
