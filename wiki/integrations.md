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

    *   [Coding](#coding)

    *   [Languages](#languages)

    *   [Religion and Spiritual](#religion-and-spiritual)

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

*   Beeminder - Compose goals - \[through Beemind.me]\[47]
*   Beeminder - Count Datapoints - \[through Beemind.me]\[47]

### Tools to create arbitrary integrations

*   Beeminder - although not an integration per se it can be used to create those; see http://api.beeminder.com for ideas
    and frameworks that use this, see @philip's
    [API Coding Resources List][47]
*   IFTTT - [official][48]
*   [Make.com][49] (formerly Integromat) - [the integration][50]
*   huginn - [found at Github][51]
*   multigitminder - [GitHub Action on GitHub Marketplace][52]
*   [Pipedream][53] - Doesn't have a Beeminder integration, but can be extended to interface with Beeminder's API
*   Tasker (Android) - see this [Blog post][54], for recipes check out
    [this thread][55]
*   Zapier - [official][48]
*   Zenobase - see [this thread][56]

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for
[his awesome list][47], which is basically duplicated here.

P. S.: Searching for the topics [beeminder][57] or
[beeminder-api][58] on GitHub might yield more projects to try out.

### Bots

*   [beeminder/beebot][59] - Slack-Bot by @apb

### Command Line

*   [lydgate/bmndr][60] written in Python - by @bkam
*   [pjjh/bmndr][61] written in Perl (was originally a fork of lydgate/bmndr, which originally
    was a perl implementation) - by @philip
*   [malcolmocean/beeminderjs][62] written in NodeJS - by @malcolm

### Calendars, Task managers

*   Calendars - [palfrey/beeminder-calendar][63] - see your eep Days on your
    Calendar by @palfrey
*   Complice - [by Complice][64]
*   Todoist - [palfrey/docket][65] - add goals that you need to do today to your List - by
    @palfrey

### Desktop

*   [Raycast extension][66] - by Vivian Guillen. "This extensions allows you to manage your Beeminder goals with Raycast 🐝" [Forum post][67].

### Gadgets, Buttons, DIY

*   AWS IoT Buttons - see [this thread][68] by
    @thomascantrell
*   e-Ink Beeminder Dashboard - see [this thread][69] by @phi
*   Flic Buttons - see [this thread][70] it works also
    with IFTTT
*   Pebble Watch - [beeminder-capstone/pebble][71] - by @nectar
*   see also [this thread][72] with sooo many more
    IFTTT-enabled physical buttons

### Libraries

*   Angular/Ionic - [beeminder-capstone/Nectar-Frontend][73] - by @nectar
*   Emacs - [mbork/beeminder.el][73] - @mbork
*   Mathematica [beeminder/wolfminder][74] -by @dreev
*   NodeJS [malcolmocean/beeminderjs][62] - by @malcolm
*   Perl [beeminder/bee-perl][75]
*   Perl [pjjh/bmndr][61] - by @philip
*   PHP [beeminder/beeminder-php-api][76] - by @sodaware
*   Python [mattjoyce/beeminderpy][77] - by @mattjoyce
*   Ruby [beeminder/beeminder-gem][78] - by @muflax

### Mobile Apps

*   Android, iOS, Windows Mobile - [Nectar][79] - by @nectar
*   Android - [Beedroid][80] - official Beeminder app for Android
*   Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo][81] and [@zedmango's fork][82], see [@yixler's thread][83] and [@zedmango's more recent thread][84]
*   iOS - [Beeminder iOS][85] - official iOS-App by @apb and others (replaces [beemios][86]) - Link to [BeeSwift-Github Repo][87]
*   iOS - Shortcuts - see [this thread][88]

### Web

*   [Beeminder Autodialer][89] - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
*   [Beeminder Panel][90] - by @narthur. An experimental web dashboard alernative to the Beeminder web app.
*   [Beescheduler][91] - by [@enolan][92]. "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.][93]
*   [chipmanaged/MCM-Dashboard][94] - by @mary, includes an autodial feature and
    umbrella goals feature, see [this thread][95]
*   [Altbee][96] - "an alternative web interface for Beeminder."
    [Announcement thread][97].
    [Source code][98].
*   [beeminder-to-sqlite][99] - by [Ben Congdon][100], meant for viewing your Beeminder data in [Datasette][101].
*   [BUI][102] - "an alternative web interface for Beeminder but with more charts". [Source code][103]. [Announcement thread][104]

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

#### Anki

*   Number of cards currently not due - [as an Anki extension][105], see also [this thread][106] - by @bluetulip
*   Time spent reviewing or number of cards reviewed - [as another Anki extension][107] - see also [this thread][108] - by @ianminds. Seems not to support the latest versions of Anki.
*   Time spent reviewing or number of cards reviewed - [as a newer Anki extension][109]. May not work with latest versions of Anki. See also [this thread][110].

### Coding

*   Codecademy - Points - [through Akrasia][111]
*   Codewars - Completed Code Challenges (Kata) - [through Akrasia][111]
*   FreeCodeCamp - [see this thread][112]
*   GitHub - Commits - [official][48]
*   GitHub - Issues Closed - [official][48]
*   GitHub - Any GitHub Event - [via multigitminder GitHub Action][52]
*   Leetcode - Problems Solved - [through Akrasia][111]
*   Project Euler - Problems Solved - [through Akrasia][111]

### Languages

*   Memrise - Points - [through Akrasia][111]
*   Memrise - Words Learned - [through Akrasia][111]
*   Clozemaster - Points - [official][48]
*   Duolingo - Points - [official][48]
*   Skritter - Hours learning Chinese/Japanese - [official][48]
*   WaniKani - see [this thread][113] by @bluetulip

### Religion and Spiritual

*   [Electronic Rosary][114] - see [this blog post][115]

### Writing

*   750words - See [this thread][116]
*   URLMinder - count Words - [official][48]

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post][117] for details. The project is [open-source][118] if you'd like to self-host a version.

*   Instagram, Facebook, etc. - through Nectar; see [this thread][119], specifically [this response][120]; also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

*   Gmail - whittle down emails - [official][48]

### Note Taking, Project Planning

*   Evernote - Inbox Zero - through [beEvernoteZero][121]

### Time Tracking

*   Rescue Time - at least/at most Time spend - [official][48]
*   Strict Workflow - see [this thread][122] and [GitHub Repo][123], note that this is a fork of the original Chrome-Extension
*   TagTime - [GitHub Repo][124], see also [this forum category][125]
*   Toggl - average Time spend on Project/Tag/Client - [official][48]

### Task Managers, ToDo-Lists

*   [Boss as a Service][126] - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post][127]
*   Commits.to - by @yebyenw see [this thread][128] and the
    [GitHub repo][129]
*   Complice - [by Complice][64],
    [go here for examples and support][130]
*   Habitica - To-Dos and/or Dailies - [official][48]
*   Omnifocus - number of items in your OmniFocus Inbox - [through omniminder][131];
    see also [this thread][132]
*   Omnifocus - number of projects that are due for review - [through omniminder][131];
    see also [this thread][132]
*   Omnifocus - tasks completed in the last 48 hours - [through omniminder][131]; see
    also [this thread][132]
*   [TaskRatchet][133] - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
    with Beeminder. [Announcement post][134].
    [Official integration page][135].
    [Integration docs][136].
*   Taskwarrior - by @openmedi :nerd\_face: see
    [this thread][137] \[broken GitHub link]
*   ToDoIst - Todos - [official][48]
*   Trello - Cards moved to or from a list or board - [official][48]

## Reading, Bookmarking

*   Pinboard - Unread Items Count - [through Akrasia][111]

## Health & Sports

### Activity etc.

*   Apple Health - Active / Rest Energy - [official][48], [go here for the announcement][138]
*   Apple Health - Nike fuel - [official][48], [go here for the announcement][138]
*   Apple Health - Stand hours - [official][48], [go here for the announcement][138]
*   Fitbit - Active Time - [official][48]
*   Garmin - Active Time (in Minutes) - [official][48]
*   Standing Desk Time - see [this thread][139]

### Boating, Rafting etc.

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official][48]; can also be combined with other strava activities

