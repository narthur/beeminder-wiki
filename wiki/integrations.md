# Integrations

This was originally a [forum thread][1] created by user
[**@matti**][2].

See also: [Extending Beeminder][3]

## Table of Contents

TOCPLACEHOLDER

## Meta

### Beeminder

*   Beeminder - Compose goals - [through Beemind.me][4]
*   Beeminder - Count Datapoints - [through Beemind.me][4]

### Tools to create arbitrary integrations

*   Beeminder - although not an integration per se it can be used to create those; see http://api.beeminder.com for ideas
    and frameworks that use this, see @philip's
    [API Coding Resources List][5]
*   IFTTT - [official][6]
*   [Make.com][7] (formerly Integromat) - [the integration][8]
*   huginn - [found at Github][9]
*   multigitminder - [GitHub Action on GitHub Marketplace][10]
*   [Pipedream][11] - Doesn't have a Beeminder integration, but can be extended to interface with Beeminder's API
*   Tasker (Android) - see this [Blog post][12], for recipes check out
    [this thread][13]
*   Zapier - [official][6]
*   Zenobase - see [this thread][14]

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for
[his awesome list][5], which is basically duplicated here.

P. S.: Searching for the topics [beeminder][15] or
[beeminder-api][16] on GitHub might yield more projects to try out.

### Bots

*   [beeminder/beebot][17] - Slack-Bot by @apb

### Command Line

*   [lydgate/bmndr][18] written in Python - by @bkam
*   [pjjh/bmndr][19] written in Perl (was originally a fork of lydgate/bmndr, which originally
    was a perl implementation) - by @philip
*   [malcolmocean/beeminderjs][20] written in NodeJS - by @malcolm

### Calendars, Task managers

*   Calendars - [palfrey/beeminder-calendar][21] - see your eep Days on your
    Calendar by @palfrey
*   Complice - [by Complice][22]
*   Todoist - [palfrey/docket][23] - add goals that you need to do today to your List - by
    @palfrey

### Desktop

*   [Raycast extension][24] - by Vivian Guillen. "This extensions allows you to manage your Beeminder goals with Raycast 🐝" [Forum post][25].

### Gadgets, Buttons, DIY

*   AWS IoT Buttons - see [this thread][26] by
    @thomascantrell
*   e-Ink Beeminder Dashboard - see [this thread][27] by @phi
*   Flic Buttons - see [this thread][28] it works also
    with IFTTT
*   Pebble Watch - [beeminder-capstone/pebble][29] - by @nectar
*   see also [this thread][30] with sooo many more
    IFTTT-enabled physical buttons

### Libraries

*   Angular/Ionic - [beeminder-capstone/Nectar-Frontend][31] - by @nectar
*   Emacs - [mbork/beeminder.el][31] - @mbork
*   Mathematica [beeminder/wolfminder][32] -by @dreev
*   NodeJS [malcolmocean/beeminderjs][20] - by @malcolm
*   Perl [beeminder/bee-perl][33]
*   Perl [pjjh/bmndr][19] - by @philip
*   PHP [beeminder/beeminder-php-api][34] - by @sodaware
*   Python [mattjoyce/beeminderpy][35] - by @mattjoyce
*   Ruby [beeminder/beeminder-gem][36] - by @muflax

### Mobile Apps

