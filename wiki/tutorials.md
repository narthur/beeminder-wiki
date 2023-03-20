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
*   If the connection was successful, addition fields should appear underneath the "Connection" field.
*   Select your desired goal in the "Goal" field.
*   In the "Value" field, enter the number 1. This will set the value of each new datapoint to 1 in Beeminder.
*   Leave "Timestamp" and "Daystamp" epty to default to the time the datapoint is created.
*   Decide what you'd like to include in the "Comment" field. You can access data from previous modules in the flow by clicking in the field. For example, you could add the RSS item's Title and URL by clicking those items in the list that appears when you place your cursor in the field.
*   Leave the "Request ID" blank.
*   Click "OK."
*   Click the text to the right of the left-facing arrow at the top of the page to set a title for your flow.
*   Click the "Run once" button at the bottom of the page to test the flow and save it at the same time.
*   Click the left-facing arrow to exit edit mode.
*   Click the toggle at the top-right of the window to turn the flow on.
*   Click "Activate" in the modal that appears.

You're done! This flow will now check every 15 minutes for new items in the RSS feed you provided, and will post a datapoint to your Beeminder goal for each new item.

## To Add

*   Beeminding contributions to the Beeminder forum, or any other Discourse forum
*   Links to tutorials in the forum and blog
*   How to beemind Wakatime
*   How to beemind focus sessions with HeyFocus, reproducing a bare-bones version of Narthur's [focus.sh][6] script

[1]: https://forum.beeminder.com/t/how-to-post-to-a-beeminder-goal-with-a-google-form/7746

[2]: https://forum.beeminder.com/t/how-to-create-a-beeminder-bitbar-plugin-for-mac/7762

[3]: https://www.beeminder.com/rssminder

[4]: https://www.make.com/en

[5]: https://www.beeminder.com/api/v1/auth_token.json

[6]: https://github.com/narthur/focus.sh/blob/main/focus.sh