### Cycling, Biking

*   Apple Health - Cycling distance - [official][48], [go here for the announcement][138]
*   Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official][48]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official][48]; can also be combined with other strava activities
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official][48]; can also be combined with other strava activities

### Diet

*   Apple Health - Dietary Energy / Protein - [official][48], [go here for the announcement][138]
*   Apple Health - Water consumed - [official][48], [go here for the announcement][138]
*   Fitbit - Total Calories burned / eaten - [official][48]
*   Fitbit - Water - [official][48]
*   Fitbit - Net Calories - [official][48]
*   MyFitnessPal - Total Calories Eaten - [see this thread][140]

### Gym and Co.

*   Apple Health - Exercise time - [official][48], [go here for the announcement][138]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official][48]; can also be combined with other strava activities

### Meditation

*   Apple Health - Mindful minutes - [official][48], [go here for the announcement][138]
*   InsightTimer.com - see [this thread][141]

### Other sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official][48]; can also be combined with other strava activities

### Sleep

*   Apple Health - Time in bed - [official][48], [go here for the announcement][138]
*   Apple Health - Time asleep - [official][48], [go here for the announcement][138]
*   Epson - Hours of sleep - [official][48]
*   Fitbit - Hours of sleep - [official][48]
*   Garmin - Hours of sleep - [official][48]
*   Sleep as Android - Hours of sleep - [official][48]

