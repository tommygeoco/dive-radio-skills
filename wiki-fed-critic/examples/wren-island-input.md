# Test input (sample request, real public game)

**Label:** We wrote this request ourselves to test the skill. The game is real and public: Brad's *The Last Broadcast of Wren Island*, the point-and-click text adventure Tommy showed on Dive Radio E3 at 0:48:12 (https://the-last-broadcast-wren-island.netlify.app/). Brad did not write this request, and nothing below claims to be his view. The bar and the favorite works are our guesses at what a builder like him might paste.

---

I'm building a short point-and-click mystery in the browser (Phaser + React). You play Elliot, back at an island radio station, working out what happened to a DJ named Silas Wren on a storm night. Built mostly with AI agents: art, writing, sound, code.

What it should do (my bar):
1. A new player knows what to do in the first minute.
2. Every puzzle makes sense once you solve it. No pixel hunts, no "try every item on everything."
3. The player usually has more than one thing to try.
4. When you use the wrong item, the game answers in-world instead of saying nothing.
5. Every solved puzzle moves the story.
6. A full run takes under an hour and people want to finish it.

Games I love that are close to this: The Secret of Monkey Island, Thimbleweed Park, Return of the Obra Dinn.

Current work: the live build at the link above. Screenshot of the title screen is in `wren-island-loaded.jpg`. The player-facing text (room descriptions, item text, objectives, lock messages, endings) is in `wren-island-game-text.txt`, pulled from the public JS bundle.

Wiki so far: two sources my agent found.
- Ron Gilbert, "Why Adventure Games Suck And What We Can Do About It" (1989): https://grumpygamer.com/why_adventure_games_suck/
- Ron Gilbert, "Puzzle Dependency Charts": https://grumpygamer.com/puzzle_dependency_charts/
