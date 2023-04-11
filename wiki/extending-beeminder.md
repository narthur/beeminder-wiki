# Extending Beeminder

See also: [Integrations][1]

Thanks to @philip for granting permission to duplicate the content in his [API Coding Resources List][2] forum thread!

## Graphical Automation Tools

*   [**Android and Beeminder and Tasker**][3]
*   [**Tasker recipes?**][4] - Forum users sharing how they use Tasker with Beeminder.
*   [**Using Beeminder with Android Automate**][5] - Short tutorial on using the Beeminder API from an Android Automate flow.

## Browser-based Customization

### User Scripts

*   [**Beeminder Power Breaks**][6] - User script that adds
    power features to Beeminder breaks page. Made by @narthur.
*   [**Beeminder Filters**][7] - User script that adds filter
    buttons to Beeminder dashboard. Made by @narthur.
*   [**Beeminder Open Tabs**][8] - User script that adds links
    for opening all goals in new tabs from dashboard. Made by @narthur.
*   [**Greasy Fork**][9] - "Welcome to Greasy Fork, a site for user scripts."
*   [**OpenUserJS**][10] - A website for discovering and hosting user scripts.

### User Styles

*   [**Beeminder Dashboard Dense**][11] - User style that makes
    the dashbord much denser. Made by @narthur.
*   [**FreeStyler.WS**][12] - "FreeStyler has everything you might need to style up websites you visit according to your taste."
*   [**Hide Beeminder Dash Graphs**][13] - User style that hides the graph thumbnails on the dashboard. Made by @narthur.
*   [**r/userstyles**][14] - Reddit community around the creation and use of user styles.
*   [**StyleBase**][15] - "Collectino of UserCSS Styles"
*   [**Stylish**][16] - This website [can be very slow][17].
*   [**Stylus**][18] - "Stylus is a fork of Stylish for Chrome, also compatible with Firefox as a WebExtension"

## Hardware

*   [narthur][19]/[**beeminder-traffic-light**][20] - Tutorial. "How to use a Raspberry Pi as a Beeminder traffic light"

## Scripting

*   [**Beeminder API**][21] - Beeminder's API allows you to integrate
    Beeminder with your own scripts and programs.
*   [**How to post to a Beeminder goal with a Google Form**][22] - Tutorial.

Note that a project's inclusion below does not mean it is official, tested, or endorsed. Use at your own risk.

### API Wrappers