*   Android, iOS, Windows Mobile - [Nectar][37] - by @nectar
*   Android - [Beedroid][38] - official Beeminder app for Android
*   Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo][39] and [@zedmango's fork][40], see [@yixler's thread][41] and [@zedmango's more recent thread][42]
*   iOS - [Beeminder iOS][43] - official iOS-App by @apb and others (replaces [beemios][44]) - Link to [BeeSwift-Github Repo][45]
*   iOS - [GTBee][46] - official; get charged, when you don't do your tasks; see [this Blog post][47] and [this Blog post][48]
*   iOS - Shortcuts - see [this thread][49]

### Web

*   [Beeminder Autodialer][50] - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
*   [Beeminder Panel][51] - by @narthur. An experimental web dashboard alernative to the Beeminder web app.
*   [Beescheduler][52] - by [@enolan][53]. "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.][54]
*   [chipmanaged/MCM-Dashboard][55] - by @mary, includes an autodial feature and
    umbrella goals feature, see [this thread][56]
*   [Altbee][57] - "an alternative web interface for Beeminder."
    [Announcement thread][58].
    [Source code][59].
*   [beeminder-to-sqlite][60] - by [Ben Congdon][61], meant for viewing your Beeminder data in [Datasette][62].
*   [BUI][63] - "an alternative web interface for Beeminder but with more charts". [Source code][64]. [Announcement thread][65]

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

*   Anki - number of cards currently not due - [as an Anki extension][66], see also [this thread][67] - by @bluetulip
*   Anki - time spent reviewing or number of cards reviewed - [as another Anki extension][68] - see also [this thread][69] - by @ianminds. Seems not to support the latest versions of Anki.
*   Anki - time spent reviewing or number of cards reviewed - [as a newer Anki extension][70]. May not work with latest versions of Anki. See also [this thread][71].
*   Quizlet - Study sessions - [through Beemind.me][4]
*   Quizlet - Answer count - [through Beemind.me][4]

### Coding

*   Codecademy - Points - [through Akrasia][72]
*   Codewars - Completed Code Challenges (Kata) - [through Akrasia][72]
*   FreeCodeCamp - [see this thread][73]
*   GitHub - Commits - [official][6]
*   GitHub - Issues Closed - [official][6]
*   GitHub - Any GitHub Event - [via multigitminder GitHub Action][10]
*   Leetcode - Problems Solved - [through Akrasia][72]
*   Project Euler - Problems Solved - [through Akrasia][72]

### Languages

*   Memrise - Points - [through Akrasia][72]
*   Memrise - Words Learned - [through Akrasia][72]
*   Clozemaster - Points - [official][6]
*   Duolingo - Points - [official][6]
*   Skritter - Hours learning Chinese/Japanese - [official][6]
*   WaniKani - see [this thread][74] by @bluetulip

### Religion and Spiritual

*   [Electronic Rosary][75] - see [this blog post][76]

### Typing

*   Typeracer - Completed Games - [through Beemind.me][4]

### Writing

*   750words - See [this thread][77]
*   [Draft][78] - Number of edited words - [official][6]
*   URLMinder - count Words - [official][6]

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post][79] for details. The project is [open-source][80] if you'd like to self-host a version.

*   Instagram, Facebook, etc. - through Nectar; see [this thread][81], specifically [this response][82]; also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

*   Gmail - whittle down emails - [official][6]

### Note Taking, Project Planning

*   Evernote - Inbox Zero - through [beEvernoteZero][83]

### Time Tracking

*   Rescue Time - at least/at most Time spend - [official][6]
*   Strict Workflow - see [this thread][84] and [GitHub Repo][85], note that this is a fork of the original Chrome-Extension
*   TagTime - [GitHub Repo][86], see also [this forum category][87]
*   Toggl - average Time spend on Project/Tag/Client - [official][6]

### Task Managers, ToDo-Lists

*   [Boss as a Service][88] - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post][89]
*   Commits.to - by @yebyenw see [this thread][90] and the
    [GitHub repo][91]
*   Complice - [by Complice][22],
    [go here for examples and support][92]
*   Habitica - To-Dos and/or Dailies - [official][6]
*   Omnifocus - number of items in your OmniFocus Inbox - [through omniminder][93];
    see also [this thread][94]
*   Omnifocus - number of projects that are due for review - [through omniminder][93];
    see also [this thread][94]
*   Omnifocus - tasks completed in the last 48 hours - [through omniminder][93]; see
    also [this thread][94]
*   [TaskRatchet][95] - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
    with Beeminder. [Announcement post][96].
    [Official integration page][97].
    [Integration docs][98].
*   Taskwarrior - by @openmedi :nerd\_face: see
    [this thread][99] \[broken GitHub link]
*   ToDoIst - Todos - [official][6]
*   Trello - Card average age - [through Beemind.me][4]
*   Trello - Cards backlog - [through Beemind.me][4]
*   Trello - Cards age RMP - [through Beemind.me][4]
*   Trello - Cards backlog Exp - [through Beemind.me][4]
*   Trello - Cards moved to or from a list or board - [official][6]

## Reading, Bookmarking

*   Pinboard - Unread Items Count - [through Akrasia][72]
*   Pocket - Article backlog - [through Beemind.me][4]
*   Pocket - Article words backlog - [through Beemind.me][4]
*   Pocket - Total word count - [through Beemind.me][4]

