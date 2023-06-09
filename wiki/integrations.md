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
    *   [Task Managers & To-Do Lists](#task-managers--to-do-lists)

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
    [API Coding Resources List][45]
*   IFTTT - [official][46]
*   [Make.com][47] (formerly Integromat) - [the integration][48]
*   huginn - [found at Github][49]
*   multigitminder - [GitHub Action on GitHub Marketplace][50]
*   [Pipedream][51] - Doesn't have a Beeminder integration, but can be extended to interface with Beeminder's API
*   Tasker (Android) - see this [Blog post][52], for recipes check out
    [this thread][53]
*   Zapier - [official][46]
*   Zenobase - see [this thread][54]

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for
[his awesome list][45], which is basically duplicated here.

P. S.: Searching for the topics [beeminder][55] or
[beeminder-api][56] on GitHub might yield more projects to try out.

### Bots

*   [beeminder/beebot][57] - Slack-Bot by @apb

### Command Line

*   [lydgate/bmndr][58] written in Python - by @bkam
*   [pjjh/bmndr][59] written in Perl (was originally a fork of lydgate/bmndr, which originally
    was a perl implementation) - by @philip
*   [malcolmocean/beeminderjs][60] written in NodeJS - by @malcolm

### Calendars, Task managers

*   Calendars - [palfrey/beeminder-calendar][61] - see your eep Days on your
    Calendar by @palfrey
*   Complice - [by Complice][62]
*   Todoist - [palfrey/docket][63] - add goals that you need to do today to your List - by
    @palfrey

### Desktop

*   [Raycast extension][64] - by Vivian Guillen. "This extensions allows you to manage your Beeminder goals with Raycast 🐝" [Forum post][65].

### Gadgets, Buttons, DIY

*   AWS IoT Buttons - see [this thread][66] by
    @thomascantrell
*   e-Ink Beeminder Dashboard - see [this thread][67] by @phi
*   Flic Buttons - see [this thread][68] it works also
    with IFTTT
*   Pebble Watch - [beeminder-capstone/pebble][69] - by @nectar
*   see also [this thread][70] with sooo many more
    IFTTT-enabled physical buttons

### Libraries

*   Angular/Ionic - [beeminder-capstone/Nectar-Frontend][71] - by @nectar
*   Emacs - [mbork/beeminder.el][71] - @mbork
*   Mathematica [beeminder/wolfminder][72] -by @dreev
*   NodeJS [malcolmocean/beeminderjs][60] - by @malcolm
*   Perl [beeminder/bee-perl][73]
*   Perl [pjjh/bmndr][59] - by @philip
*   PHP [beeminder/beeminder-php-api][74] - by @sodaware
*   Python [mattjoyce/beeminderpy][75] - by @mattjoyce
*   Ruby [beeminder/beeminder-gem][76] - by @muflax

### Mobile Apps

*   Android, iOS, Windows Mobile - [Nectar][77] - by @nectar
*   Android - [Beedroid][78] - official Beeminder app for Android
*   Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo][79] and [@zedmango's fork][80], see [@yixler's thread][81] and [@zedmango's more recent thread][82]
*   iOS - [Beeminder iOS][83] - official iOS-App by @apb and others (replaces [beemios][84]) - Link to [BeeSwift-Github Repo][85]
*   iOS - Shortcuts - see [this thread][86]

### Web

*   [Beeminder Autodialer][87] - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
*   [Beeminder Panel][88] - by @narthur. An experimental web dashboard alernative to the Beeminder web app.
*   [Beescheduler][89] - by [@enolan][90]. "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.][91]
*   [chipmanaged/MCM-Dashboard][92] - by @mary, includes an autodial feature and
    umbrella goals feature, see [this thread][93]
*   [Altbee][94] - "an alternative web interface for Beeminder."
    [Announcement thread][95].
    [Source code][96].
*   [beeminder-to-sqlite][97] - by [Ben Congdon][98], meant for viewing your Beeminder data in [Datasette][99].
*   [BUI][100] - "an alternative web interface for Beeminder but with more charts". [Source code][101]. [Announcement thread][102]

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

#### Anki

*   Number of cards currently not due - [as an Anki extension][103], see also [this thread][104] - by @bluetulip
*   Time spent reviewing or number of cards reviewed - [as another Anki extension][105] - see also [this thread][106] - by @ianminds. Seems not to support the latest versions of Anki.
*   Time spent reviewing or number of cards reviewed - [as a newer Anki extension][107]. May not work with latest versions of Anki. See also [this thread][108].

### Coding

*   Codecademy - Points - [through Akrasia][109]
*   Codewars - Completed Code Challenges (Kata) - [through Akrasia][109]
*   FreeCodeCamp - [see this thread][110]
*   GitHub - Commits - [official][46]
*   GitHub - Issues Closed - [official][46]
*   GitHub - Any GitHub Event - [via multigitminder GitHub Action][50]
*   Leetcode - Problems Solved - [through Akrasia][109]
*   Project Euler - Problems Solved - [through Akrasia][109]

### Languages

*   Memrise - Points - [through Akrasia][109]
*   Memrise - Words Learned - [through Akrasia][109]
*   Clozemaster - Points - [official][46]
*   Duolingo - Points - [official][46]
*   Skritter - Hours learning Chinese/Japanese - [official][46]
*   WaniKani - see [this thread][111] by @bluetulip

### Religion and Spiritual

*   [Electronic Rosary][112] - see [this blog post][113]

### Writing

*   750words - See [this thread][114]
*   URLMinder - count Words - [official][46]

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post][115] for details. The project is [open-source][116] if you'd like to self-host a version.