*   [beeminder/beeminder-gem][23] - Ruby (@muflax)
*   [beeminder/beeminder-php-api][24] - PHP (@sodaware)
*   [beeminder/bee-perl][25] - Perl
*   [beeminder/wolfminder][26] - Mathematica (@dreev)
*   [beeminder-capstone/Nectar-Frontend][27] - Angular/Ionic (@nectar)
*   [malcolmocean/beeminderjs][28] - NodeJS (@malcolm)
*   [mattjoyce/**beeminderpy**][29] - python wrapper for beeminder api
*   [mbork/beeminder.el][30] - Emacs (@mbork)
*   [narthur/**pyminder**][31] - Beeminder library for Python
*   [bvtujo/**beeminder-openapi**][32] - OpenAPI spec for Beeminder API; can be used with [restish][33] or to generate clients in any supported language. (@are)

### Example Projects

Beeminder users use the API to create all sorts of things! Below is only a small sample of the projects that have been published publicly online. [Search GitHub][34] to find more. If you know of a project you think should be added to the list below, [make a pull request with your addition][35].

*   [chipmanaged/MCM-Dashboard][36], including @mary's brilliant [dashboard and autodial][37] features
*   [giovanni/evernote][38], @giovanni's inbox-zero evernote integration
*   [beeminder/beebot][39], our Slack bot, by @apb
*   [beeminder/beemios][40], our  iOS app, by @apb
*   [palfrey/beeminder-calendar][41], eep days to calendar, by @palfrey
*   [palfrey/docket][42], synch with Todoist, by @palfrey
*   [beeminder-capstone/Nectar-Frontend][43], Android, iOS and Windows mobile app, by @nectar (@rnj, @tdulcet and [others][44])
*   [beeminder-capstone/Nectar-Backend][45], Web app and integration framework, by @nectar (@rnj, @tdulcet and [others][44]), fork of [tsubery/quantifier][46]
*   [beeminder-capstone/pebble][47], Watchapp for Pebble, by @nectar (@tdulcet)

#### Elixir

*   [quantified-self-tools/**altbee**][48] - Altbee — the alternative Beeminder web interface
*   [quantified-self-tools/**bagg**][49] - Beebrain aggregation implementation in Elixir. Computes aggregated data points, [as described here][50]. Also exposed via Altbee's public API, [as described here][51].
*   [Sodaware/**beeminder.el**][52] - Submit data to Beeminder from within Emacs. Also integrates with org-mode.

#### JavaScript

*   [malcolmocean/**beeminderjs**][28] - NodeJS wrapper for Beeminder API

#### Lisp

*   [mbork/**beeminder.el**][30] - A Beeminder client for Emacs

#### Perl

*   [pjjh/**bmndr**][53], @philip's fork of lydgate/bmndr

#### Python

*   [davecahill/**beesight**][54] - Retrieves meditation data from insighttimer.com and posts the data points to beeminder for tracking.
*   [ianmcb/**beetime**][55] - Beeminder Anki add-on
*   [lastobelus/**beeminder-anki**][56] - Anki 2.0 add-on that syncs review stats with Beeminder
*   [lydgate/**bmndr**][57] - Simple python CLI for beeminder.com

#### Ruby

*   [tsubery/**quantifier**][58] - A quantified-self app that tracks various fitness & productivity metrics.

#### Scala

*   [phdoerfler/**beegment**][59] - A little webservice to enhance the Beeminder API

[1]: integrations.md

[2]: https://forum.beeminder.com/t/api-coding-resources-list/2947

[3]: https://blog.beeminder.com/beedroid/

[4]: https://forum.beeminder.com/t/tasker-recipes/5367

[5]: https://forum.beeminder.com/t/using-beeminder-with-android-automate/6401

[6]: https://openuserjs.org/scripts/narthur/Beeminder_Power_Breaks

[7]: https://openuserjs.org/scripts/narthur/Beeminder_Filters

[8]: https://openuserjs.org/scripts/narthur/Beeminder_Open_Tabs

[9]: https://greasyfork.org/en

[10]: https://openuserjs.org/

[11]: https://userstyles.org/styles/174385/beeminder-dashboard-dense?utm_campaign=stylish_stylepage

[12]: https://freestyler.ws/

[13]: https://userstyles.org/styles/173240/hide-beeminder-dash-graphs

[14]: https://www.reddit.com/r/userstyles/

[15]: https://stylebase.cc/

[16]: https://userstyles.org/

[17]: https://www.reddit.com/r/userstyles/comments/hcndfo/userstylesorg_is_ridiculously_slow_often_timing/

[18]: https://github.com/openstyles/stylus

[19]: https://github.com/narthur

[20]: https://github.com/narthur/beeminder-traffic-light

[21]: http://api.beeminder.com/#beeminder-api-reference

[22]: https://forum.beeminder.com/t/how-to-post-to-a-beeminder-goal-with-a-google-form/7746

[23]: https://github.com/beeminder/beeminder-gem

[24]: https://github.com/beeminder/beeminder-php-api

[25]: https://github.com/beeminder/bee-perl

[26]: https://github.com/beeminder/wolfminder

[27]: https://github.com/beeminder-capstone/Nectar-Frontend/blob/develop/src/providers/beeminder-api.ts

[28]: https://github.com/malcolmocean/beeminderjs

[29]: https://github.com/mattjoyce/beeminderpy

[30]: https://github.com/mbork/beeminder.el

[31]: https://github.com/narthur/pyminder

[32]: https://github.com/bvtujo/beeminder-openapi

[33]: https://rest.sh/#/

[34]: https://github.com/search?q=beeminder&type=

[35]: https://github.com/narthur/beeminder-wiki

[36]: https://github.com/chipmanaged/MCM-Dashboard

[37]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[38]: https://github.com/giovannicoppola/beEvernote

[39]: https://github.com/beeminder/beebot

[40]: https://github.com/beeminder/beemios

[41]: https://github.com/palfrey/beeminder-calendar

[42]: https://github.com/palfrey/docket

[43]: https://github.com/beeminder-capstone/Nectar-Frontend

[44]: http://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421

[45]: https://github.com/beeminder-capstone/Nectar-Backend

[46]: https://github.com/tsubery/quantifier/

[47]: https://github.com/beeminder-capstone/pebble

[48]: https://github.com/quantified-self-tools/altbee

[49]: https://github.com/quantified-self-tools/bagg

[50]: https://forum.beeminder.com/t/github-projects-that-use-the-beeminder-api/7497/3?u=narthur

[51]: https://forum.beeminder.com/t/beeminder-mathematica-package/7385/12

[52]: https://github.com/Sodaware/beeminder.el

[53]: https://github.com/pjjh/bmndr

[54]: https://github.com/davecahill/beesight

[55]: https://github.com/ianmcb/beetime

[56]: https://github.com/lastobelus/beeminder-anki

[57]: https://github.com/lydgate/bmndr

[58]: https://github.com/tsubery/quantifier

[59]: https://github.com/phdoerfler/beegment
