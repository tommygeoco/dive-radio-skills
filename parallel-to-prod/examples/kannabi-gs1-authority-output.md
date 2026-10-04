# Test run: parallel-to-prod on Kannabi issue #58

Run on 2026-10-03, following SKILL.md v1.0.0 step by step (after the review fixes listed at the end). Input: `kannabi-gs1-authority-input.md`, a real public issue plus verbatim excerpts from the same repo's public AGENTS.md. Nothing in the input was written for the test.

---

**Start here:** Part 2, the prefix card. Lane A: six throwaway HTML concepts, each showing at least two prefixes, varying one thing: what shows by default and what waits behind a click. The best two then go into the repo's own design-lab route, beside the real card.

## The facts

| | |
|---|---|
| The work | "Redesign the managed GS1 authority UI". "The page that exposes them is too dense to understand" |
| In production now | The Groups page, holding each prefix's "active state, three counters with their exclusions, a capability line, a refusal reason when one applies, and a list of class keys". Allocate and adopt as "two controls". The Asset page "names what is missing and links to Groups" |
| Backend touched | "The redesign changes presentation." Open: "Whether creating a prerequisite can happen without leaving the Asset" and "what that would mean for the authority checks if so" |
| Platform | Web app: "React Router v7 Framework Mode for UI" |
| Coding agent | Not stated (the repo has an AGENTS.md; which agent you use is not stated) |
| Design MD or token file | Design MD: not stated. Tokens: "`web/themes/` is the only place colour is decided"; "Tailwind CSS and shadcn/ui components on Base UI" |
| Canvas with tokens | Not stated |
| Playground | No standing playground. The repo's own rule: "Build a temporary design-lab route instead: out of the navigation, reachable only by address, mutating nothing." |
| Who reviews code | "The user performs routine manual UI/UX acceptance separately" |
| What the engineer has said | "Do not commit or push without explicit authorization." "Use the real design system and real components; a comparison between approximations decides nothing." |

**Contradictions:** the issue says "The redesign changes presentation", but two open questions (a prerequisite from the Asset, class keys from the Asset) may need server work and touch authority checks. And the lab rule starts "When the semantics and the interaction are settled", while most of this issue's questions are still about structure, not looks.

## Decide or execute

| Part | Status | In the input's words |
|---|---|---|
| 1. Where GS1 authority lives | Open | "Whether managed GS1 authority belongs on the Groups page at all." |
| 2. Prefix card hierarchy | Open | "does not survive a second prefix" |
| 3. Allocate vs adopt | Open | "still not obviously two assertions" |
| 4. The prefix → class key → issued key chain | Open | "How to make the prefix → class key → issued key chain legible without teaching GS1." |
| 5. A prerequisite from the Asset | Open | "Whether creating a prerequisite can happen without leaving the Asset" |
| 6. Read access vs control | Open | "make the difference and who to ask legible" |
| 7. Capability-limited namespaces | Decided | "still reads as valid, with its reason stated" |

**Fixed (checks for every lane):** "Four operations stay distinct". "A recorded identifier can never become issuance authority." "Authority boundaries are unchanged." No "name, description or product attribute" on an allocation record. The two counters "carry different guarantees". From AGENTS.md: UI tests assert "roles, accessible names and behaviour"; "A component never hard-codes a colour"; run "`pnpm typecheck`, `pnpm test`, and `pnpm build`"; "delete the lab along with the variants that lost".

Parts 2 and 4 are the work Charlie Deets keeps for himself: "I can pull things back. I can make it simpler. I can make it more understandable for the user." (Charlie Deets)

## Lanes

The repo's rule replaces two lanes. Lane C (playground) becomes the temporary design-lab route, with its limits: real components, "mutating nothing", both colour schemes, deleted after the choice. Lane A still works for structure, outside the repo, but under "a comparison between approximations decides nothing" HTML can narrow the options, not settle them (advice).

