# Test output: wiki-fed-critic on The Last Broadcast of Wren Island

Run by following SKILL.md v0.1.0 step by step on `wren-island-input.md`, 2026-10-03. The two Gilbert essays were fetched and read in full. The game was not played: the critic saw one title-screen screenshot and the player-facing text from the public bundle. Notes on how the run went are at the end.

## The bar

Your six outcomes, made checkable:

| # | Outcome | Who can check it |
|---|---|---|
| 1 | Within the first minute the player knows the first thing to do | Critic (from objectives and opening text); real players for "within a minute" |
| 2 | Each puzzle's answer makes sense afterward; no trial and error | Critic |
| 3 | Most of the time the player has two or more open leads | Critic, if it can see the lock rules |
| 4 | Wrong item use gets an in-world reply | Critic |
| 5 | Each solved puzzle reveals story | Critic |
| 6 | A run takes under an hour and people want to finish | Real players only. The playtest can measure time; only people can tell you "want to" |

Tommy's frame for this: "Give it a goal." Then: "Give it like a bar." (Tommy Geoco, 0:49:32 to 0:49:42)

## Sources to find

You have two Ron Gilbert essays. Still missing, for the other works you named:
- Thimbleweed Park: the dev blog the team kept while building it, and any postmortem talk with a transcript.
- Return of the Obra Dinn: Lucas Pope's development log and interviews about how he kept deductions fair.
- Your own rules: a page of what you have already learned building this game.

Tommy's wiki mixes "a bunch of stuff from experts in the industry of whatever it is I'm trying to do" with his own (Tommy Geoco, 1:27:41).

## Research brief

```
Here are three games I love: The Secret of Monkey Island, Thimbleweed Park, Return of the Obra Dinn.
Go out in the internet, find game developer conference talks, anything that basically amounts to lessons learned from the creators of these games. Synthesize those videos and takeaways into a wiki about what we want.
Then tell me what you think is worth calling out to make this the best experience within the context of what we're trying to do: a short browser point-and-click mystery, under an hour, about a radio station and a storm night.

Rules for the wiki:
- Prefer sources you can actually read: essays, dev blogs, talk transcripts. If a talk has no transcript, list it as "not read". Do not summarize it from its title.
- One page per source, with its link at the top.
- Number every lesson. Give the creator's own words in quotes, or a summary marked "summary".
- Last page, "Worth calling out": tie lessons to my bar (below) and note any two lessons that disagree.
- No source, no lesson.

My bar: [paste the six outcomes]
```

## Critic prompt

```
# critic.md: Wren Island critic

You are the crankiest member of this team. Your job is to find what breaks the bar, not to be nice.

Before every review:
1. Search the wiki in /wiki. Read "Worth calling out" and every page a complaint might rest on.
2. Read the bar and last round's critique.

Review the current build. For each bar outcome write: pass, partial, fail, or can't tell from this evidence.
Before you call anything a fail, search the build for evidence against it and quote it. If the build partly meets the outcome, write partial and quote both sides.
For every fail or partial give:
- the wiki page and lesson number behind it, with the lesson's words;
- what in the build breaks it, quoting the build;
- the smallest change that would fix it.
Then list "taste only": things you dislike that no wiki lesson backs.
Then list what you could not see, and the cheapest way to get it (a playtest, a puzzle dependency chart, a real player).

Never rewrite the game. Hand this list back to the builder agent. The human decides what ships.
```

## The gate

- **Pass:** you fill this in. Suggested shape: outcomes 1 to 5 pass with no open fails.
- **Rounds before it stops and asks you:** you pick. Advice: three.
- **Always yours, whatever the critic says:** outcome 6, the art direction, and the ending choice.

Tommy keeps the final call and uses his critic "to monitor parts of the loop that I don't always want to be involved in" (Tommy Geoco, 1:29:18).

## First pass

**Thin wiki:** both pages are by one maker, Ron Gilbert, so these findings carry his taste. (Line added after the Step 2 fix below.)

Wiki used: page A, Gilbert, "Why Adventure Games Suck" (lessons A1 to A12, in the order of his rules of thumb); page B, Gilbert, "Puzzle Dependency Charts" (B1 to B4).

**1. First thing to do: pass.** The first objective is "Find the tape Nora left cued in the booth." and the reel-to-reel text backs it up: "Someone left it cued halfway through a recording." Gilbert (A2): "Letting the player know at least the first sub-goal is essential in hooking them." Can't tell: whether the end goal is clear early. The text names the evidence packet only near the end ("Assemble the final evidence packet in the relay room."). A1 asks for "a clear vision as to what he or she is trying to accomplish" at the start.

**2. Puzzles make sense: pass on this evidence.** The melody chain gives a hint at each link: "Inside the matchbook, four tiny staff marks line up like a phrase waiting for a melody." then "Orlan says the chapel kept old hymn numbers as a memory aid, but he warned that Silas treated them like a dial." The problem comes before the solution, as Gilbert wants (A4: "The backwards puzzle occurs when the solution is found before the problem."): "The archive door is shut tight." comes well before the "brass service key cut for WQWR's archive lock."

