Test run of brand-tool-check v0.1.0 on the SAMPLE input in sample-inhouse-designer-tasks.txt (made-up designer). Run by following SKILL.md step by step, 2026-10-03.

## The work

| Task | Who asks | Minutes a piece | How often | How long it keeps coming | What goes wrong today |
|---|---|---|---|---|---|
| Blog OG images | Marketing | 20 | About 3 a week | "Forever" | Not stated |
| Customer quote cards | Marketing, sales | 15 | 4 to 6 a week | Ongoing | Sales-made cards "used the old logo and the wrong green" |
| Webinar promo kit (4 formats) | Not stated | 120 | 1 a month | Ongoing | Not stated |
| Changelog hero images | Not stated | 45 | 2 to 3 a month | Ongoing | Not stated |
| Booth backdrop and signage | Not stated | 3 days | 1 a year | Not stated | Not stated |
| Sales deck fixes | Sales | Not stated | "constant" | Not stated | Slides rebuilt one at a time |
| Screenshots in brand frames | Not stated | 10 | Bursts: "sometimes 30 in a week," "sometimes none for a month" | Not stated | Not stated |

**Possibly one job twice:** OG images and quote cards are both a fixed-size brand image with text on it. Same tool with two templates, or two tools? Decide in Step 5.

## Daniel's rule

"If it's something that takes more than five minutes and you're doing it multiple times a day or multiple times a week, if that tool is gonna take you one or two days to build and you know there's gonna be longevity, then I would tell you to build it." (Daniel Linthwaite)

Your build guess is one number for everything: "a day or two for something simple but I honestly don't know." I use it for check 3 on the simple image tasks only.

| Task | Over 5 min | Several a week | 1 to 2 day build | Longevity | Result |
|---|---|---|---|---|---|
| Quote cards | Met | Met | Met (your guess) | Met | **Meets Daniel's rule** |
| Blog OG images | Met | Met | Met (your guess) | Met | **Meets Daniel's rule** |
| Screenshots in frames | Met | Only in bursts | Not stated | Not stated | Unknowns |
| Sales deck fixes | Not stated | Not stated | Not stated | Not stated | Unknowns |
| Webinar kit | Met | Missed | Not stated | Met | Misses |
| Changelog heroes | Met | Missed | Not stated | Met | Misses |
| Booth | Met | Missed | Not stated | Not stated | Misses |

Two tasks meet it. By your numbers, quote cards take 60 to 90 minutes a week and OG images about 60. Quote cards are also the one non-designers already make without you, and get wrong. I take quote cards as the working example. Your call.

What would settle the unknowns: for screenshots, how many weeks a quarter have a burst; for the deck, minutes per fix and fixes per week.

## Who it is for

Sales (8 people, not technical) and marketing (2 people). That is Ridd's definition: "building not the final output, but the tools that arrive at the output so that non brand designers can wield said tools and arrive at a similar place." (Ridd). Evil Rabbit: "They can actually build their own assets without waiting for designer to help." (Evil Rabbit)

## Audit first

Daniel "scraped everything that existed online" for Vercel's OG cards, "and it was just so inconsistent." (Daniel Linthwaite). You have already seen the start of yours. Advice: pull the last 20 to 50 quote cards, from you and from sales' Canva. For each, note:
- what changes: quote length, name, title, company, headshot or logo, format;
- what must never change: logo version, the green, type, margins;
- where it broke: the old logo and the wrong green, and anything else you find.
The first list becomes the parameters. The second and third become the guardrails.

## Tool spec

- **Templates:** to decide after the audit. Probably one per format you post (LinkedIn square and 4:5 are guesses; check the audit). Daniel's three parts: "There's predefined templates. There's parameters that they can change. There's, like, guardrails in place." (Daniel Linthwaite)
- **Parameters:** quote text, person name, title, company, optional headshot. To decide: customer logo or not.
- **Guardrails:** current logo only, locked brand colours, a character limit on the quote (number to decide from the audit), no free font choice.
- **One job:** quote cards only. Brett: "Each tool does one specific thing really well." (Brett). OG images get their own template or tool later.
- **Exports:** the sizes sales and marketing post at, as PNG. Myles Palmer sets the format in the tool ("we want a nine by 16 asset") with "all of the export functions built in." (Myles Palmer)
- **Variants:** light and dark versions if you post both. Daniel calls this "the churn work of, like, production assets." (Daniel Linthwaite)
- **Where it lives:** a page inside your Next.js setup that "anyone in the company can come to." (Daniel Linthwaite)
- **Variation and seed:** skip for now. Quote cards should look the same every time.

## Build brief

Advice. Paste into Claude or Cursor:

> Build an internal web page in our Next.js app for making customer quote cards. Inputs: quote (max [N] characters, show a live count), person name, title, company, optional headshot upload. One template per export size: [sizes from the audit]. Brand rules are locked and not editable: logo file [path], colours [hex], typeface [name], margins [px]. Live preview on the right. One button exports a PNG at each size. Add a dark version only if I say so. No accounts, no database: it runs in the browser. Start with one size and one template. When that works, stop and show me before adding more.

Daniel's how-to: "talk to Claude or vZero." (Daniel Linthwaite). Evil Rabbit's team began "with very tiny projects." (Evil Rabbit). Your marketer who is comfortable in code could pair with you on it, the way Evil Rabbit had Esteban and Luis "working together for a few weeks." (Evil Rabbit)

## What this skill cannot tell you

Whether the build really takes a day or two, whether sales will use it instead of Canva, who fixes it when the brand changes, and anything marked "not stated." Daniel's warning on scope: "it starts with something like I'm designing an icon generator, and then that turns into I'm designing a diagram system." Ridd: "maybe there are some gotchas in the building process that I underestimate."

Rules from Dive Radio E8, How to Engineer a Brand Universe (Sep 3, 2026): https://youtu.be/lnAecYrKYos

---
Test notes (not part of the output):
- Every quotation mark was checked by script against the E8 transcript or the sample input.
- Weak and fixed in SKILL.md: two tasks met the rule and the skill had no way to choose between them. Step 2 now says to show minutes a week from the user's own numbers, name which one non-designers already make or wait for, and let the user pick.
- Weak and fixed in SKILL.md: the user gave one build guess for everything. The skill now says to use a single guess only for tasks of the same kind and mark the rest "not stated".
- Weak, kept: the 20 to 50 audit sample size and the square/4:5 formats are mine, labelled advice and "guesses".
