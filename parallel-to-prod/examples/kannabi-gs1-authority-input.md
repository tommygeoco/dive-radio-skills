# Test input for parallel-to-prod

Everything below is public and real. Nothing in it was written for this test.

- Part 1 is a public GitHub issue, fetched 2026-10-03 with gh: https://github.com/iomz/kannabi/issues/58 (Iori Mizutani, opened 2026-09-29). Kannabi is a TypeScript web app (React Router v7, Hono, Neo4j, Vite; `server/`, `web/`, `shared/`), per the repo listing.
- Part 2 is what the maintainer has written about how work happens in this repo: excerpts, verbatim, from Kannabi's public AGENTS.md at commit 3ca49af (https://github.com/iomz/kannabi/blob/3ca49afcab5a353f52757cb7d0e1f4fc56a76817/AGENTS.md), lines 103 to 106, 109, 114, 117 to 119, 130 to 142 and 146 to 148. The rest of that file is domain rules, left out to keep this short.
- The designer's own setup (which coding agent, which canvas tool, who they are) is not given, so the run has to mark it "not stated". That is part of the test.

---

## Part 1: the issue (verbatim)

# Redesign the managed GS1 authority UI

## Background

v0.5.0 gave a Group-managed GS1 Company Prefix three things to hold: its own reference counters, the class keys managed inside it, and the operations that bring a class key into it. All of that landed on the Groups page, beside Group membership and leaving a Group.

The domain distinctions underneath are right, and human acceptance of the issuance behaviour passed. The page that exposes them is too dense to understand, and density is the problem rather than any individual control.

This Issue owns that redesign. It is a product and UI problem, not a reason to reopen the domain model.

## What acceptance actually surfaced

- **The information hierarchy does not survive a second prefix.** A managed prefix now carries an active state, three counters with their exclusions, a capability line, a refusal reason when one applies, and a list of class keys each with their own provenance, active state and serial counter. Nested inside a Group, inside a disclosure, this reads as a wall.
- **Allocate and adopt are two controls, and still not obviously two assertions.** They were one form whose meaning turned on whether a field was left blank, which was worse; splitting them was the minimum correction, not a design. A reader still has to read the copy to learn that one asks Kannabi to produce a reference and the other tells Kannabi that this Group already produced one.
- **The chain is invisible.** Nothing on the page explains that a prefix issues GIAIs directly, that a class key sits between a prefix and a serialised GRAI or an SGTIN, or why an Asset's issuance controls sometimes offer one scheme and sometimes three. A first-time reader has no way to build that model from what is shown.
- **Prerequisite navigation is a round trip.** The Asset page now names what is missing and links to Groups, which is better than silence. It still asks somebody to leave the Asset they were working on, find the right Group, create something, and come back.

## Constraints that are not up for negotiation

The redesign changes presentation. It does not change any of this:

