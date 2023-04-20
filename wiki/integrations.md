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

*   Beeminder - Compose goals - [through Beemind.me][47]
*   Beeminder - Count Datapoints - [through Beemind.me][47]

### Tools to create arbitrary integrations

*   Beeminder - although not an integration per se it can be used to create those; see http://api.beeminder.com for ideas
    and frameworks that use this, see @philip's
    [API Coding Resources List][48]
*   IFTTT - [official][49]
*   [Make.com][50] (formerly Integromat) - [the integration][51]
*   huginn - [found at Github][52]
*   multigitminder - [GitHub Action on GitHub Marketplace][53]
*   [Pipedream][54] - Doesn't have a Beeminder integration, but can be extended to interface with Beeminder's API
*   Tasker (Android) - see this [Blog post][55], for recipes check out
    [this thread][56]
*   Zapier - [official][49]
*   Zenobase - see [this thread][57]

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for
[his awesome list][48], which is basically duplicated here.

P. S.: Searching for the topics [beeminder][58] or
[beeminder-api][59] on GitHub might yield more projects to try out.

### Bots

*   [beeminder/beebot][60] - Slack-Bot by @apb

### Command Line

*   [lydgate/bmndr][61] written in Python - by @bkam
*   [pjjh/bmndr][62] written in Perl (was originally a fork of lydgate/bmndr, which originally
    was a perl implementation) - by @philip
*   [malcolmocean/beeminderjs][63] written in NodeJS - by @malcolm

### Calendars, Task managers

*   Calendars - [palfrey/beeminder-calendar][64] - see your eep Days on your
    Calendar by @palfrey
*   Complice - [by Complice][65]
*   Todoist - [palfrey/docket][66] - add goals that you need to do today to your List - by
    @palfrey

### Desktop

*   [Raycast extension][67] - by Vivian Guillen. "This extensions allows you to manage your Beeminder goals with Raycast 🐝" [Forum post][68].

### Gadgets, Buttons, DIY

*   AWS IoT Buttons - see [this thread][69] by
    @thomascantrell
*   e-Ink Beeminder Dashboard - see [this thread][70] by @phi
*   Flic Buttons - see [this thread][71] it works also
    with IFTTT
*   Pebble Watch - [beeminder-capstone/pebble][72] - by @nectar
*   see also [this thread][73] with sooo many more
    IFTTT-enabled physical buttons

### Libraries

*   Angular/Ionic - [beeminder-capstone/Nectar-Frontend][74] - by @nectar
*   Emacs - [mbork/beeminder.el][74] - @mbork
*   Mathematica [beeminder/wolfminder][75] -by @dreev
*   NodeJS [malcolmocean/beeminderjs][63] - by @malcolm
*   Perl [beeminder/bee-perl][76]
*   Perl [pjjh/bmndr][62] - by @philip
*   PHP [beeminder/beeminder-php-api][77] - by @sodaware
*   Python [mattjoyce/beeminderpy][78] - by @mattjoyce
*   Ruby [beeminder/beeminder-gem][79] - by @muflax

### Mobile Apps