### Steps

*   Apple Health - Steps - [official][48], [go here for the announcement][138]
*   Epson - Steps - [official][48]
*   Fitbit - Steps - [official][48]
*   Garmin - Steps - [official][48]
*   Misfit - Steps - [official][48]

### Swimming

*   Apple Health - Swimming strokes / distance - [official][48], [go here for the announcement][138]
*   Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official][48]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official][48]; can also be combined with other strava activities

### Walking/Running etc.

*   Apple Health - Walking/running distance - [official][48], [go here for the announcement][138]
*   Epson - Total Distance (Miles or Kilometers) - [official][48]
*   Epson - Total Time - [official][48]
*   Fitbit - # of Activities - [official][48]
*   Fitbit - Floors - [official][48]
*   Garmin - Total Distance (Miles or Kilometers) - [official][48]
*   Garmin - Total Time (in Hours) - [official][48]
*   Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official][48]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official][48]; can also be combined with other strava activities

### Skating

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official][48]; can also be combined with other strava activities

### Skiing and other Snow sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official][48]; can also be combined with other strava activities

### Weight

*   Apple Health - Weight - [official][48], [go here for the announcement][138]
*   Fitbit - Weight - [official][48]
*   Fitbit - Body Fat % - [official][48]
*   Withings - Weight - [official][48]

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

[21]: #coding

[22]: #languages

[23]: #religion-and-spiritual

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

[47]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[48]: https://www.beeminder.com/new

[49]: https://www.make.com/en

[50]: https://www.make.com/en/integrations/beeminder

[51]: https://github.com/huginn/huginn

[52]: https://github.com/marketplace/actions/multigitminder

[53]: https://pipedream.com/

[54]: https://blog.beeminder.com/beedroid/

[55]: https://forum.beeminder.com/t/tasker-recipes/5367/5

[56]: https://forum.beeminder.com/t/zeeminding/368/8

[57]: https://github.com/topics/beeminder

[58]: https://github.com/topics/beeminder-api

[59]: https://github.com/beeminder/beebot

[60]: https://github.com/lydgate/bmndr

[61]: https://github.com/pjjh/bmndr