## Health & Sports

### Activity etc.

*   Google Fit - Active time - [through Beemind.me][4]
*   Apple Health - Active / Rest Energy - [official][6], [go here for the announcement][48]
*   Apple Health - Nike fuel - [official][6], [go here for the announcement][48]
*   Apple Health - Stand hours - [official][6], [go here for the announcement][48]
*   Fitbit - Active Time - [official][6]
*   Garmin - Active Time (in Minutes) - [official][6]
*   Standing Desk Time - see [this thread][100]

### Boating, Rafting etc.

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official][6]; can also be combined with other strava activities

### Cycling, Biking

*   Austin Bcycle - [through Beemind.me][4]
*   Apple Health - Cycling distance - [official][6], [go here for the announcement][48]
*   Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official][6]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official][6]; can also be combined with other strava activities
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official][6]; can also be combined with other strava activities

### Diet

*   Apple Health - Dietary Energy / Protein - [official][6], [go here for the announcement][48]
*   Apple Health - Water consumed - [official][6], [go here for the announcement][48]
*   Fitbit - Total Calories burned / eaten - [official][6]
*   Fitbit - Water - [official][6]
*   Fitbit - Net Calories - [official][6]
*   MyFitnessPal - Total Calories Eaten - [see this thread][101]

### Gym and Co.

*   Apple Health - Exercise time - [official][6], [go here for the announcement][48]
*   Google Fit - Strength Training - [through Beemind.me][4]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official][6]; can also be combined with other strava activities

### Meditation

*   Apple Health - Mindful minutes - [official][6], [go here for the announcement][48]
*   InsightTimer.com - see [this thread][102]

### Other sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official][6]; can also be combined with other strava activities

### Sleep

*   Apple Health - Time in bed - [official][6], [go here for the announcement][48]
*   Apple Health - Time asleep - [official][6], [go here for the announcement][48]
*   Epson - Hours of sleep - [official][6]
*   Fitbit - Hours of sleep - [official][6]
*   Garmin - Hours of sleep - [official][6]
*   Google Fit - Sleeptime Lag - [through Beemind.me][4]
*   Google Fit - Sleep Duration - [through Beemind.me][4]
*   Sleep as Android - Hours of sleep - [official][6]

### Steps

*   Apple Health - Steps - [official][6], [go here for the announcement][48]
*   Epson - Steps - [official][6]
*   Fitbit - Steps - [official][6]
*   Garmin - Steps - [official][6]
*   Google Fit - Hourly Steps - [through Beemind.me][4]
*   Misfit - Steps - [official][6]

### Swimming

*   Apple Health - Swimming strokes / distance - [official][6], [go here for the announcement][48]
*   Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official][6]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official][6]; can also be combined with other strava activities

### Walking/Running etc.

*   Apple Health - Walking/running distance - [official][6], [go here for the announcement][48]
*   Epson - Total Distance (Miles or Kilometers) - [official][6]
*   Epson - Total Time - [official][6]
*   Fitbit - # of Activities - [official][6]
*   Fitbit - Floors - [official][6]
*   Garmin - Total Distance (Miles or Kilometers) - [official][6]
*   Garmin - Total Time (in Hours) - [official][6]
*   Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official][6]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official][6]; can also be combined with other strava activities

### Skating

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official][6]; can also be combined with other strava activities

### Skiing and other Snow sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official][6]; can also be combined with other strava activities

### Weight

*   Apple Health - Weight - [official][6], [go here for the announcement][48]
*   Fitbit - Weight - [official][6]
*   Fitbit - Body Fat % - [official][6]
*   Withings - Weight - [official][6]

[1]: https://forum.beeminder.com/t/beeminder-integrations-megalist/5091

[2]: https://forum.beeminder.com/u/matti

[3]: extending-beeminder.md

[4]: https://beemind.me/

[5]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[6]: https://www.beeminder.com/new

[7]: https://www.make.com/en

[8]: https://www.make.com/en/integrations/beeminder

[9]: https://github.com/huginn/huginn

[10]: https://github.com/marketplace/actions/multigitminder

[11]: https://pipedream.com/

[12]: https://blog.beeminder.com/beedroid/

[13]: https://forum.beeminder.com/t/tasker-recipes/5367/5

[14]: https://forum.beeminder.com/t/zeeminding/368/8