- **Four operations stay distinct**: recording an existing identifier, adopting a managed class key, allocating a class key, issuing an individual key. A control whose meaning depends on whether a field was left blank does not express that distinction; nor does one that merges two of them.
- **A recorded identifier can never become issuance authority.** This is structural today — a serial is issuable only under a class-key record in a namespace the acting Group manages — and no shortcut in the UI may imply otherwise.
- **Authority boundaries are unchanged.** Since v0.7.0 (#20), configuring a namespace and managing a class key need membership **and** control of the managing Group, and touch no Asset. Issuing an individual key additionally needs that Group's collaboration on the Asset. Control never substitutes for membership or collaboration, and members without control still read the Group's namespaces and class keys.
- **An allocation record carries no name, description or product attribute.** A label would be the most natural-looking way to make this UI friendlier and is exactly what must not happen: allocation bookkeeping is not a trade item, and naming it would answer #50 by accretion.
- **A reference counter and a serial counter carry different guarantees**, and the UI should not present them as one kind of thing. Kannabi is the only allocator inside a managed namespace; serial non-duplication for a GTIN belongs to its allocator as a party, so a serial counter records a commitment Kannabi cannot enforce.
- **A namespace can be capability-limited without being invalid** — too long for a class reference, or configured under earlier rules and unable to issue. Both stay readable and keep their ledgers.

## Open questions

Deliberately unanswered. No visual design is prescribed here.

- Whether managed GS1 authority belongs on the Groups page at all. It is Group-scoped, which is why it landed there, but it shares almost nothing with membership management, and a Group with no prefix should not pay for the concept.
- Whether class keys should be reachable from the Asset side as well, and what that would mean for the authority checks if so.
- How to make the prefix → class key → issued key chain legible without teaching GS1. Which parts of that chain a reader genuinely needs, and which are Kannabi's bookkeeping.
- Whether a counter's position is worth showing at all outside a diagnostic view, given that it is not a count of issuances and has repeatedly been read as one.
- Whether creating a prerequisite can happen without leaving the Asset, and whether that can be done without weakening the authority checks or blurring which Group is acting.
- How much a first-time reader should be expected to understand before their first successful issuance, and what the honest minimum is.
- How the redesign presents the narrowed authority #20 shipped in v0.7.0: a member who can read a namespace may not be able to change it, and the UI has to make the difference and who to ask legible without hiding what members are entitled to read.

## Out of scope

- Any change to the domain model, the authority model, or the four distinct operations. #56 is settled.
- The trade-item referent question (#50), and any metadata on allocation records.
- GTIN-14 groupings (#53), individual key-licence authority (#54), EPC encoding (#55).
- Group membership and control UI, except where the redesign has to sit beside it. Those are #67, #74, #75 and #76. This redesign should follow #67, which provides the Group destination it may move to, and #74, which lets a member see who to ask.

## Acceptance criteria

- [ ] A person who has not read the README can go from a Group with no prefix to an issued SGTIN without being told the order of operations.
- [ ] Allocating and adopting are distinguishable before a reader commits to either, without relying on hover or on reading a paragraph.
- [ ] The relationship between a prefix, a class key and an issued identifier is discoverable from the UI.
- [ ] No domain operation is collapsed, and no control's meaning depends on a field being left blank.
- [ ] Authority checks and their failure messages are unchanged in behaviour.
- [ ] A capability-limited or no-longer-issuable namespace still reads as valid, with its reason stated.
- [ ] No allocation record gains a name, description or other domain metadata.
- [ ] UI tests continue to assert roles, accessible names and behaviour rather than markup shape.

---
_Generated by [Claude Code](https://claude.ai/code)_

## Part 2: the codebase rules (verbatim excerpts from AGENTS.md)

Use Hono for server behavior, React Router v7 Framework Mode for UI, and Neo4j for master data.
Style the UI with Tailwind CSS and shadcn/ui components on Base UI; do not reintroduce a hand-written application stylesheet.
`web/themes/` is the only place colour is decided. It publishes a palette at runtime as `--kannabi-*`, and `web/style.css` maps that palette onto Tailwind's `--color-*` namespace — including the names the shadcn components ask for — with `@theme inline`. A component never hard-codes a colour, and a new colour is a new palette token rather than a literal.
`web/style.css` holds the theme bridge and decisions about the document as a whole. Anything narrower belongs to a component: shared compositions live in `web/ui.tsx`, and vendored primitives in `web/components/ui/`.

UI tests assert roles, accessible names and behaviour rather than class names or markup shape. A surface anchored in a portal — a dialog, a menu, a toast — is opened in a real document and read back, never asserted against static markup.

Run `pnpm typecheck`, `pnpm test`, and `pnpm build` for application changes.

Do not commit or push without explicit authorization.

A human acceptance-test cycle adds a restriction rather than relaxing the one above: committing still requires explicit authorization, and an authorized local commit must additionally not be pushed to the pull request branch until the human accepts that checkpoint. Pushing publishes the work for remote review and therefore advances the checkpoint on the human's behalf, which is theirs to decide.

## Deciding a visual question

When the semantics and the interaction are settled but the way something should look is not, stop guessing at it one small change at a time. Repeatedly shipping a styling tweak to be looked at spends a review cycle per guess and resolves nothing in writing.

Build a temporary design-lab route instead: out of the navigation, reachable only by address, mutating nothing.

Put materially different candidate treatments beside each other, and include the real production component where one exists, so the comparison is between things that actually render rather than between descriptions of them. Hold the settled semantics and interaction constant, so the only thing varying is the open question. Use the real design system and real components; a comparison between approximations decides nothing.

Label each variant with what it is testing and say which one currently ships. Include the content that might change the answer — a short, an ordinary and a long value, an empty state — and check the variants in both colour schemes, because a treatment can be obvious in one and effectively invisible in the other.

The point is to let acceptance choose between rendered alternatives rather than translating a visual reaction through another round of prose and implementation.

Once the choice is made, apply it, and delete the lab along with the variants that lost. A lab left behind is dead code that reads like a decision still being made.

Unless explicitly requested, do not launch or attach to a browser, desktop application, or other GUI for manual interaction testing.

Prefer automated unit, integration, API, typecheck, and build validation. The user performs routine manual UI/UX acceptance separately.