*   Instagram, Facebook, etc. - through Nectar; see [this thread][117], specifically [this response][118]; also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

*   Gmail - whittle down emails - [official][46]

### Note Taking, Project Planning

*   Evernote - Inbox Zero - through [beEvernoteZero][119]

### Time Tracking

*   Rescue Time - at least/at most Time spend - [official][46]
*   Strict Workflow - see [this thread][120] and [GitHub Repo][121], note that this is a fork of the original Chrome-Extension
*   TagTime - [GitHub Repo][122], see also [this forum category][123]
*   Toggl - average Time spend on Project/Tag/Client - [official][46]

### Task Managers & To-Do Lists

*   [Boss as a Service][124] - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post][125]
*   Commits.to - by @yebyenw see [this thread][126] and the
    [GitHub repo][127]
*   Complice - [by Complice][62],
    [go here for examples and support][128]
*   Habitica - To-Dos and/or Dailies - [official][46]
*   Omnifocus - number of items in your OmniFocus Inbox - [through omniminder][129];
    see also [this thread][130]
*   Omnifocus - number of projects that are due for review - [through omniminder][129];
    see also [this thread][130]
*   Omnifocus - tasks completed in the last 48 hours - [through omniminder][129]; see
    also [this thread][130]
*   [TaskRatchet][131] - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
    with Beeminder. [Announcement post][132].
    [Official integration page][133].
    [Integration docs][134].
*   Taskwarrior - by @openmedi :nerd\_face: see
    [this thread][135] \[broken GitHub link]
*   ToDoIst - Todos - [official][46]
*   Trello - Cards moved to or from a list or board - [official][46]

## Reading, Bookmarking

*   Pinboard - Unread Items Count - [through Akrasia][109]

## Health & Sports

### Activity etc.

*   Apple Health - Active / Rest Energy - [official][46], [go here for the announcement][136]
*   Apple Health - Nike fuel - [official][46], [go here for the announcement][136]
*   Apple Health - Stand hours - [official][46], [go here for the announcement][136]
*   Fitbit - Active Time - [official][46]
*   Garmin - Active Time (in Minutes) - [official][46]
*   Standing Desk Time - see [this thread][137]

### Boating, Rafting etc.

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official][46]; can also be combined with other strava activities

### Cycling, Biking