*   Android, iOS, Windows Mobile - [Nectar][80] - by @nectar
*   Android - [Beedroid][81] - official Beeminder app for Android
*   Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo][82] and [@zedmango's fork][83], see [@yixler's thread][84] and [@zedmango's more recent thread][85]
*   iOS - [Beeminder iOS][86] - official iOS-App by @apb and others (replaces [beemios][87]) - Link to [BeeSwift-Github Repo][88]
*   iOS - Shortcuts - see [this thread][89]

### Web

*   [Beeminder Autodialer][90] - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
*   [Beeminder Panel][91] - by @narthur. An experimental web dashboard alernative to the Beeminder web app.
*   [Beescheduler][92] - by [@enolan][93]. "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.][94]
*   [chipmanaged/MCM-Dashboard][95] - by @mary, includes an autodial feature and
    umbrella goals feature, see [this thread][96]
*   [Altbee][97] - "an alternative web interface for Beeminder."
    [Announcement thread][98].
    [Source code][99].
*   [beeminder-to-sqlite][100] - by [Ben Congdon][101], meant for viewing your Beeminder data in [Datasette][102].
*   [BUI][103] - "an alternative web interface for Beeminder but with more charts". [Source code][104]. [Announcement thread][105]

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

#### Anki

*   Number of cards currently not due - [as an Anki extension][106], see also [this thread][107] - by @bluetulip
*   Time spent reviewing or number of cards reviewed - [as another Anki extension][108] - see also [this thread][109] - by @ianminds. Seems not to support the latest versions of Anki.
*   Time spent reviewing or number of cards reviewed - [as a newer Anki extension][110]. May not work with latest versions of Anki. See also [this thread][111].

#### Quizlet

*   Study sessions - [through Beemind.me][47]
*   Answer count - [through Beemind.me][47]

### Coding

*   Codecademy - Points - [through Akrasia][112]
*   Codewars - Completed Code Challenges (Kata) - [through Akrasia][112]
*   FreeCodeCamp - [see this thread][113]
*   GitHub - Commits - [official][49]
*   GitHub - Issues Closed - [official][49]
*   GitHub - Any GitHub Event - [via multigitminder GitHub Action][53]
*   Leetcode - Problems Solved - [through Akrasia][112]
*   Project Euler - Problems Solved - [through Akrasia][112]

### Languages

*   Memrise - Points - [through Akrasia][112]
*   Memrise - Words Learned - [through Akrasia][112]
*   Clozemaster - Points - [official][49]
*   Duolingo - Points - [official][49]
*   Skritter - Hours learning Chinese/Japanese - [official][49]
*   WaniKani - see [this thread][114] by @bluetulip

### Religion and Spiritual

*   [Electronic Rosary][115] - see [this blog post][116]

### Typing

*   Typeracer - Completed Games - [through Beemind.me][47]

### Writing

*   750words - See [this thread][117]
*   URLMinder - count Words - [official][49]

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post][118] for details. The project is [open-source][119] if you'd like to self-host a version.

*   Instagram, Facebook, etc. - through Nectar; see [this thread][120], specifically [this response][121]; also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

*   Gmail - whittle down emails - [official][49]

### Note Taking, Project Planning

*   Evernote - Inbox Zero - through [beEvernoteZero][122]

### Time Tracking

*   Rescue Time - at least/at most Time spend - [official][49]
*   Strict Workflow - see [this thread][123] and [GitHub Repo][124], note that this is a fork of the original Chrome-Extension
*   TagTime - [GitHub Repo][125], see also [this forum category][126]
*   Toggl - average Time spend on Project/Tag/Client - [official][49]

### Task Managers, ToDo-Lists

*   [Boss as a Service][127] - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post][128]
*   Commits.to - by @yebyenw see [this thread][129] and the
    [GitHub repo][130]
*   Complice - [by Complice][65],
    [go here for examples and support][131]
*   Habitica - To-Dos and/or Dailies - [official][49]
*   Omnifocus - number of items in your OmniFocus Inbox - [through omniminder][132];
    see also [this thread][133]
*   Omnifocus - number of projects that are due for review - [through omniminder][132];
    see also [this thread][133]
*   Omnifocus - tasks completed in the last 48 hours - [through omniminder][132]; see
    also [this thread][133]
*   [TaskRatchet][134] - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
    with Beeminder. [Announcement post][135].
    [Official integration page][136].
    [Integration docs][137].
*   Taskwarrior - by @openmedi :nerd\_face: see
    [this thread][138] \[broken GitHub link]
*   ToDoIst - Todos - [official][49]
*   Trello - Card average age - [through Beemind.me][47]
*   Trello - Cards backlog - [through Beemind.me][47]
*   Trello - Cards age RMP - [through Beemind.me][47]
*   Trello - Cards backlog Exp - [through Beemind.me][47]
*   Trello - Cards moved to or from a list or board - [official][49]

## Reading, Bookmarking

*   Pinboard - Unread Items Count - [through Akrasia][112]
*   Pocket - Article backlog - [through Beemind.me][47]
*   Pocket - Article words backlog - [through Beemind.me][47]
*   Pocket - Total word count - [through Beemind.me][47]

## Health & Sports

### Activity etc.

*   Google Fit - Active time - [through Beemind.me][47]
*   Apple Health - Active / Rest Energy - [official][49], [go here for the announcement][139]
*   Apple Health - Nike fuel - [official][49], [go here for the announcement][139]
*   Apple Health - Stand hours - [official][49], [go here for the announcement][139]
*   Fitbit - Active Time - [official][49]
*   Garmin - Active Time (in Minutes) - [official][49]
*   Standing Desk Time - see [this thread][140]

### Boating, Rafting etc.

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official][49]; can also be combined with other strava activities

### Cycling, Biking

