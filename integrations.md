# Integrations

This was originally a [forum thread](https://forum.beeminder.com/t/beeminder-integrations-megalist/5091) created by user 
[**@matti**](https://forum.beeminder.com/u/matti).

See also: [Extending Beeminder](extending-beeminder.md)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Meta](#meta)
  - [Beeminder](#beeminder)
  - [Tools to create arbitrary integrations](#tools-to-create-arbitrary-integrations)
- [Interfaces for Beeminder](#interfaces-for-beeminder)
  - [Bots](#bots)
  - [Command Line](#command-line)
  - [Calendars, Task managers](#calendars-task-managers)
  - [Gadgets, Buttons, DIY](#gadgets-buttons-diy)
  - [Libraries](#libraries)
  - [Mobile Apps](#mobile-apps)
  - [Web](#web)
- [Learning, Training, Improving, Doing](#learning-training-improving-doing)
  - [Flash Cards (see also: Languages)](#flash-cards-see-also-languages)
  - [Coding](#coding)
  - [Languages](#languages)
  - [Religion and Spiritual](#religion-and-spiritual)
  - [Typing](#typing)
  - [Writing](#writing)
- [Social Media and Communities](#social-media-and-communities)
- [Productivity, Work](#productivity-work)
  - [Email](#email)
  - [Note Taking, Project Planning](#note-taking-project-planning)
  - [Time Tracking](#time-tracking)
  - [Task Managers, ToDo-Lists](#task-managers-todo-lists)
- [Reading, Bookmarking](#reading-bookmarking)
- [Health & Sports](#health--sports)
  - [Activity etc.](#activity-etc)
  - [Boating, Rafting etc.](#boating-rafting-etc)
  - [Cycling, Biking](#cycling-biking)
  - [Diet](#diet)
  - [Gym and Co.](#gym-and-co)
  - [Meditation](#meditation)
  - [Other sports](#other-sports)
  - [Sleep](#sleep)
  - [Steps](#steps)
  - [Swimming](#swimming)
  - [Walking/Running etc.](#walkingrunning-etc)
  - [Skating](#skating)
  - [Skiing and other Snow sports](#skiing-and-other-snow-sports)
  - [Weight](#weight)

## Meta

### Beeminder

- Beeminder - Compose goals - [through Beemind.me](https://beemind.me/)
- Beeminder - Count Datapoints - [through Beemind.me](https://beemind.me/)

### Tools to create arbitrary integrations

- Beeminder - although not an integration per se it can be used to create those; see http://api.beeminder.com for ideas 
  and frameworks that use this, see @philip's 
  [API Coding Resources List](https://forum.beeminder.com/t/api-coding-resources-list/2947)
- IFTTT - [official](https://www.beeminder.com/new)
- [Integromat](https://www.integromat.com/en/) - [the integration](https://www.integromat.com/en/integrations/beeminder)
- huginn - [found at Github](https://github.com/huginn/huginn)
- multigitminder - [GitHub Action on GitHub Marketplace](https://github.com/marketplace/actions/multigitminder)
- Tasker (Android) - see this [Blog post](https://blog.beeminder.com/beedroid/), for recipes check out 
  [this thread](https://forum.beeminder.com/t/tasker-recipes/5367/5)
- Zapier - [official](https://www.beeminder.com/new)
- Zenobase - see [this thread](https://forum.beeminder.com/t/zeeminding/368/8)

## Interfaces for Beeminder

Things that (not only) automate data entry, but read from Beeminder and offer an Interface for it. Thanks to @philip for 
[his awesome list](https://forum.beeminder.com/t/api-coding-resources-list/2947), which I basically duplicated here.

P. S.: Searching for the topics [beeminder](https://github.com/topics/beeminder) or 
[beeminder-api](https://github.com/topics/beeminder-api) on GitHub might yield more projects to try out.

### Bots

- [beeminder/beebot](https://github.com/beeminder/beebot) - Slack-Bot by @apb

### Command Line

- [lydgate/bmndr](https://github.com/lydgate/bmndr) written in Python - by @bkam
- [pjjh/bmndr](https://github.com/pjjh/bmndr) written in Perl (was originally a fork of lydgate/bmndr, which originally 
  was a perl implementation) - by @philip
- [malcolmocean/beeminderjs](https://github.com/malcolmocean/beeminderjs) written in NodeJS - by @malcolm

### Calendars, Task managers

- Calendars - [palfrey/beeminder-calendar](https://github.com/palfrey/beeminder-calendar) - see your eep Days on your 
  Calendar by @palfrey
- Complice - [by Complice](https://complice.co/features#beeminder)
- Todoist - [palfrey/docket](https://github.com/palfrey/docket) - add goals that you need to do today to your List - by 
  @palfrey

### Gadgets, Buttons, DIY

- AWS IoT Buttons - see [this thread](https://forum.beeminder.com/t/physical-buttons-with-aws-iot-button/4166) by 
  @thomascantrell
- e-Ink Beeminder Dashboard - see [this thread](https://forum.beeminder.com/t/e-ink-beeminder-dashboard/4775) by @phi
- Flic Buttons - see [this thread](https://forum.beeminder.com/t/flic-http-requests-to-beeminder-api/4832) it works also 
  with IFTTT
- Pebble Watch - [beeminder-capstone/pebble](https://github.com/beeminder-capstone/pebble) - by @nectar
- see also [this thread](https://forum.beeminder.com/t/getting-physical-aka-physical-buttons/515/10) with sooo many more 
  IFTTT-enabled physical buttons

### Libraries

- Angular/Ionic - [beeminder-capstone/Nectar-Frontend](https://github.com/mbork/beeminder.el) - by @nectar
- Emacs - [mbork/beeminder.el](https://github.com/mbork/beeminder.el) - @mbork
- Mathematica [beeminder/wolfminder](https://github.com/beeminder/wolfminder) -by @dreev
- NodeJS [malcolmocean/beeminderjs](https://github.com/malcolmocean/beeminderjs) - by @malcolm
- Perl [beeminder/bee-perl](https://github.com/beeminder/bee-perl)
- Perl [pjjh/bmndr](https://github.com/pjjh/bmndr) - by @philip
- PHP [beeminder/beeminder-php-api](https://github.com/beeminder/beeminder-php-api) - by @sodaware
- Python [mattjoyce/beeminderpy](https://github.com/mattjoyce/beeminderpy) - by @mattjoyce
- Ruby [beeminder/beeminder-gem](https://github.com/beeminder/beeminder-gem) - by @muflax

### Mobile Apps

- Android, iOS, Windows Mobile - [Nectar](https://github.com/beeminder-capstone/Nectar-Frontend) - by @nectar
- Android - [Beedroid](https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en) - official Beeminder app for Android
- Android - GTBeedroid - I'm not sure any of this is working right now; [@yixler's repo](https://github.com/nicholasRutherford/gtbee) and [@zedmango's fork](https://github.com/zedmango/gtbee), see [@yixler's thread](https://forum.beeminder.com/t/gtbee-for-android/777) and [@zedmango's more recent thread](https://forum.beeminder.com/t/getting-gtbee-for-android-working-again/4755)
- iOS - [Beeminder iOS](https://apps.apple.com/us/app/beeminder/id551869729?mt=8) - official iOS-App by @apb and others (replaces [beemios](https://github.com/beeminder/beemios)) - Link to [BeeSwift-Github Repo](https://github.com/beeminder/BeeSwift)
- iOS - [GTBee](https://itunes.apple.com/us/app/gtbee/id779525180?mt=8) - official; get charged, when you don't do your tasks; see [this Blog post](https://blog.beeminder.com/gtbee/) and [this Blog post](https://blog.beeminder.com/apple/)
- iOS - Shortcuts - see [this thread](https://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/7)

### Web

- [Beeminder Autodialer](https://autodial.taskratchet.com/) - by @narthur. "The Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance."
- [Beescheduler](https://beescheduler.echonolan.net/) - by [@enolan](https://forum.beeminder.com/u/enolan). "Beescheduler lets you schedule different rates for your Beeminder goals based on the days of the week. I wrote it so I could focus on one project Monday - Wednesday and different ones on Thursday and Friday. This is much better than doing a tiny amount on all of them every day." [Forum announcmenet.](https://forum.beeminder.com/t/beescheduler-schedule-goals-by-the-day-of-the-week/3237)
- [chipmanaged/MCM-Dashboard](https://github.com/chipmanaged/MCM-Dashboard) - by @mary, includes an autodial feature and 
  umbrella goals feature, see [this thread](http://forum.beeminder.com/t/help-yourself-to-some-api-files/524)
- [Altbee](https://altbee.aeonc.com/) - "an alternative web interface for Beeminder." 
  [Announcement thread](https://forum.beeminder.com/t/altbee-the-alternative-beeminder-web-interface/7315). 
  [Source code](https://github.com/quantified-self-tools/altbee).
- [beeminder-to-sqlite](https://pypi.org/project/beeminder-to-sqlite/) - by [Ben Congdon](https://github.com/bcongdon), meant for viewing your Beeminder data in [Datasette](https://docs.datasette.io/en/stable/).

## Learning, Training, Improving, Doing

### Flash Cards (see also: Languages)

- Anki - number of cards currently not due - [as an Anki extension](https://ankiweb.net/shared/info/1928083890), see also [this thread](https://forum.beeminder.com/t/anki-addon-maintained-progress/5062) - by @bluetulip
- Anki - time spent reviewing or number of cards reviewed - [as another Anki extension](https://ankiweb.net/shared/info/1728790823) - see also [this thread](https://forum.beeminder.com/t/announcing-beeminder-for-anki/2206) - by @ianminds. Seems not to support the latest versions of Anki.
- Anki - time spent reviewing or number of cards reviewed - [as a newer Anki extension](https://ankiweb.net/shared/info/1201383547). May not work with latest versions of Anki. See also [this thread](https://forum.beeminder.com/t/anki-addon-to-beemind-cards-count-and-time-spent/7229).
- Quizlet - Study sessions - [through Beemind.me](https://beemind.me/)
- Quizlet - Answer count - [through Beemind.me](https://beemind.me/)

### Coding

- Codecademy - Points - [through Akrasia](https://akrasia.on.csu.io/)
- Codewars - Completed Code Challenges (Kata) - [through Akrasia](https://akrasia.on.csu.io/)
- FreeCodeCamp - [see this thread](https://forum.beeminder.com/t/tracking-progress-on-freecodecamp-with-beeminder/4997)
- GitHub - Commits - [official](https://www.beeminder.com/new)
- GitHub - Issues Closed - [official](https://www.beeminder.com/new)
- GitHub - Any GitHub Event - [via multigitminder GitHub Action](https://github.com/marketplace/actions/multigitminder)
- Leetcode - Problems Solved - [through Akrasia](https://akrasia.on.csu.io/)
- Project Euler - Problems Solved - [through Akrasia](https://akrasia.on.csu.io/)

### Languages

- Memrise - Points - [through Akrasia](https://akrasia.on.csu.io/)
- Memrise - Words Learned - [through Akrasia](https://akrasia.on.csu.io/)
- Clozemaster - Points - [official](https://www.beeminder.com/new)
- Duolingo - Points - [official](https://www.beeminder.com/new)
- Skritter - Hours learning Chinese/Japanese - [official](https://www.beeminder.com/new)
- WaniKani - see [this thread](https://forum.beeminder.com/t/wanikani-integration/4403) by @bluetulip

### Religion and Spiritual

- [Electronic Rosary](https://itunes.apple.com/us/app/iterco/id489906277?mt=8) - see [this blog post](https://blog.beeminder.com/rosary/)

### Typing

- Typeracer - Completed Games - [through Beemind.me](https://beemind.me/)

### Writing

- 750words - See [this thread](https://forum.beeminder.com/t/beeminding-750words/4882)
- [Draft](https://draftin.com) - Number of edited words - [official](https://www.beeminder.com/new)
- URLMinder - count Words - [official](https://www.beeminder.com/new)

## Social Media and Communities

NOTE: Nectar is currently not active, see [this post](https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/31) for details. The project is [open-source](https://github.com/beeminder-capstone/Nectar-Backend) if you'd like to self-host a version.
 
- Instagram, Facebook, etc.  - through Nectar; see [this thread](https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421?u=openmedi), specifically [this response](https://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421/30?u=openmedi); also note: "these integrations are for testing only and should not be used in Beeminder goals where money is at stake"; it might be easier to use IFTTT or Zapier if possible (see above)

## Productivity, Work

### Email

- Gmail - whittle down emails - [official](https://www.beeminder.com/new)

### Note Taking, Project Planning

- Evernote - Inbox Zero - through [beEvernoteZero](https://github.com/giovannicoppola/beEvernote)

### Time Tracking

- Rescue Time - at least/at most Time spend - [official](https://www.beeminder.com/new)
- Strict Workflow - see [this thread](https://forum.beeminder.com/t/beeminding-pomodoros-with-strict-workflow/443) and [GitHub Repo](https://github.com/maggiedelano/Strict-Workflow-Beeminder), note that this is a fork of the original Chrome-Extension
- TagTime - [GitHub Repo](https://github.com/tagtime/TagTime), see also [this forum category](https://forum.beeminder.com/c/tagtime)
- Toggl - average Time spend on Project/Tag/Client - [official](https://www.beeminder.com/new)

### Task Managers, ToDo-Lists

- [Boss as a Service](https://bossasaservice.life/) - Informal integration possible by giving a Beeminder goal URL to your boss, described in [this blog post](https://blog.beeminder.com/baas/)
- Commits.to - by @yebyenw see [this thread](https://forum.beeminder.com/t/simplest-commitbee-open-source/5232) and the 
  [GitHub repo](https://github.com/kingdonb/simplest-commitbee)
- Complice - [by Complice](https://complice.co/features#beeminder), 
  [go here for examples and support](https://forum.beeminder.com/t/suggestions-for-additions-to-the-complice-integration/1945)
- Habitica - To-Dos and/or Dailies - [official](https://www.beeminder.com/new)
- Omnifocus - number of items in your OmniFocus Inbox - [through omniminder](https://github.com/dehowell/omniminder); 
  see also [this thread](https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/)
- Omnifocus - number of projects that are due for review - [through omniminder](https://github.com/dehowell/omniminder); 
  see also [this thread](https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/)
- Omnifocus - tasks completed in the last 48 hours - [through omniminder](https://github.com/dehowell/omniminder); see 
  also [this thread](https://forum.beeminder.com/t/tech-help-beeminding-omnifocus/1631/)
- [TaskRatchet](https://taskratchet.com) - by @narthur. Stake money on completing one-off tasks by deadlines. Integrates
  with Beeminder. [Announcement post](https://blog.beeminder.com/taskratchet/). 
  [Official integration page](https://www.beeminder.com/taskratchet). 
  [Integration docs](https://docs.taskratchet.com/integrations.html). 
- Taskwarrior - by @openmedi :nerd_face: see 
  [this thread](https://forum.beeminder.com/t/beemind-hooks-a-taskwarrior-integration/5126) [broken GitHub link]
- ToDoIst - Todos - [official](https://www.beeminder.com/new)
- Trello - Card average age - [through Beemind.me](https://beemind.me/)
- Trello - Cards backlog - [through Beemind.me](https://beemind.me/)
- Trello - Cards age RMP - [through Beemind.me](https://beemind.me/)
- Trello - Cards backlog Exp - [through Beemind.me](https://beemind.me/)
- Trello - Cards moved to or from a list or board - [official](https://www.beeminder.com/new)

## Reading, Bookmarking

- Pinboard - Unread Items Count - [through Akrasia](https://akrasia.on.csu.io/)
- Pocket - Article backlog - [through Beemind.me](https://beemind.me/)
- Pocket - Article words backlog - [through Beemind.me](https://beemind.me/)
- Pocket - Total word count - [through Beemind.me](https://beemind.me/)

## Health & Sports

### Activity etc.

- Google Fit - Active time - [through Beemind.me](https://beemind.me/)
- Apple Health - Active / Rest Energy - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Apple Health - Nike fuel - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Apple Health - Stand hours - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Fitbit - Active Time - [official](https://www.beeminder.com/new)
- Garmin - Active Time (in Minutes) - [official](https://www.beeminder.com/new)
- Standing Desk Time - see [this thread](https://forum.beeminder.com/t/tracking-standing-desk-time/1832)

### Boating, Rafting etc.

- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Canoeing, Kayaking, Rowing, Surfing, etc. - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Cycling, Biking

- Austin Bcycle - [through Beemind.me](https://beemind.me/)
- Apple Health - Cycling distance - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Runkeeper - Cycling (miles, kilometers, times, minutes, hours, calories) - [official](https://www.beeminder.com/new)
- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Cycling - [official](https://www.beeminder.com/new); can also be combined with other strava activities
- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Handcycle - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Diet

- Apple Health - Dietary Energy / Protein - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Apple Health - Water consumed - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Fitbit - Total Calories burned / eaten - [official](https://www.beeminder.com/new)
- Fitbit - Water - [official](https://www.beeminder.com/new)
- Fitbit - Net Calories - [official](https://www.beeminder.com/new)
- MyFitnessPal - Total Calories Eaten - [see this thread](https://forum.beeminder.com/t/a-guide-to-beeminding-myfitnesspal-calories/5113)

### Gym and Co.

- Apple Health - Exercise time - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Google Fit - Strength Training - [through Beemind.me](https://beemind.me/)
- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Stairs, Yoga, Crossfit, Elliptical, Weight Training, etc. - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Meditation

- Apple Health - Mindful minutes - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- InsightTimer.com - see [this thread](https://forum.beeminder.com/t/insighttimer-com-api-python-script-meditation-tracking/1751)

### Other sports

- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Rock Climbing - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Sleep

- Apple Health - Time in bed - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Apple Health - Time asleep - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Epson - Hours of sleep - [official](https://www.beeminder.com/new)
- Fitbit - Hours of sleep - [official](https://www.beeminder.com/new)
- Garmin - Hours of sleep - [official](https://www.beeminder.com/new)
- Google Fit - Sleeptime Lag - [through Beemind.me](https://beemind.me/)
- Google Fit - Sleep Duration - [through Beemind.me](https://beemind.me/)
- Sleep as Android - Hours of sleep - [official](https://www.beeminder.com/new)

### Steps

- Apple Health - Steps - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Epson - Steps - [official](https://www.beeminder.com/new)
- Fitbit - Steps - [official](https://www.beeminder.com/new)
- Garmin - Steps - [official](https://www.beeminder.com/new)
- Google Fit - Hourly Steps - [through Beemind.me](https://beemind.me/)
- Misfit - Steps - [official](https://www.beeminder.com/new)

### Swimming

- Apple Health - Swimming strokes / distance - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Runkeeper - Swimming (miles, kilometers, times, minutes, hours, calories) - [official](https://www.beeminder.com/new)
- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Swimming - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Walking/Running etc.

- Apple Health - Walking/running distance - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Epson - Total Distance (Miles or Kilometers) - [official](https://www.beeminder.com/new)
- Epson - Total Time - [official](https://www.beeminder.com/new)
- Fitbit - # of Activities - [official](https://www.beeminder.com/new)
- Fitbit - Floors - [official](https://www.beeminder.com/new)
- Garmin - Total Distance (Miles or Kilometers) - [official](https://www.beeminder.com/new)
- Garmin - Total Time (in Hours) - [official](https://www.beeminder.com/new)
- Runkeeper - Running / Walking (miles, kilometers, times, minutes, hours, calories) - [official](https://www.beeminder.com/new)
- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Running, Hiking, Walking, or Wheelchairing - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Skating

- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Ice Skating or Inline Skating - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Skiing and other Snow sports

- Strava - (miles, kilometres, time, number of activities, calories, effort weighted time) of Skiing, Snowboarding, or Snowshoeing - [official](https://www.beeminder.com/new); can also be combined with other strava activities

### Weight

- Apple Health - Weight - [official](https://www.beeminder.com/new), [go here for the announcement](https://blog.beeminder.com/apple/)
- Fitbit - Weight - [official](https://www.beeminder.com/new)
- Fitbit - Body Fat % - [official](https://www.beeminder.com/new)
- Withings - Weight - [official](https://www.beeminder.com/new)