*   Apple Health - Cycling distance - [official][46], [go here for the announcement][136]
*   Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official][46]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official][46]; can also be combined with other strava activities
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official][46]; can also be combined with other strava activities

### Diet

*   Apple Health - Dietary Energy / Protein - [official][46], [go here for the announcement][136]
*   Apple Health - Water consumed - [official][46], [go here for the announcement][136]
*   Fitbit - Total Calories burned / eaten - [official][46]
*   Fitbit - Water - [official][46]
*   Fitbit - Net Calories - [official][46]
*   MyFitnessPal - Total Calories Eaten - [see this thread][138]

### Gym and Co.

*   Apple Health - Exercise time - [official][46], [go here for the announcement][136]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official][46]; can also be combined with other strava activities

### Meditation

*   Apple Health - Mindful minutes - [official][46], [go here for the announcement][136]
*   InsightTimer.com - see [this thread][139]

### Other sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official][46]; can also be combined with other strava activities

### Sleep

*   Apple Health - Time in bed - [official][46], [go here for the announcement][136]
*   Apple Health - Time asleep - [official][46], [go here for the announcement][136]
*   Epson - Hours of sleep - [official][46]
*   Fitbit - Hours of sleep - [official][46]
*   Garmin - Hours of sleep - [official][46]
*   Sleep as Android - Hours of sleep - [official][46]

### Steps

*   Apple Health - Steps - [official][46], [go here for the announcement][136]
*   Epson - Steps - [official][46]
*   Fitbit - Steps - [official][46]
*   Garmin - Steps - [official][46]
*   Misfit - Steps - [official][46]

### Swimming

*   Apple Health - Swimming strokes / distance - [official][46], [go here for the announcement][136]
*   Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official][46]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official][46]; can also be combined with other strava activities

### Walking/Running etc.

*   Apple Health - Walking/running distance - [official][46], [go here for the announcement][136]
*   Epson - Total Distance (Miles or Kilometers) - [official][46]
*   Epson - Total Time - [official][46]
*   Fitbit - # of Activities - [official][46]
*   Fitbit - Floors - [official][46]
*   Garmin - Total Distance (Miles or Kilometers) - [official][46]
*   Garmin - Total Time (in Hours) - [official][46]
*   Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official][46]
*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official][46]; can also be combined with other strava activities

### Skating

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official][46]; can also be combined with other strava activities

### Skiing and other Snow sports

*   Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official][46]; can also be combined with other strava activities

### Weight

*   Apple Health - Weight - [official][46], [go here for the announcement][136]
*   Fitbit - Weight - [official][46]
*   Fitbit - Body Fat % - [official][46]
*   Withings - Weight - [official][46]

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

[19]: #coding

[20]: #languages

[21]: #religion-and-spiritual

[22]: #writing

[23]: #social-media-and-communities

[24]: #productivity-work

[25]: #email

[26]: #note-taking-project-planning

[27]: #time-tracking

[28]: #task-managers-todo-lists

[29]: #reading-bookmarking

[30]: #health--sports

[31]: #activity-etc

[32]: #boating-rafting-etc

[33]: #cycling-biking

[34]: #diet

[35]: #gym-and-co

[36]: #meditation

[37]: #other-sports

[38]: #sleep

[39]: #steps

[40]: #swimming

[41]: #walkingrunning-etc

[42]: #skating

[43]: #skiing-and-other-snow-sports

[44]: #weight

[45]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[46]: https://www.beeminder.com/new

[47]: https://www.make.com/en

[48]: https://www.make.com/en/integrations/beeminder

[49]: https://github.com/huginn/huginn

[50]: https://github.com/marketplace/actions/multigitminder

[51]: https://pipedream.com/

[52]: https://blog.beeminder.com/beedroid/

[53]: https://forum.beeminder.com/t/tasker-recipes/5367/5

[54]: https://forum.beeminder.com/t/zeeminding/368/8

[55]: https://github.com/topics/beeminder

[56]: https://github.com/topics/beeminder-api

[57]: https://github.com/beeminder/beebot

[58]: https://github.com/lydgate/bmndr