*   Austin Bcycle - [through Beemind.me][47]
*   Apple Health - Cycling distance - [official][49], [go here for the announcement][139]
*   Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official][49]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official][49]; can also be combined with other strava activities
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official][49]; can also be combined with other strava activities

### Diet

*   Apple Health - Dietary Energy / Protein - [official][49], [go here for the announcement][139]
*   Apple Health - Water consumed - [official][49], [go here for the announcement][139]
*   Fitbit - Total Calories burned / eaten - [official][49]
*   Fitbit - Water - [official][49]
*   Fitbit - Net Calories - [official][49]
*   MyFitnessPal - Total Calories Eaten - [see this thread][141]

### Gym and Co.

*   Apple Health - Exercise time - [official][49], [go here for the announcement][139]
*   Google Fit - Strength Training - [through Beemind.me][47]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official][49]; can also be combined with other strava activities

### Meditation

*   Apple Health - Mindful minutes - [official][49], [go here for the announcement][139]
*   InsightTimer.com - see [this thread][142]

### Other sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official][49]; can also be combined with other strava activities

### Sleep

*   Apple Health - Time in bed - [official][49], [go here for the announcement][139]
*   Apple Health - Time asleep - [official][49], [go here for the announcement][139]
*   Epson - Hours of sleep - [official][49]
*   Fitbit - Hours of sleep - [official][49]
*   Garmin - Hours of sleep - [official][49]
*   Google Fit - Sleeptime Lag - [through Beemind.me][47]
*   Google Fit - Sleep Duration - [through Beemind.me][47]
*   Sleep as Android - Hours of sleep - [official][49]

### Steps

*   Apple Health - Steps - [official][49], [go here for the announcement][139]
*   Epson - Steps - [official][49]
*   Fitbit - Steps - [official][49]
*   Garmin - Steps - [official][49]
*   Google Fit - Hourly Steps - [through Beemind.me][47]
*   Misfit - Steps - [official][49]

### Swimming

*   Apple Health - Swimming strokes / distance - [official][49], [go here for the announcement][139]
*   Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official][49]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official][49]; can also be combined with other strava activities

### Walking/Running etc.

*   Apple Health - Walking/running distance - [official][49], [go here for the announcement][139]
*   Epson - Total Distance (Miles or Kilometers) - [official][49]
*   Epson - Total Time - [official][49]
*   Fitbit - # of Activities - [official][49]
*   Fitbit - Floors - [official][49]
*   Garmin - Total Distance (Miles or Kilometers) - [official][49]
*   Garmin - Total Time (in Hours) - [official][49]
*   Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official][49]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official][49]; can also be combined with other strava activities

### Skating

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official][49]; can also be combined with other strava activities

### Skiing and other Snow sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official][49]; can also be combined with other strava activities

### Weight

*   Apple Health - Weight - [official][49], [go here for the announcement][139]
*   Fitbit - Weight - [official][49]
*   Fitbit - Body Fat % - [official][49]
*   Withings - Weight - [official][49]

[1]: https://forum.beeminder.com/t/beeminder-integrations-megalist/5091

[2]: https://forum.beeminder.com/u/matti

[3]: extending-beeminder.md

[4]: #meta

[5]: #beeminder

[6]: #tools-to-create-arbitrary-integrations

[7]: #interfaces-for-beeminder

[8]: #bots

[9]: #command-line

[10]: #calendars-task-managers

[11]: #desktop

[12]: #gadgets-buttons-diy

[13]: #libraries

[14]: #mobile-apps

[15]: #web

[16]: #learning-training-improving-doing

[17]: #flash-cards-see-also-languages

[18]: #anki

[19]: #quizlet

[20]: #coding

[21]: #languages

[22]: #religion-and-spiritual

[23]: #typing

[24]: #writing

[25]: #social-media-and-communities

[26]: #productivity-work

[27]: #email

[28]: #note-taking-project-planning

[29]: #time-tracking

[30]: #task-managers-todo-lists

[31]: #reading-bookmarking

[32]: #health--sports

[33]: #activity-etc

[34]: #boating-rafting-etc

[35]: #cycling-biking

[36]: #diet

[37]: #gym-and-co

[38]: #meditation

[39]: #other-sports

[40]: #sleep

[41]: #steps

[42]: #swimming

[43]: #walkingrunning-etc

[44]: #skating

[45]: #skiing-and-other-snow-sports

[46]: #weight

[47]: https://beemind.me/

[48]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[49]: https://www.beeminder.com/new

[50]: https://www.make.com/en

[51]: https://www.make.com/en/integrations/beeminder

[52]: https://github.com/huginn/huginn