[15]: https://github.com/topics/beeminder

[16]: https://github.com/topics/beeminder-api

[17]: https://github.com/beeminder/beebot

[18]: https://github.com/lydgate/bmndr

[19]: https://github.com/pjjh/bmndr

[20]: https://github.com/malcolmocean/beeminderjs

[21]: https://github.com/palfrey/beeminder-calendar

[22]: https://complice.co/features#beeminder

[23]: https://github.com/palfrey/docket

[24]: https://www.raycast.com/vivgui/beeminder

[25]: https://forum.beeminder.com/t/now-you-can-manage-your-goals-using-raycast/10820

[26]: https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166

[27]: https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775

[28]: https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832

[29]: https://github.com/beeminder-capstone/pebble

[30]: https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10

[31]: https://github.com/mbork/beeminder.el

[32]: https://github.com/beeminder/wolfminder

[33]: https://github.com/beeminder/bee-perl

[34]: https://github.com/beeminder/beeminder-php-api

[35]: https://github.com/mattjoyce/beeminderpy

[36]: https://github.com/beeminder/beeminder-gem

[37]: https://github.com/beeminder-capstone/Nectar-Frontend

[38]: https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en

[39]: https://github.com/nicholasRutherford/gtbee

[40]: https://github.com/zedmango/gtbee

[41]: https://forum.beeminder.com/t/gtbee-for-android/777

[42]: https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755

[43]: https://apps.apple.com/us/app/beeminder/id551869729?mt=8

[44]: https://github.com/beeminder/beemios

[45]: https://github.com/beeminder/BeeSwift

[46]: https://itunes.apple.com/us/app/gtbee/id779525180?mt=8

[47]: https://blog.beeminder.com/gtbee/

[48]: https://blog.beeminder.com/apple/

[49]: https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7

[50]: https://autodial.taskratchet.com/

[51]: https://bm.taskratchet.com

[52]: https://beescheduler.echonolan.net/

[53]: https://forum.beeminder.com/u/enolan

[54]: https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237

[55]: https://github.com/chipmanaged/MCM-Dashboard

[56]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[57]: https://altbee.aeonc.com/

[58]: https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315

[59]: https://github.com/quantified-self-tools/altbee

[60]: https://pypi.org/project/beeminder-to-sqlite/

[61]: https://github.com/bcongdon

[62]: https://docs.datasette.io/en/stable/

[63]: https://bui.interestingprojects.net/

[64]: https://github.com/szymonkorytnicki/beeminder-ui

[65]: https://forum.beeminder.com/t/bui-the-alternative-beeminder-ui-more-charts/10416

[66]: https://ankiweb.net/shared/info/1928083890

[67]: https://forum.beeminder.com/t/anki-addon-maintained-progress/5062

[68]: https://ankiweb.net/shared/info/1728790823

[69]: https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206

[70]: https://ankiweb.net/shared/info/1201383547

[71]: https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229

[72]: https://akrasia.on.csu.io/

[73]: https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997

[74]: https://forum.beeminder.com/t/wanikani-integration/4403

[75]: https://itunes.apple.com/us/app/iterco/id489906277?mt=8

[76]: https://blog.beeminder.com/rosary/

[77]: https://forum.beeminder.com/t/beeminding-750words/4882

[78]: https://draftin.com

[79]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31

[80]: https://github.com/beeminder-capstone/Nectar-Backend

[81]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi

[82]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi

[83]: https://github.com/giovannicoppola/beEvernote

[84]: https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443

[85]: https://github.com/maggiedelano/Strict-Workflow-Beeminder

[86]: https://github.com/tagtime/TagTime

[87]: https://forum.beeminder.com/c/tagtime

[88]: https://bossasaservice.life/

[89]: https://blog.beeminder.com/baas/

[90]: https://forum.beeminder.com/t/simplest-commitbee-open-source/5232

[91]: https://github.com/kingdonb/simplest-commitbee

[92]: https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945

[93]: https://github.com/dehowell/omniminder

[94]: https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/

[95]: https://taskratchet.com

[96]: https://blog.beeminder.com/taskratchet/

[97]: https://www.beeminder.com/taskratchet

[98]: https://docs.taskratchet.com/integrations.html

[99]: https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126

[100]: https://forum.beeminder.com/t/tracking-standing-desk-time/1832

[101]: https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113

[102]: https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751
