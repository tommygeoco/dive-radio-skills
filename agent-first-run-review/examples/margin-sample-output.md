Test run of agent-first-run-review v0.1.0 on the SAMPLE input in margin-sample-first-run.txt (made-up product). Run by following SKILL.md step by step, 2026-10-03.

## Step map

| # | What the user sees | What it asks | What they get back | How long | Skip or leave? |
|---|---|---|---|---|---|
| 1 | Google sign-up | Login, plus Gmail, Calendar and Drive read access | An account | Not stated | No other sign-up option |
| 2 | "Meet Margin" tour, four cards | 45 seconds of attention | An explanation | About 45 s | No skip on cards 1 to 3 |
| 3 | "Tell us about you" | Role, team size, required free text (20 characters min) | Nothing yet | Not stated | Required |
| 4 | "Connect your tools" | At least two more logins ("Connect at least 2 to continue.") | Nothing yet | Not stated | Required |
| 5 | "Margin is getting to know your workspace" | Waiting on a spinner | Nothing yet | "usually takes 2 to 6 minutes" | Cannot leave |
| 6 | Home, chat box, three suggested prompts | One prompt | **First value:** a first answer | Not stated | Yes |

**First access:** row 1. **First value:** row 6.
**Described two ways:** Google Drive access is granted in row 1 and offered again as a connection in row 4. Which one does Margin use?

## Value before access

Ridd's question: "at what point do you ask me to give you all my stuff?" (Ridd). In this flow the answer is: everything before anything. Rows 1, 3, 4 and 5 all come before the first answer. Each one gives "nothing yet":
- Row 1: Gmail, Calendar and Drive read access at sign-up, before the user has seen Margin do anything.
- Row 3: a required "What do you want Margin to help with?" box. Grok Bot had "the tell me about yourself screen" and "that was the thing that they deleted," because "we're gonna prove the value first." (Ridd). Tommy Geoco: "And a good one, I think."
- Row 4: two more logins are required. On Grok Bot's tools screen "all they had you do was select it" and "you didn't authenticate anything." (Ridd)
- Import: the flow does read existing tools, the "one, two click" Tommy wants (Tommy Geoco). It happens before the first value row.
- Disconnect: "Remove" exists, but the docs do not say what happens to data already indexed. Tommy reported Instinct users who "had disconnected things from the Vault, and then they were still getting text messages where Instinct was still reading their email." (Tommy Geoco). Not stated here; first question below.

Advice: try letting people pick their tools in row 4 without logging in, and ask for each login the first time a prompt needs it.

## Intro

Row 2 blocks entry for about 45 seconds with no skip on cards 1 to 3. Ridd on Perplexity Computer's intro: "it's the example of what not to do in a lot of ways where you're, like, blocking people from getting in," and "If you're not gonna absolutely crush the animation, the sound, the copy, every single detail of the craft, it's it's gonna suck, actually." (Ridd). Tommy Geoco checked for an exit there: "So they do have a skip intro." The input says the tour has animation and no sound; it says nothing about the copy. I can't judge the craft from text.

## What users must tell apart

Three kinds, in three tabs: "Connectors", "MCP servers", "Skills". Grok Bot has "one button that says plugins in the sidebar" and "they just threw it all into one big bucket and gave it a really familiar label." (Ridd). Advice: ask whether a new user needs to know which tab a tool lives in.

## Waits

- **Row 5, 2 to 6 minutes, full-screen spinner.** This is Ridd's long-wait case ("It takes minutes, man."). His own wait moved from "let's just animate the thing that is loading" to "I just take over the whole thing and try to teach you what is happening." Lovable used the first build for "a little video card to teach you how to use the product." (Ridd). Tommy Geoco: "we should be taking more of those loading state tips from, like, games." Advice: this screen already takes over the page; it teaches nothing. It is also the natural home for the row 2 tour.
- **Row 6, tool calls.** Raw JSON, expanded by default. Tommy's pattern is the reverse: "abbreviated versions of what it was working through," then "the ability to click into the abbreviated version to see the entire log." (Tommy Geoco). The other choice on the table: Grok Bot hides them ("They hide every single tool call."). (Ridd)
- **Row 6, first answer.** Time not stated. Ask.
- Any of these needs motion: "It requires so much more motion to achieve the the cognitive result you're after." (Tommy Geoco)

## Memory

"Margin learns from your conversations" is on by default, and no page shows what it learned. Ridd: "what does the model remember about me?" and "It's kind of a black box right now." Sky let you see "what actually is this agent's long term memory about me?" and "the memory, they made a piece of paper." (Ridd). Margin is one thread per user. Tommy Geoco: "I have one one thread, and that doesn't work for me" for long creative work. The three suggested prompts are summaries and a PRD draft. Which kind of work is Margin for?

## Questions and tests

1. What does "Remove" actually stop, and does already-indexed data go away? (rows 1 and 4)
2. How long does row 5 take for a new account with two tools connected, and how many people leave during it? (row 5)
3. Which Drive access does Margin use, row 1 or row 4? (rows 1 and 4)
4. Test: with five first-time users, how many skip reading the tour if they can, and does the row 3 free text change the first answer at all? (rows 2 and 3)
5. How long does the first answer take, and do users open the tool-call block? (row 6)

## What this skill cannot tell you

How the tour and the wait feel in motion, real wait times for real accounts, whether people will trust Margin with Gmail on screen one, and whether any of these changes will lift sign-ups or retention. Also anything marked "not stated." Only watching first-time users answers those.

Rules from Dive Radio E7, Steal These AI Design Patterns (Aug 27, 2026): https://youtu.be/qPAPUmg_qZE

---
Test notes (not part of the output):
- Word count of the output above, excluding the step map table: about 885, under the 900 cap but close. A real flow with more steps will hit the cap; the "cut the weakest points first" rule matters.
- Every quotation mark in the output was checked by script against the E7 transcript or the sample input. All matched.
- Weak and fixed in SKILL.md: Step 2 told the model to ask about import only when there is none. Margin does import, but before value, and the skill had nothing to say about that. Step 2 now asks whether import comes before or after the first value row.
- Weak, left as advice: the suggestion to move the tour into the 2 to 6 minute wait is mine, not the episode's. It is labelled advice.
- Weak, not fixable from the tape: the episode gives no time cut-off for when to hide the work versus teach during a wait. The skill names both options with who said them and asks for the real time instead of inventing a threshold.
- Not tested: a real product. Ridd and Tommy's examples are from Aug 2026 and those products may have changed; the skill says so.