[53]: https://github.com/marketplace/actions/multigitminder

[54]: https://pipedream.com/

[55]: https://blog.beeminder.com/beedroid/

[56]: https://forum.beeminder.com/t/tasker-recipes/5367/5

[57]: https://forum.beeminder.com/t/zeeminding/368/8

[58]: https://github.com/topics/beeminder

[59]: https://github.com/topics/beeminder-api

[60]: https://github.com/beeminder/beebot

[61]: https://github.com/lydgate/bmndr

[62]: https://github.com/pjjh/bmndr

[63]: https://github.com/malcolmocean/beeminderjs

[64]: https://github.com/palfrey/beeminder-calendar

[65]: https://complice.co/features#beeminder

[66]: https://github.com/palfrey/docket

[67]: https://www.raycast.com/vivgui/beeminder

[68]: https://forum.beeminder.com/t/now-you-can-manage-your-goals-using-raycast/10820

[69]: https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166

[70]: https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775

[71]: https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832

[72]: https://github.com/beeminder-capstone/pebble

[73]: https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10

[74]: https://github.com/mbork/beeminder.el

[75]: https://github.com/beeminder/wolfminder

[76]: https://github.com/beeminder/bee-perl

[77]: https://github.com/beeminder/beeminder-php-api

[78]: https://github.com/mattjoyce/beeminderpy

[79]: https://github.com/beeminder/beeminder-gem

[80]: https://github.com/beeminder-capstone/Nectar-Frontend

[81]: https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en

[82]: https://github.com/nicholasRutherford/gtbee

[83]: https://github.com/zedmango/gtbee

[84]: https://forum.beeminder.com/t/gtbee-for-android/777

[85]: https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755

[86]: https://apps.apple.com/us/app/beeminder/id551869729?mt=8

[87]: https://github.com/beeminder/beemios

[88]: https://github.com/beeminder/BeeSwift

[89]: https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7

[90]: https://autodial.taskratchet.com/

[91]: https://bm.taskratchet.com

[92]: https://beescheduler.echonolan.net/

[93]: https://forum.beeminder.com/u/enolan

[94]: https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237

[95]: https://github.com/chipmanaged/MCM-Dashboard

[96]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[97]: https://altbee.aeonc.com/

[98]: https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315

[99]: https://github.com/quantified-self-tools/altbee

[100]: https://pypi.org/project/beeminder-to-sqlite/

[101]: https://github.com/bcongdon

[102]: https://docs.datasette.io/en/stable/

[103]: https://bui.interestingprojects.net/

[104]: https://github.com/szymonkorytnicki/beeminder-ui

[105]: https://forum.beeminder.com/t/bui-the-alternative-beeminder-ui-more-charts/10416

[106]: https://ankiweb.net/shared/info/1928083890

[107]: https://forum.beeminder.com/t/anki-addon-maintained-progress/5062

[108]: https://ankiweb.net/shared/info/1728790823

[109]: https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206

[110]: https://ankiweb.net/shared/info/1201383547

[111]: https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229

[112]: https://akrasia.on.csu.io/

[113]: https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997

[114]: https://forum.beeminder.com/t/wanikani-integration/4403

[115]: https://itunes.apple.com/us/app/iterco/id489906277?mt=8

[116]: https://blog.beeminder.com/rosary/

[117]: https://forum.beeminder.com/t/beeminding-750words/4882

[118]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31

[119]: https://github.com/beeminder-capstone/Nectar-Backend

[120]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi

[121]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi

[122]: https://github.com/giovannicoppola/beEvernote

[123]: https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443

[124]: https://github.com/maggiedelano/Strict-Workflow-Beeminder

[125]: https://github.com/tagtime/TagTime

[126]: https://forum.beeminder.com/c/tagtime

[127]: https://bossasaservice.life/

[128]: https://blog.beeminder.com/baas/

[129]: https://forum.beeminder.com/t/simplest-commitbee-open-source/5232

[130]: https://github.com/kingdonb/simplest-commitbee

[131]: https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945

[132]: https://github.com/dehowell/omniminder

[133]: https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/

[134]: https://taskratchet.com

[135]: https://blog.beeminder.com/taskratchet/

[136]: https://www.beeminder.com/taskratchet

[137]: https://docs.taskratchet.com/integrations.html

[138]: https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126

[139]: https://blog.beeminder.com/apple/

[140]: https://forum.beeminder.com/t/tracking-standing-desk-time/1832

[141]: https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113

[142]: https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751