| Part | Starts in | Next | Why |
|---|---|---|---|
| 1 | A, 3 concepts | check with engineer | Vary only the location: Groups page, the Group destination from #67, the Asset. HTML is "enough where you can kind of get a sense of a quick interaction." (Ridd) |
| 2 | A, 6 concepts | design lab | Go wide; Ridd had "probably another 15 behind even just these two concepts". Every concept shows two or more prefixes. (Ridd) In the lab, add "the real production component" and "a short, an ordinary and a long value, an empty state". (AGENTS.md) |
| 3 | A, 4 concepts | design lab | Vary how the two assertions read before anyone commits; hover and paragraphs are ruled out. (Ridd) |
| 4 | A, 4 concepts | B or design lab | Vary the form: nesting, a small diagram, a breadcrumb. Lane B only if your canvas has the `web/themes/` tokens, which is not stated. (Ridd) |
| 5 | A, 2 concepts | handoff | One that stays on the Asset, one that makes the round trip shorter. Not for production; see the port check. |
| 6 | A, 3 concepts | design lab | Each concept shows a member without control and one with it. The lab should let you "manipulate and see every single possible state". (Ridd) |
| 7 | design lab | D | Decided. Show a capability-limited and a no-longer-issuable namespace side by side. (Ridd's "every single possible state") |

If you want Ridd's standing playground on top of the lab rule, ask for the playground brief; it starts from the repo's rule.

## Port check

| Part | Verdict | Reason |
|---|---|---|
| 2. Prefix card | auto-port candidate | Exists on the Groups page; "The redesign changes presentation." Check: the counters stay two kinds; no labels on allocation records. (Ridd, question 1) |
| 3. Allocate vs adopt | auto-port candidate | Exists as "two controls". Check: "Four operations stay distinct". (Ridd, question 1) |
| 7. Capability-limited | auto-port candidate | Exists; "Both stay readable and keep their ledgers." (Ridd, question 1) |
| 4. The chain | minor backend: confirm it is no risk | New UI. The input does not say whether the page already loads the data it needs. (Ridd, question 2) |
| 1. Where it lives | check with engineer | Depends on #67 for "the Group destination it may move to". Routing: not stated. |
| 6. Read vs control | check with engineer | Touches how permissions show; depends on #74. Permissions always get this verdict (advice). |
| 5. A prerequisite from the Asset | stays in the lab: handoff | It may weaken "the authority checks" or blur "which Group is acting". Ridd: "we just leave it in the playground and it's my new handoff point." |

Nothing here ports on its own. AGENTS.md: "Do not commit or push without explicit authorization", and acceptance is the maintainer's. "Candidate" means ready for that review, not shipped.

## Ask your engineer

1. What counts as "very minor backend" on Kannabi, and is anything near the authority checks always a handoff? (Ridd)
2. The lab is deleted after each choice. Would you accept a standing playground beside it? Ridd's case: "The cost of duplication has almost fell to zero." (Ridd)
3. Who runs the port: does the agent prepare the commit and you authorize it? Ridd's engineer just says "Hey, port this over." (Ridd)
4. Gap: the lab rule covers looks once "the semantics and the interaction are settled". Where do the structural questions (parts 1, 4, 5) get settled: in the issue thread, in HTML sketches, or in a lab?
5. Gap: may the lab show new parts (the chain, read vs control) with made-up records, given "mutating nothing"?
6. Gap: is a prerequisite from the Asset part of #58, given "The redesign changes presentation"?

## What this skill cannot tell you

Where the maintainer will draw the port line. Whether the lab rule would stretch to a standing playground. Whether an agent keeps two sets of components in sync here: Ridd's evidence is one week on his own web app. How the chain reads to a first-time user, which only the acceptance test with one shows. And what is marked "not stated": your coding agent, your canvas tool, the routing for #67, and the data part 4 needs. Ridd's own note that this keeps moving: "the pendulum always over swings".

Rules from Dive Radio E5, Goodbye, Blank Canvas (Aug 13, 2026): https://www.youtube.com/watch?v=G2_F3dd3RkA

---

## What the runs exposed (and the fixes made to SKILL.md)

First run (same issue, a made-up setup note):
- **One lane per part was too rigid.** Fix: lanes name a start lane and a next lane.
- **New parts had no port verdict.** Fix: a new part with no backend goes to question 2 and gets "minor backend: confirm it is no risk" (marked advice).
- **Lane C pointed at a step the user never sees.** Fix: the Lanes section ends with a one-line offer of the brief.

Adversarial review, second run (this one, with the repo's real AGENTS.md instead of the made-up note):
- **The made-up note was wrong about the repo.** It said "No playground". The real AGENTS.md has its own design-lab rule and a no-commit-without-authorization rule. A test on invented setup could not catch either, so the setup was replaced with the maintainer's own words.
- **The skill had no rule for codebase rules that change a lane.** Kannabi's "a comparison between approximations decides nothing" limits lane A, and its lab replaces lane C. Fix: the ground rules say the codebase's written rules outrank the method; Step 3 says which lane a repo rule replaces and keeps its limits.
- **"auto-port" read as a decision the skill cannot make**, and under "Do not commit or push without explicit authorization" nothing ports on its own. Fix: the verdict is now "auto-port candidate", with a note under the table when a person must authorize every change.
- **The playground brief would have ignored the lab rule.** Fix: Step 6 starts from any existing lab or sandbox rule and never replaces it.
- **Unlabelled suggestions.** The tip to name one variable and a number of concepts, and the new-part verdict, are the skill's ideas, not Ridd's. Both now say "advice".
- **Word count:** about 580 words outside the tables, under the 900-word cap.
- **Quote check:** every contributor quote above was checked word for word against the E5 captions; every input quote appears in the issue or the AGENTS.md excerpt.
- **Limit of the test:** the designer's own setup (coding agent, canvas) is not in any public source, so the run marks it "not stated". The issue and the repo rules are real.