[62]: https://github.com/malcolmocean/beeminderjs

[63]: https://github.com/palfrey/beeminder-calendar

[64]: https://complice.co/features#beeminder

[65]: https://github.com/palfrey/docket

[66]: https://www.raycast.com/vivgui/beeminder

[67]: https://forum.beeminder.com/t/now-you-can-manage-your-goals-using-raycast/10820

[68]: https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166

[69]: https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775

[70]: https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832

[71]: https://github.com/beeminder-capstone/pebble

[72]: https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10

[73]: https://github.com/mbork/beeminder.el

[74]: https://github.com/beeminder/wolfminder

[75]: https://github.com/beeminder/bee-perl

[76]: https://github.com/beeminder/beeminder-php-api

[77]: https://github.com/mattjoyce/beeminderpy

[78]: https://github.com/beeminder/beeminder-gem

[79]: https://github.com/beeminder-capstone/Nectar-Frontend

[80]: https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en

[81]: https://github.com/nicholasRutherford/gtbee

[82]: https://github.com/zedmango/gtbee

[83]: https://forum.beeminder.com/t/gtbee-for-android/777

[84]: https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755

[85]: https://apps.apple.com/us/app/beeminder/id551869729?mt=8

[86]: https://github.com/beeminder/beemios

[87]: https://github.com/beeminder/BeeSwift

[88]: https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7

[89]: https://autodial.taskratchet.com/

[90]: https://bm.taskratchet.com

[91]: https://beescheduler.echonolan.net/

[92]: https://forum.beeminder.com/u/enolan

[93]: https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237

[94]: https://github.com/chipmanaged/MCM-Dashboard

[95]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[96]: https://altbee.aeonc.com/

[97]: https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315

[98]: https://github.com/quantified-self-tools/altbee

[99]: https://pypi.org/project/beeminder-to-sqlite/

[100]: https://github.com/bcongdon

[101]: https://docs.datasette.io/en/stable/

[102]: https://bui.interestingprojects.net/

[103]: https://github.com/szymonkorytnicki/beeminder-ui

[104]: https://forum.beeminder.com/t/bui-the-alternative-beeminder-ui-more-charts/10416

[105]: https://ankiweb.net/shared/info/1928083890

[106]: https://forum.beeminder.com/t/anki-addon-maintained-progress/5062

[107]: https://ankiweb.net/shared/info/1728790823

[108]: https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206

[109]: https://ankiweb.net/shared/info/1201383547

[110]: https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229

[111]: https://akrasia.on.csu.io/

[112]: https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997

[113]: https://forum.beeminder.com/t/wanikani-integration/4403

[114]: https://itunes.apple.com/us/app/iterco/id489906277?mt=8

[115]: https://blog.beeminder.com/rosary/

[116]: https://forum.beeminder.com/t/beeminding-750words/4882

[117]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31

[118]: https://github.com/beeminder-capstone/Nectar-Backend

[119]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi

[120]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi

[121]: https://github.com/giovannicoppola/beEvernote

[122]: https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443

[123]: https://github.com/maggiedelano/Strict-Workflow-Beeminder

[124]: https://github.com/tagtime/TagTime

[125]: https://forum.beeminder.com/c/tagtime

[126]: https://bossasaservice.life/

[127]: https://blog.beeminder.com/baas/

[128]: https://forum.beeminder.com/t/simplest-commitbee-open-source/5232

[129]: https://github.com/kingdonb/simplest-commitbee

[130]: https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945

[131]: https://github.com/dehowell/omniminder

[132]: https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/

[133]: https://taskratchet.com

[134]: https://blog.beeminder.com/taskratchet/

[135]: https://www.beeminder.com/taskratchet

[136]: https://docs.taskratchet.com/integrations.html

[137]: https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126

[138]: https://blog.beeminder.com/apple/

[139]: https://forum.beeminder.com/t/tracking-standing-desk-time/1832

[140]: https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113

[141]: https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751
