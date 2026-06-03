# What Is Beeminder?

Beeminder is a service that helps you keep track of what you *want* to be doing, but maybe are having trouble actually following through. It takes data, either that you enter or that's automatically entered from dozens of different services (see [Integrations][1]), and it keeps track of data in a cool graph! The catch is that you set an amount you must do per day/week/month, and if that amount isn't met then you get charged money. That's the *sting* of Beeminder!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ILf8yPNSbZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How it works

1. **Pick a goal and a rate.** Decide what you want to track and how much of it you'll commit to — for example, "run 10 miles a week" or "spend no more than 30 minutes a day on social media."
2. **Beeminder draws your bright red line.** Your commitment becomes a line on a graph. As long as your datapoints stay on the right side of it, you're on track.
3. **Feed it data.** Enter datapoints by hand, or connect one of the many [integrations][1] to report your progress automatically.
4. **Stay on the line.** The day you're at risk of crossing it is an *eep day* — you have to do something that day, or you'll derail.
5. **Derail and you pay.** Going off your line triggers your pledge, and each derailment bumps the pledge up to keep the sting real.

## Key concepts

Beeminder has its own vocabulary. Here are the essentials — see the official [Glossary][2] for the full list.

- **Bright red line** — the line on your graph you commit to staying on the right side of. (You may still see this called the *Yellow Brick Road* in older posts; it's the same idea.)
- **Datapoint** — a single number you (or an integration) report toward your goal.
- **Eep day** — a day when you must enter data or do the thing, or you'll derail.
- **Derailing** — going off your bright red line. This is what triggers your pledge.
- **Pledge / the sting** — the money you put on the line. After a derailment it escalates up a schedule ($0 → $5 → $10 → $30 → …) so the commitment keeps its bite. See [how the money works][3].
- **Akrasia** — acting against your own better judgment. Beeminder is a commitment device designed to counter it; see [The Beeminder Philosophy][4].
- **Akrasia horizon** — changes you make to a goal only take effect after about a week, so you can't dodge the sting at the last minute.
- **Autodata** — data sent to Beeminder automatically by an [integration][1] instead of entered by hand.

## Learn more

- [The Beeminder Philosophy][4] — why the sting works
- [Getting Started][5] — official guides for new users
- [Use Cases][6] — ideas for what to beemind
- [Integrations][1] — connect the apps you already use
- Official: [Overview][7] · [Newbie guide][8] · [FAQ][9] · [Glossary][2]

[1]: integrations.md

[2]: https://blog.beeminder.com/glossary/

[3]: https://www.beeminder.com/money

[4]: philosophy.md

[5]: getting-started.md

[6]: use-cases.md

[7]: https://www.beeminder.com/overview

[8]: https://blog.beeminder.com/newbees/

[9]: https://www.beeminder.com/faq
