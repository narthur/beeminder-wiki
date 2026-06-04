# Tutorials

*   [**How to post to a Beeminder goal with a Google Form**][1]
*   [**How to create a Beeminder BitBar plugin for Mac**][2]

## Beeminding RSS Feeds with Make.com

Beeminder has [an official RSS integration][3]. However, it's limited to a single RSS feed, and it doesn't allow you to customize the datapoint value or comment. If you want to beemind multiple RSS feeds, or if you want to customize the datapoint value or comment, you can use Make.com to create a custom RSS integration.

Below are instructions for creating a simple custom RSS integration with Make.com. Once you have the basic flow set up, you can customize it to meet your needs.

*   If you haven't already, create a Beeminder goal to track RSS posts.
*   Once you have your goal created, log into [Make.com][4]
*   Click on "Scenarios" in the left sidebar
*   Click the plus button in the top-right of the scenarios page to create a new scenario
*   You should be taken to a page that says "What services do you want to integrate?"
*   Search for and click on "Beeminder"
*   Search for and click on "RSS"
*   Click the "Continue" button at the top right of the page
*   The initial module (a big question mark with a clock) should already be selected. In the menu that should already be visible select "RSS."
*   Select "Watch RSS feed items."
*   Paste your RSS feed into the "URL" field.
*   Click the "OK" button at the bottom of the dialog.
*   Decide where you want the integration to start processing. I'll leave it as "From now on," meaning only posts from this point on will be processed. Click "OK" once you've made your selection.
*   Click the bump on the right side of the RSS module to add a new module.
*   This time select "Beeminder" from the menu that appears.
*   Select "Create a Datapoint."
*   If you haven't already connected Beeminder to your Make.com account, click the "Add" button next to the "Connection" field.
*   A new dialog will appear requesting your Beeminder auth token. Copy your auth token [from this url][5] into the auth token field in Make.com.
*   Click "Continue."
*   If the connection was successful, additional fields should appear underneath the "Connection" field.
*   Select your desired goal in the "Goal" field.
*   In the "Value" field, enter the number 1. This will set the value of each new datapoint to 1 in Beeminder.
*   Leave "Timestamp" and "Daystamp" empty to default to the time the datapoint is created.
*   Decide what you'd like to include in the "Comment" field. You can access data from previous modules in the flow by clicking in the field. For example, you could add the RSS item's Title and URL by clicking those items in the list that appears when you place your cursor in the field.
*   Leave the "Request ID" blank.
*   Click "OK."
*   Click the text to the right of the left-facing arrow at the top of the page to set a title for your flow.
*   Click the "Run once" button at the bottom of the page to test the flow and save it at the same time.
*   Click the left-facing arrow to exit edit mode.
*   Click the toggle at the top-right of the window to turn the flow on.
*   Click "Activate" in the modal that appears.

You're done! This flow will now check every 15 minutes for new items in the RSS feed you provided, and will post a datapoint to your Beeminder goal for each new item.

## Beeminding a Discourse forum

The [Beeminder forum][6] runs on [Discourse][7], and so do many other communities (try adding `.rss` to a Discourse URL to see whether a feed is available). Discourse publishes a per-user RSS feed of your public activity, so you can beemind your own forum participation without any custom code.

Your activity feed lives at:

    https://forum.beeminder.com/u/USERNAME/activity.rss

Replace `forum.beeminder.com` with any Discourse site, and `USERNAME` with your username. If you'd rather only count the new topics you start, use the topics feed instead:

    https://forum.beeminder.com/u/USERNAME/activity/topics.rss

Plug that URL into Beeminder's [official RSS integration][3], or into the Make.com flow above if you want to customize the datapoint value or comment.

## How to beemind WakaTime

[WakaTime][8] tracks how much time you spend programming via open-source plugins for 90+ editors and IDEs. Beeminder has an [official WakaTime autodata integration][9], so you don't need any scripting to beemind your coding time.

*   Install the [WakaTime plugin][10] for your editor.
*   Go to [beeminder.com/wakatime][9] (or click the WakaTime logo on the Beeminder front page).
*   Click "Connect to WakaTime," then press "Authorize" on WakaTime to grant Beeminder access to your data.
*   Create a goal for time spent programming and code like normal — Beeminder will alert you if you're not putting in enough hours.

For more detail, see the [help article][11] and the [announcement on the blog][12]. Note that WakaTime data can lag by about a day, so don't panic if today's coding hasn't shown up yet.

## How to beemind focus sessions with HeyFocus

[HeyFocus][13] is a Mac app that blocks distracting sites and apps during a focus session, and it can be driven by the `focus://` URL scheme. The script below starts a focus session of a given length and, when you stop it, posts the number of hours you focused to a Beeminder goal.

```bash
#!/bin/bash
# Usage: ./focus.sh MINUTES
# Requires HeyFocus (or another app that handles the focus:// URL scheme).

BM_USER="your_username"
BM_GOAL="your_goal"
BM_TOKEN="your_auth_token"   # from https://www.beeminder.com/api/v1/auth_token.json

MIN=$1
START=$(date +%s)

# When you press Ctrl+C, end the focus session and post the elapsed hours.
handler() {
  open "focus://unfocus"
  END=$(date +%s)
  HOURS=$(echo "($END - $START) / 3600" | bc -l)
  echo "Focused for $HOURS hours"
  curl -X POST \
    "https://www.beeminder.com/api/v1/users/${BM_USER}/goals/${BM_GOAL}/datapoints.json" \
    -d auth_token="${BM_TOKEN}" \
    -d value="${HOURS}" \
    -d comment="focus.sh"
  exit
}
trap handler SIGINT

# Start the focus session, then wait out the timer (or stop early with Ctrl+C).
open "focus://focus?minutes=${MIN}"
sleep "$((MIN * 60))"
handler
```

Save it as `focus.sh`, run `chmod +x focus.sh`, and start a 25-minute session with `./focus.sh 25`. Stop early at any time with Ctrl+C and it still posts the time you actually focused.

For a fuller version — pink-noise audio, posting to several goals at once, and credentials kept in an `.env` file — see Narthur's [focus.sh][14] on GitHub.

## More tutorials and guides

Beyond the tutorials above, the official channels are the best place to find more how-tos:

*   [Beeminder Blog][15] — frequent how-tos, deep dives, and integration announcements.
*   [Beeminder Help][11] — the official help center, organized by topic.
*   [Beeminder Forum][6] — search the community for setups and recipes, or ask your own question.

[1]: https://forum.beeminder.com/t/how-to-post-to-a-beeminder-goal-with-a-google-form/7746

[2]: https://forum.beeminder.com/t/how-to-create-a-beeminder-bitbar-plugin-for-mac/7762

[3]: https://www.beeminder.com/rssminder

[4]: https://www.make.com/en

[5]: https://www.beeminder.com/api/v1/auth_token.json

[6]: https://forum.beeminder.com/

[7]: https://www.discourse.org/

[8]: https://wakatime.com/

[9]: https://www.beeminder.com/wakatime

[10]: https://wakatime.com/integrations

[11]: https://help.beeminder.com/

[12]: https://blog.beeminder.com/wakatime/

[13]: https://heyfocus.com/

[14]: https://github.com/narthur/focus.sh/blob/main/focus.sh

[15]: https://blog.beeminder.com/
