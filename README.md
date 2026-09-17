# Dive Radio Skills Library

One skill per episode of Dive Radio. Each skill is a `SKILL.md` in the Agent Skills format (YAML frontmatter with `name` and `description`, then the instructions), so it loads in Claude Code, Codex, Cursor and any other agent that reads skills, and the same text lives as a page in the Notion skills database.

| Skill | Episode | Replay |
|---|---|---|
| `design-job-search-coach` | E9 — How Designers Are Getting Hired in 2026 (Sep 10, 2026) | https://www.youtube.com/live/OZG115v6TTg |

## Install

Claude Code: copy the folder into `~/.claude/skills/` (global) or `.claude/skills/` in a project, then type `/design-job-search-coach` or just paste a posting and ask for help pursuing it.

Codex / Cursor / others: point the agent at the `SKILL.md`, or paste its contents as the system instruction for the task.

Notion: the same skill is a page in the Dive Radio Skills Library; run it from the Agent with `/` or let the Agent pick it automatically.

## Contributing a skill

One folder per skill, `SKILL.md` inside, frontmatter `name` (kebab-case), `description` (when to use it, first 60 characters carry the trigger), `metadata.episode_url`. Every rule in the body names the person it came from.