[59]: https://github.com/pjjh/bmndr

[60]: https://github.com/malcolmocean/beeminderjs

[61]: https://github.com/palfrey/beeminder-calendar

[62]: https://complice.co/features#beeminder

[63]: https://github.com/palfrey/docket

[64]: https://www.raycast.com/vivgui/beeminder

[65]: https://forum.beeminder.com/t/now-you-can-manage-your-goals-using-raycast/10820

[66]: https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166

[67]: https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775

[68]: https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832

[69]: https://github.com/beeminder-capstone/pebble

[70]: https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10

[71]: https://github.com/mbork/beeminder.el

[72]: https://github.com/beeminder/wolfminder

[73]: https://github.com/beeminder/bee-perl

[74]: https://github.com/beeminder/beeminder-php-api

[75]: https://github.com/mattjoyce/beeminderpy

[76]: https://github.com/beeminder/beeminder-gem

[77]: https://github.com/beeminder-capstone/Nectar-Frontend

[78]: https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en

[79]: https://github.com/nicholasRutherford/gtbee

[80]: https://github.com/zedmango/gtbee

[81]: https://forum.beeminder.com/t/gtbee-for-android/777

[82]: https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755

[83]: https://apps.apple.com/us/app/beeminder/id551869729?mt=8

[84]: https://github.com/beeminder/beemios

[85]: https://github.com/beeminder/BeeSwift

[86]: https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7

[87]: https://autodial.taskratchet.com/

[88]: https://bm.taskratchet.com

[89]: https://beescheduler.echonolan.net/

[90]: https://forum.beeminder.com/u/enolan

[91]: https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237

[92]: https://github.com/chipmanaged/MCM-Dashboard

[93]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[94]: https://altbee.aeonc.com/

[95]: https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315

[96]: https://github.com/quantified-self-tools/altbee

[97]: https://pypi.org/project/beeminder-to-sqlite/

[98]: https://github.com/bcongdon

[99]: https://docs.datasette.io/en/stable/

[100]: https://bui.interestingprojects.net/

[101]: https://github.com/szymonkorytnicki/beeminder-ui

[102]: https://forum.beeminder.com/t/bui-the-alternative-beeminder-ui-more-charts/10416

[103]: https://ankiweb.net/shared/info/1928083890

[104]: https://forum.beeminder.com/t/anki-addon-maintained-progress/5062

[105]: https://ankiweb.net/shared/info/1728790823

[106]: https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206

[107]: https://ankiweb.net/shared/info/1201383547

[108]: https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229

[109]: https://akrasia.on.csu.io/

[110]: https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997

[111]: https://forum.beeminder.com/t/wanikani-integration/4403

[112]: https://itunes.apple.com/us/app/iterco/id489906277?mt=8

[113]: https://blog.beeminder.com/rosary/

[114]: https://forum.beeminder.com/t/beeminding-750words/4882

[115]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31

[116]: https://github.com/beeminder-capstone/Nectar-Backend

[117]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi

[118]: https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi

[119]: https://github.com/giovannicoppola/beEvernote

[120]: https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443

[121]: https://github.com/maggiedelano/Strict-Workflow-Beeminder

[122]: https://github.com/tagtime/TagTime

[123]: https://forum.beeminder.com/c/tagtime

[124]: https://bossasaservice.life/

[125]: https://blog.beeminder.com/baas/

[126]: https://forum.beeminder.com/t/simplest-commitbee-open-source/5232

[127]: https://github.com/kingdonb/simplest-commitbee

[128]: https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945

[129]: https://github.com/dehowell/omniminder

[130]: https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/

[131]: https://taskratchet.com

[132]: https://blog.beeminder.com/taskratchet/

[133]: https://www.beeminder.com/taskratchet

[134]: https://docs.taskratchet.com/integrations.html

[135]: https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126

[136]: https://blog.beeminder.com/apple/

[137]: https://forum.beeminder.com/t/tracking-standing-desk-time/1832

[138]: https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113

[139]: https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751
