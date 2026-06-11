# The Beeminder Philosophy

Beeminder works by breaking down your long-term goal and turning it into concrete day-to-day actions with associated deadlines. These deadlines, and the monetary sting they threaten, serve to take a small part of the price you'd pay by not achieving your goal and bring it into the present, allowing your long-term goal to influence your day-to-day behavior.

## Akrasia: the problem Beeminder solves

[Akrasia][1] is the ancient Greek word for acting against your own better judgment — knowing what you want to do and doing something else anyway. You mean to write every day, exercise three times a week, or stop doomscrolling at midnight, but in the moment the long-term payoff feels abstract and the short-term temptation feels real. The future you who benefits from the good habit has no vote in the decision the present you is making.

Almost everyone has goals they keep failing at this way, and the failure usually isn't about not knowing what to do or not wanting it badly enough. It's that the costs and rewards are spread out over time in a way that makes the wrong choice locally rational. Beeminder is built around the premise that this is a structural problem, not a character flaw, and that the fix is to change the structure rather than to try harder.

## A commitment device

The tool Beeminder reaches for is a [commitment device][2]: a way of voluntarily restricting your own future choices so that the version of you who shows up tomorrow can't easily weasel out. The classic example is Odysseus tying himself to the mast — binding his future self in advance because he knew willpower alone wouldn't survive the song of the sirens.

Beeminder's mast is a pledge of real money. You commit to a measurable rate of progress, and if you go off track, Beeminder charges you. That turns a vague, deferred consequence ("someday I'll regret not learning the guitar") into a sharp, immediate one ("I owe $5 today"). The point isn't the money itself — it's that a concrete cost *now* is something your present self actually responds to, in a way that distant consequences never quite manage.

## Why money

The pledge works because losing money stings more than the equivalent gain would please — a quirk of human psychology called [loss aversion][3]. A small amount on the line, payable today, can outweigh a much larger but distant benefit, which is exactly the leverage you need to pull a long-term goal into the present.

It also escalates. After each derailment the pledge climbs a schedule ($0 → $5 → $10 → $30 → …), so if a given amount turns out not to be enough to change your behavior, the next one will be. The aim is to find the smallest stake that actually works for you. For the full mechanics, see [how the money works][4]. Worth stressing: Beeminder *wants* you to keep your money. The charge is a backstop that gives the commitment teeth, not a revenue plan or a punishment for being human.

## The akrasia horizon

A commitment device is only as good as your inability to wriggle out of it at the last second. So when you change a Beeminder goal — dialing down the rate, say — the change doesn't take effect for about a week. This delay is the [akrasia horizon][5]. You can always make your goal *easier*, but never starting now; the change lands a week out, on the far side of the temptation you're feeling today.

This is what keeps the bright red line honest. In the moment of weakness, the only lever you have is to do the thing or pay the pledge. Loosening the goal is a decision your calmer, week-ago self gets to make, not your akratic present self.

## The data is the point

Beeminder is also a quantified-self tool. To enforce a commitment it has to measure your progress, and that measurement turns out to be valuable on its own. Watching the datapoints accumulate against your bright red line tells you what's actually happening, as opposed to what you vaguely assume is happening, and that feedback often changes behavior before any money is ever at risk. See [Beeminder as a self-tracking tool][6] for more on this angle.

## Further reading

*   [Schelling Fences on Slippery Slopes][7] — the logic of drawing a bright line and refusing to cross it
*   [Holiday reading: Beeminder's philosophy][8] — a forum collection of the foundational posts
*   [Akrasia][1] · [Commitment device][2] · [Loss aversion][3] — the underlying ideas
*   [What Is Beeminder?][9] · [Glossary][10] — the concepts and vocabulary in practice

[1]: https://blog.beeminder.com/akrasia/

[2]: https://en.wikipedia.org/wiki/Commitment_device

[3]: https://en.wikipedia.org/wiki/Loss_aversion

[4]: https://www.beeminder.com/money

[5]: https://help.beeminder.com/article/82-the-akrasia-horizon

[6]: https://blog.beeminder.com/qs/

[7]: https://blog.beeminder.com/schelling/

[8]: https://forum.beeminder.com/t/holiday-reading-beeminders-philosophy/7563

[9]: what-is-beeminder.md

[10]: https://blog.beeminder.com/glossary/
