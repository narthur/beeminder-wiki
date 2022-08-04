# Tutorials

- [**How to post to a Beeminder goal with a Google Form**](https://forum.beeminder.com/t/how-to-post-to-a-beeminder-goal-with-a-google-form/7746)
- [**How to create a Beeminder BitBar plugin for Mac**](https://forum.beeminder.com/t/how-to-create-a-beeminder-bitbar-plugin-for-mac/7762)

## Beeminding RSS Feeds

Beeminder doesn't currently have an official RSS integration, but there are some tools you can use to beemind RSS feeds right now.

- [Integromat](https://www.integromat.com/en/) using the [RSS](https://www.integromat.com/en/integrations/rss) and [Beeminder](https://www.integromat.com/en/integrations/beeminder) integrations.
- Tasker
- Android Automate
- [URLminder](https://help.beeminder.com/article/88-urlminder)
- IFTTT
- The Beeminder API

### Integromat

- If you haven't already, create a Beeminder goal to track RSS posts.
- Once you have your goal created, log into [Integromat](https://www.integromat.com/en/)
- Click on "Scenarios" in the left sidebar
- Click the plus button in the top-right of the scenarios page to create a new scenario
- You should be taken to a page that says "What services do you want to integrate?"
- Search for and click on "Beeminder"
- Search for and click on "RSS"
- Click the "Continue" button at the top right of the page
- The initial module (a big question mark with a clock) should already be selected. In the menu that should already be visible select "RSS."
- Select "Watch RSS feed items."
- Paste your RSS feed into the "URL" field.
- Click the "OK" button at the bottom of the dialog.
- Decide where you want the integration to start processing. I'll leave it as "From now on," meaning only posts from this point on will be processed. Click "OK" once you've made your selection.
- Click the bump on the right side of the RSS module to add a new module.
- This time select "Beeminder" from the menu that appears.
- Select "Create a Datapoint."
- If you haven't already connected Beeminder to your Integromat account, click the "Add" button next to the "Connection" field.
- A new dialog will appear requesting your Beeminder auth token. Copy your auth token [from this url](https://www.beeminder.com/api/v1/auth_token.json) into the auth token field in Integromat.
- Click "Continue."
- If the connection was successful, addition fields should appear underneath the "Connection" field.
- Select your desired goal in the "Goal" field.
- In the "Value" field, enter the number 1. This will set the value of each new datapoint to 1 in Beeminder.
- Leave "Timestamp" and "Daystamp" epty to default to the time the datapoint is created.
- Decide what you'd like to include in the "Comment" field. You can access data from previous modules in the flow by clicking in the field. For example, you could add the RSS item's Title and URL by clicking those items in the list that appears when you place your cursor in the field.
- Leave the "Request ID" blank.
- Click "OK."
- Click the text to the right of the left-facing arrow at the top of the page to set a title for your flow.
- Click the "Run once" button at the bottom of the page to test the flow and save it at the same time.
- Click the left-facing arrow to exit edit mode.
- Click the toggle at the top-right of the window to turn the flow on.
- Click "Activate" in the modal that appears. 

You're done! This flow will now check every 15 minutes for new items in the RSS feed you provided, and will post a datapoint to your Beeminder goal for each new item.

## To Add

- Beeminding contributions to the Beeminder forum, or any other Discourse forum
- Links to tutorials in the forum and blog
- How to beemind Wakatime
- How to beemind focus sessions with HeyFocus, reproducing a bare-bones version of Narthur's [focus.sh](https://github.com/narthur/focus.sh/blob/main/focus.sh) script
