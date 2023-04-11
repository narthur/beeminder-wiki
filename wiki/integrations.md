# Integrations

This was originally a [forum thread][1] created by user
[**@matti**][2].

See also: [Extending Beeminder][3]

## Table of Contents

*   [Meta](#meta)

    *   [Beeminder](#beeminder)
    *   [Tools to create arbitrary integrations](#tools-to-create-arbitrary-integrations)

*   [Interfaces for Beeminder](#interfaces-for-beeminder)

    *   [Bots](#bots)
    *   [Command Line](#command-line)
    *   [Calendars, Task managers](#calendars-task-managers)
    *   [Desktop](#desktop)
    *   [Gadgets, Buttons, DIY](#gadgets-buttons-diy)
    *   [Libraries](#libraries)
    *   [Mobile Apps](#mobile-apps)
    *   [Web](#web)

*   [Learning, Training, Improving, Doing](#learning-training-improving-doing)

    *   [Flash Cards (see also: Languages)](#flash-cards-see-also-languages)

        *   [Anki](#anki)
        *   [Quizlet](#quizlet)

    *   [Coding](#coding)

    *   [Languages](#languages)

    *   [Religion and Spiritual](#religion-and-spiritual)

    *   [Typing](#typing)

    *   [Writing](#writing)

*   [Social Media and Communities](#social-media-and-communities)

*   [Productivity, Work](#productivity-work)

    *   [Email](#email)
    *   [Note Taking, Project Planning](#note-taking-project-planning)
    *   [Time Tracking](#time-tracking)
    *   [Task Managers, ToDo-Lists](#task-managers-todo-lists)

*   [Reading, Bookmarking](#reading-bookmarking)

*   [Health & Sports](#health--sports)

    *   [Activity etc.](#activity-etc)
    *   [Boating, Rafting etc.](#boating-rafting-etc)
    *   [Cycling, Biking](#cycling-biking)
    *   [Diet](#diet)
    *   [Gym and Co.](#gym-and-co)
    *   [Meditation](#meditation)
    *   [Other sports](#other-sports)
    *   [Sleep](#sleep)
    *   [Steps](#steps)
    *   [Swimming](#swimming)
    *   [Walking/Running etc.](#walkingrunning-etc)
    *   [Skating](#skating)
    *   [Skiing and other Snow sports](#skiing-and-other-snow-sports)
    *   [Weight](#weight)

## Meta

### Beeminder

*   Beeminder - Compose goals - [through Beemind.me][49]
*   Beeminder - Count Datapoints - [through Beemind.me][49]

### Tools to create arbitrary integrations

*   Beeminder - although not an integration per se it can be used to create those; see http://api.beeminder.com for ideas
    and frameworks that use this, see @philip's
    [API Coding Resources List][50]
*   IFTTT - [official][51]
*   [Make.com][52] (formerly Integromat) - [the integration][53]
*   huginn - [found at Github][54]
*   multigitminder - [GitHub Action on GitHub Marketplace][55]
*   [Pipedream][56] - Doesn't have a Beeminder integration, but can be extended to interface with Beeminder's API
*   Tasker (Android) - see this [Blog post][57], for recipes check out
    [this thread][58]
*   Zapier - [official][51]
*   Zenobase - see [this thread][59]

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for
[his awesome list][50], which is basically duplicated here.

P. S.: Searching for the topics [beeminder][60] or
[beeminder-api][61] on GitHub might yield more projects to try out.

### Bots

*   [beeminder/beebot][62] - Slack-Bot by @apb

### Command Line

*   [lydgate/bmndr][63] written in Python - by @bkam
*   [pjjh/bmndr][64] written in Perl (was originally a fork of lydgate/bmndr, which originally
    was a perl implementation) - by @philip
*   [malcolmocean/beeminderjs][65] written in NodeJS - by @malcolm

### Calendars, Task managers

*   Calendars - [palfrey/beeminder-calendar][66] - see your eep Days on your
    Calendar by @palfrey
*   Complice - [by Complice][67]
*   Todoist - [palfrey/docket][68] - add goals that you need to do today to your List - by
    @palfrey

### Desktop

*   [Raycast extension][69] - by Vivian Guillen. "This extensions allows you to manage your Beeminder goals with Raycast 🐝" [Forum post][70].

### Gadgets, Buttons, DIY

*   AWS IoT Buttons - see [this thread][71] by
    @thomascantrell
*   e-Ink Beeminder Dashboard - see [this thread][72] by @phi
*   Flic Buttons - see [this thread][73] it works also
    with IFTTT
*   Pebble Watch - [beeminder-capstone/pebble][74] - by @nectar
*   see also [this thread][75] with sooo many more
    IFTTT-enabled physical buttons

### Libraries

*   Angular/Ionic - [beeminder-capstone/Nectar-Frontend][76] - by @nectar
*   Emacs - [mbork/beeminder.el][76] - @mbork
*   Mathematica [beeminder/wolfminder][77] -by @dreev
*   NodeJS [malcolmocean/beeminderjs][65] - by @malcolm
*   Perl [beeminder/bee-perl][78]
*   Perl [pjjh/bmndr][64] - by @philip
*   PHP [beeminder/beeminder-php-api][79] - by @sodaware
*   Python [mattjoyce/beeminderpy][80] - by @mattjoyce
*   Ruby [beeminder/beeminder-gem][81] - by @muflax

### Mobile Apps

*   Android, iOS, Windows Mobile - [Nectar][82] - by @nectar
*   Android - [Beedroid][83] - official Beeminder app for Android
*   Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo][84] and [@zedmango's fork][85], see [@yixler's thread][86] and [@zedmango's more recent thread][87]
*   iOS - [Beeminder iOS][88] - official iOS-App by @apb and others (replaces [beemios][89]) - Link to [BeeSwift-Github Repo][90]
*   iOS - Shortcuts - see [this thread][91]

### Web

*   [Beeminder Autodialer][92] - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
*   [Beeminder Panel][93] - by @narthur. An experimental web dashboard alernative to the Beeminder web app.
*   [Beescheduler][94] - by [@enolan][95]. "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.][96]
*   [chipmanaged/MCM-Dashboard][97] - by @mary, includes an autodial feature and
    umbrella goals feature, see [this thread][98]
*   [Altbee][99] - "an alternative web interface for Beeminder."
    [Announcement thread][100].
    [Source code][101].
*   [beeminder-to-sqlite][102] - by [Ben Congdon][103], meant for viewing your Beeminder data in [Datasette][104].
*   [BUI][105] - "an alternative web interface for Beeminder but with more charts". [Source code][106]. [Announcement thread][107]

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

#### Anki

*   Number of cards currently not due - [as an Anki extension][108], see also [this thread][109] - by @bluetulip
*   Time spent reviewing or number of cards reviewed - [as another Anki extension][110] - see also [this thread][111] - by @ianminds. Seems not to support the latest versions of Anki.
*   Time spent reviewing or number of cards reviewed - [as a newer Anki extension][112]. May not work with latest versions of Anki. See also [this thread][113].

#### Quizlet

*   Study sessions - [through Beemind.me][49]
*   Answer count - [through Beemind.me][49]

### Coding

*   Codecademy - Points - [through Akrasia][114]
*   Codewars - Completed Code Challenges (Kata) - [through Akrasia][114]
*   FreeCodeCamp - [see this thread][115]
*   GitHub - Commits - [official][51]
*   GitHub - Issues Closed - [official][51]
*   GitHub - Any GitHub Event - [via multigitminder GitHub Action][55]
*   Leetcode - Problems Solved - [through Akrasia][114]
*   Project Euler - Problems Solved - [through Akrasia][114]

### Languages

*   Memrise - Points - [through Akrasia][114]
*   Memrise - Words Learned - [through Akrasia][114]
*   Clozemaster - Points - [official][51]
*   Duolingo - Points - [official][51]
*   Skritter - Hours learning Chinese/Japanese - [official][51]
*   WaniKani - see [this thread][116] by @bluetulip

### Religion and Spiritual

*   [Electronic Rosary][117] - see [this blog post][118]

### Typing

*   Typeracer - Completed Games - [through Beemind.me][49]

### Writing

*   750words - See [this thread][119]
*   URLMinder - count Words - [official][51]

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post][120] for details. The project is [open-source][121] if you'd like to self-host a version.

*   Instagram, Facebook, etc. - through Nectar; see [this thread][122], specifically [this response][123]; also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

*   Gmail - whittle down emails - [official][51]

### Note Taking, Project Planning

*   Evernote - Inbox Zero - through [beEvernoteZero][124]

### Time Tracking

*   Rescue Time - at least/at most Time spend - [official][51]
*   Strict Workflow - see [this thread][125] and [GitHub Repo][126], note that this is a fork of the original Chrome-Extension
*   TagTime - [GitHub Repo][127], see also [this forum category][128]
*   Toggl - average Time spend on Project/Tag/Client - [official][51]

### Task Managers, ToDo-Lists

*   [Boss as a Service][129] - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post][130]
*   Commits.to - by @yebyenw see [this thread][131] and the
    [GitHub repo][132]
*   Complice - [by Complice][67],
    [go here for examples and support][133]
*   Habitica - To-Dos and/or Dailies - [official][51]
*   Omnifocus - number of items in your OmniFocus Inbox - [through omniminder][134];
    see also [this thread][135]
*   Omnifocus - number of projects that are due for review - [through omniminder][134];
    see also [this thread][135]
*   Omnifocus - tasks completed in the last 48 hours - [through omniminder][134]; see
    also [this thread][135]
*   [TaskRatchet][136] - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
    with Beeminder. [Announcement post][137].
    [Official integration page][138].
    [Integration docs][139].
*   Taskwarrior - by @openmedi :nerd\_face: see
    [this thread][140] \[broken GitHub link]
*   ToDoIst - Todos - [official][51]
*   Trello - Card average age - [through Beemind.me][49]
*   Trello - Cards backlog - [through Beemind.me][49]
*   Trello - Cards age RMP - [through Beemind.me][49]
*   Trello - Cards backlog Exp - [through Beemind.me][49]
*   Trello - Cards moved to or from a list or board - [official][51]

## Reading, Bookmarking

*   Pinboard - Unread Items Count - [through Akrasia][114]
*   Pocket - Article backlog - [through Beemind.me][49]
*   Pocket - Article words backlog - [through Beemind.me][49]
*   Pocket - Total word count - [through Beemind.me][49]

## Health & Sports

### Activity etc.

*   Google Fit - Active time - [through Beemind.me][49]
*   Apple Health - Active / Rest Energy - [official][51], [go here for the announcement][141]
*   Apple Health - Nike fuel - [official][51], [go here for the announcement][141]
*   Apple Health - Stand hours - [official][51], [go here for the announcement][141]
*   Fitbit - Active Time - [official][51]
*   Garmin - Active Time (in Minutes) - [official][51]
*   Standing Desk Time - see [this thread][142]

### Boating, Rafting etc.

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official][51]; can also be combined with other strava activities

### Cycling, Biking

*   Austin Bcycle - [through Beemind.me][49]
*   Apple Health - Cycling distance - [official][51], [go here for the announcement][141]
*   Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official][51]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official][51]; can also be combined with other strava activities
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official][51]; can also be combined with other strava activities

### Diet

*   Apple Health - Dietary Energy / Protein - [official][51], [go here for the announcement][141]
*   Apple Health - Water consumed - [official][51], [go here for the announcement][141]
*   Fitbit - Total Calories burned / eaten - [official][51]
*   Fitbit - Water - [official][51]
*   Fitbit - Net Calories - [official][51]
*   MyFitnessPal - Total Calories Eaten - [see this thread][143]

### Gym and Co.

*   Apple Health - Exercise time - [official][51], [go here for the announcement][141]
*   Google Fit - Strength Training - [through Beemind.me][49]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official][51]; can also be combined with other strava activities

### Meditation

*   Apple Health - Mindful minutes - [official][51], [go here for the announcement][141]
*   InsightTimer.com - see [this thread][144]

### Other sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official][51]; can also be combined with other strava activities

### Sleep

*   Apple Health - Time in bed - [official][51], [go here for the announcement][141]
*   Apple Health - Time asleep - [official][51], [go here for the announcement][141]
*   Epson - Hours of sleep - [official][51]
*   Fitbit - Hours of sleep - [official][51]
*   Garmin - Hours of sleep - [official][51]
*   Google Fit - Sleeptime Lag - [through Beemind.me][49]
*   Google Fit - Sleep Duration - [through Beemind.me][49]
*   Sleep as Android - Hours of sleep - [official][51]

### Steps

*   Apple Health - Steps - [official][51], [go here for the announcement][141]
*   Epson - Steps - [official][51]
*   Fitbit - Steps - [official][51]
*   Garmin - Steps - [official][51]
*   Google Fit - Hourly Steps - [through Beemind.me][49]
*   Misfit - Steps - [official][51]

### Swimming

*   Apple Health - Swimming strokes / distance - [official][51], [go here for the announcement][141]
*   Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official][51]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official][51]; can also be combined with other strava activities

### Walking/Running etc.

*   Apple Health - Walking/running distance - [official][51], [go here for the announcement][141]
*   Epson - Total Distance (Miles or Kilometers) - [official][51]
*   Epson - Total Time - [official][51]
*   Fitbit - # of Activities - [official][51]
*   Fitbit - Floors - [official][51]
*   Garmin - Total Distance (Miles or Kilometers) - [official][51]
*   Garmin - Total Time (in Hours) - [official][51]
*   Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official][51]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official][51]; can also be combined with other strava activities

### Skating

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official][51]; can also be combined with other strava activities

### Skiing and other Snow sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official][51]; can also be combined with other strava activities

### Weight

*   Apple Health - Weight - [official][51], [go here for the announcement][141]
*   Fitbit - Weight - [official][51]
*   Fitbit - Body Fat % - [official][51]
*   Withings - Weight - [official][51]

[1]: https://forum.beeminder.com/t/beeminder-integrations-megalist/5091

[2]: https://forum.beeminder.com/u/matti

[3]: extending-beeminder.md

[4]: #integrations

[5]: #table-of-contents

[6]: #meta

[7]: #beeminder

[8]: #tools-to-create-arbitrary-integrations

[9]: #interfaces-for-beeminder

[10]: #bots

[11]: #command-line

[12]: #calendars-task-managers

[13]: #desktop

[14]: #gadgets-buttons-diy

[15]: #libraries

[16]: #mobile-apps

[17]: #web

[18]: #learning-training-improving-doing

[19]: #flash-cards-see-also-languages

[20]: #anki

[21]: #quizlet

[22]: #coding

[23]: #languages

[24]: #religion-and-spiritual

[25]: #typing

[26]: #writing

[27]: #social-media-and-communities

[28]: #productivity-work

[29]: #email

[30]: #note-taking-project-planning

[31]: #time-tracking

[32]: #task-managers-todo-lists

[33]: #reading-bookmarking

[34]: #health--sports

[35]: #activity-etc

[36]: #boating-rafting-etc

[37]: #cycling-biking

[38]: #diet

[39]: #gym-and-co

[40]: #meditation

[41]: #other-sports

[42]: #sleep

[43]: #steps

[44]: #swimming

[45]: #walkingrunning-etc

[46]: #skating

[47]: #skiing-and-other-snow-sports

[48]: #weight

[49]: https://beemind.me/

[50]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[51]: https://www.beeminder.com/new

[52]: https://www.make.com/en

[53]: https://www.make.com/en/integrations/beeminder

[54]: https://github.com/huginn/huginn

[55]: https://github.com/marketplace/actions/multigitminder

[56]: https://pipedream.com/

[57]: https://blog.beeminder.com/beedroid/

[58]: https://forum.beeminder.com/t/tasker-recipes/5367/5

[59]: https://forum.beeminder.com/t/zeeminding/368/8

[60]: https://github.com/topics/beeminder

[61]: https://github.com/topics/beeminder-api

[62]: https://github.com/beeminder/beebot

[63]: https://github.com/lydgate/bmndr

[64]: https://github.com/pjjh/bmndr

[65]: https://github.com/malcolmocean/beeminderjs

[66]: https://github.com/palfrey/beeminder-calendar

[67]: https://complice.co/features#beeminder

[68]: https://github.com/palfrey/docket

[69]: https://www.raycast.com/vivgui/beeminder

[70]: https://forum.beeminder.com/t/now-you-can-manage-your-goals-using-raycast/10820

[71]: https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166

[72]: https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775

[73]: https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832

[74]: https://github.com/beeminder-capstone/pebble

[75]: https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10

[76]: https://github.com/mbork/beeminder.el

[77]: https://github.com/beeminder/wolfminder

[78]: https://github.com/beeminder/bee-perl

[79]: https://github.com/beeminder/beeminder-php-api

[80]: https://github.com/mattjoyce/beeminderpy

[81]: https://github.com/beeminder/beeminder-gem

[82]: https://github.com/beeminder-capstone/Nectar-Frontend

[83]: https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en

[84]: https://github.com/nicholasRutherford/gtbee

[85]: https://github.com/zedmango/gtbee

[86]: https://forum.beeminder.com/t/gtbee-for-android/777

[87]: https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755

[88]: https://apps.apple.com/us/app/beeminder/id551869729?mt=8

[89]: https://github.com/beeminder/beemios

[90]: https://github.com/beeminder/BeeSwift

[91]: https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7

[92]: https://autodial.taskratchet.com/

[93]: https://bm.taskratchet.com

[94]: https://beescheduler.echonolan.net/

[95]: https://forum.beeminder.com/u/enolan

[96]: https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237

[97]: https://github.com/chipmanaged/MCM-Dashboard

[98]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[99]: https://altbee.aeonc.com/

[100]: https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315

[101]: https://github.com/quantified-self-tools/altbee

[102]: https://pypi.org/project/beeminder-to-sqlite/

[103]: https://github.com/bcongdon

[104]: https://docs.datasette.io/en/stable/

[105]: https://bui.interestingprojects.net/

[106]: https://github.com/szymonkorytnicki/beeminder-ui

[107]: https://forum.beeminder.com/t/bui-the-alternative-beeminder-ui-more-charts/10416

[108]: https://ankiweb.net/shared/info/1928083890

[109]: https://forum.beeminder.com/t/anki-addon-maintained-progress/5062

[110]: https://ankiweb.net/shared/info/1728790823

[111]: https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206

[112]: https://ankiweb.net/shared/info/1201383547

[113]: https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229

[114]: https://akrasia.on.csu.io/

[115]: https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997

[116]: https://forum.beeminder.com/t/wanikani-integration/4403

[117]: https://itunes.apple.com/us/app/iterco/id489906277?mt=8

[118]: https://blog.beeminder.com/rosary/

[119]: https://forum.beeminder.com/t/beeminding-750words/4882

[120]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31

[121]: https://github.com/beeminder-capstone/Nectar-Backend

[122]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi

[123]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi

[124]: https://github.com/giovannicoppola/beEvernote

[125]: https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443

[126]: https://github.com/maggiedelano/Strict-Workflow-Beeminder

[127]: https://github.com/tagtime/TagTime

[128]: https://forum.beeminder.com/c/tagtime

[129]: https://bossasaservice.life/

[130]: https://blog.beeminder.com/baas/

[131]: https://forum.beeminder.com/t/simplest-commitbee-open-source/5232

[132]: https://github.com/kingdonb/simplest-commitbee

[133]: https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945

[134]: https://github.com/dehowell/omniminder

[135]: https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/

[136]: https://taskratchet.com

[137]: https://blog.beeminder.com/taskratchet/

[138]: https://www.beeminder.com/taskratchet

[139]: https://docs.taskratchet.com/integrations.html

[140]: https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126

[141]: https://blog.beeminder.com/apple/

[142]: https://forum.beeminder.com/t/tracking-standing-desk-time/1832

[143]: https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113

[144]: https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751