**3. More than one open lead: partial.** For: two objectives give a real choice: "Go to Gull's Nest Diner or the Chapel Ruins to follow Cal's lead." and "Use the transmitter module to pressure Vivian or find the keeper log." Against: the first choice is thin, because the chapel waits on the diner: "Find the choir melody in the diner before reading the hymn board." The area gates also run in one line: "Finish the harbor investigation before following the inland roads.", then "Find and test the hidden WQWR frequency before climbing to the lighthouse.", then "Recover the missing tape fragment before entering the final broadcast room." Gilbert (B2): "There is nothing (NOTHING!) worse than linear adventure games", and "Solving one puzzle should open up 2 or 3 new ones". The locks do have in-world reasons ("The chapel path is lost in rain until the harbor story gives it shape."), so A11 (unconnected events) passes. The problem is how few leads are open at once, not the locks. Smallest fix: let the player take the hymn-board rubbing before hearing the melody, so the diner and the chapel can be done in either order. The game already has the item ("A charcoal rubbing from the chapel hymn board."). Next smallest: open the inland roads once the player has met Cal, so the harbor clues and the diner clues can be worked side by side. The later locks follow the story (the lighthouse needs the frequency the melody gives), so they can stay. Keep the tunnel as the act-ending bottleneck Gilbert describes (B3: "each act ends with a bottle neck to the next act").

**4. Wrong item replies: pass.** Every object and character has a fallback line, for example "The shape is wrong for this lock. The island was careful about which keys opened which secrets." That fits A10 ("Figure out what the player is trying to do.").

**5. Story with each puzzle: pass.** Each clue writes a story line into the journal, for example "The storm-night receipt line puts Mina behind the counter when Cal says everyone had gone home. Another small lie gets a timestamp." Gilbert (A6): "Each puzzle solved should bring the player closer to understanding the story and game."

**Taste only (no wiki lesson behind it):** the six characters share the same fallback lines with only the name swapped, for example "Nora studies it, but it does not open a new line of questioning yet." and "Cal studies it, but it does not open a new line of questioning yet." Players who try one item on everyone will notice.

**Could not see, and how to get it:**
- Whether a needed item can be missed for good (A5, "I forgot to pick it up"). "Find the next lead before leaving this area." suggests a guard. Check: a playtest run that skips every optional pickup.
- Real puzzle order inside each area. Check: have the builder agent draw a puzzle dependency chart from the code (B1).
- Outcome 6. Check: the playtest below, then real players.

## Playtest

Tommy had an agent play his game and track numbers version against version: "have a before and an after state on versions and have an agent walk through the app and perform this on certain KPIs." (Tommy Geoco, 1:30:58) Measures for this game, the same each run:
- minutes from "Click to begin" to the end, per ending;
- the longest stretch with no new journal entry (where players stall);
- number of wrong-item tries before each solve.

"I don't don't replace user testing. Of course not with real people, you need that." (Tommy Geoco, 1:30:48 to 1:30:52)

## What this skill cannot tell you

Whether Gilbert's 1989 rules fit a one-hour browser mystery until you read the wiki yourself. Whether the critic's taste matches yours. Whether players enjoy it or finish it. What it could not see: actual play, timing, sound, and art in motion. Tommy is still tuning his critic: it is "something I'm learning how to build quickly in every project that I do" (1:29:07). Expect to rewrite `critic.md` after a few rounds.

Rules from Dive Radio E3, Mixed Media Workflows, Game Design (Jul 30, 2026): https://youtu.be/szvTFybWfK4

---

## Notes from the test (not part of the output)

- **What worked.** The critic found one real issue from evidence (single-line area locks) and kept it apart from a taste note (templated replies). Each finding cites a numbered lesson and quotes the game text.
- **Weak spot 1, fixed.** Tommy's research prompt says "videos". An agent that cannot watch video will summarize talks from their titles. Step 3 now asks for readable sources and marks untranscribed talks "not read". This test used two essays, not GDC talks, for that reason.
- **Weak spot 2, fixed.** The first draft's critic listed what it could not see but not how to get it. The output now adds the cheapest check for each gap.
- **Weak spot 3, fixed in the skill, still true of this run.** The wiki here is two sources from one designer, so every fail leans on Ron Gilbert's taste. Step 2 now asks for at least three makers and tells the critic to say so at the top when the wiki rests on fewer. This run did not meet that bar.
- **Weak spot 4, caught in review.** The first draft's fix for outcome 3 opened the lighthouse early, which would break the game's own story logic (the lighthouse needs the frequency). The critic prompt already says "smallest change"; the fix was rewritten to drop only the one gate with no story reason.
- **Weak spot 5, caught in the adversarial review (2026-10-03).** The first run called outcome 3 a flat fail ("the game locks areas in a single line") and missed two either/or objectives in the same text. The critic had looked only for evidence that the game was linear. SKILL.md now tells the critic to search for evidence against each fail and adds a "partial" grade; outcome 3 above is the re-run under that rule, and its smallest fix changed with it.
- **Limit of this test.** We did not play the game, so outcome 3 rests on objective and lock text, not on watching the order happen. Brad may have reasons for the single line that the text does not show.
