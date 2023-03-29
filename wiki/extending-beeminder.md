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
*   [**FreeStyler.WS**][13] - "FreeStyler has everything you might need to style up websites you visit according to your taste."
*   [**Hide Beeminder Dash Graphs**][14] - User style that hides the graph thumbnails on the dashboard. Made by @narthur.
*   [**r/userstyles**][16] - Reddit community around the creation and use of user styles.
*   [**StyleBase**][17] - "Collectino of UserCSS Styles"
*   [**Stylish**][18] - This website [can be very slow][19].
*   [**Stylus**][21] - "Stylus is a fork of Stylish for Chrome, also compatible with Firefox as a WebExtension"

## Hardware

*   [narthur][22]/[**beeminder-traffic-light**][23] - Tutorial. "How to use a Raspberry Pi as a Beeminder traffic light"

## Scripting

*   [**Beeminder API**][24] - Beeminder's API allows you to integrate
    Beeminder with your own scripts and programs.
*   [**How to post to a Beeminder goal with a Google Form**][25] - Tutorial.

Note that a project's inclusion below does not mean it is official, tested, or endorsed. Use at your own risk.

### API Wrappers

*   [beeminder/beeminder-gem][26] - Ruby (@muflax)
*   [beeminder/beeminder-php-api][27] - PHP (@sodaware)
*   [beeminder/bee-perl][28] - Perl
*   [beeminder/wolfminder][29] - Mathematica (@dreev)
*   [beeminder-capstone/Nectar-Frontend][30] - Angular/Ionic (@nectar)
*   [malcolmocean/beeminderjs][31] - NodeJS (@malcolm)
*   [mattjoyce/**beeminderpy**][32] - python wrapper for beeminder api
*   [mbork/beeminder.el][33] - Emacs (@mbork)
*   [narthur/**pyminder**][34] - Beeminder library for Python
*   [bvtujo/**beeminder-openapi**][35] - OpenAPI spec for Beeminder API; can be used with [restish][36] or to generate clients in any supported language. (@are)

### Example Projects

Beeminder users use the API to create all sorts of things! Below is only a small sample of the projects that have been published publicly online. [Search GitHub][37] to find more. If you know of a project you think should be added to the list below, [make a pull request with your addition][38].

*   [chipmanaged/MCM-Dashboard][39], including @mary's brilliant [dashboard and autodial][40] features
*   [giovanni/evernote][41], @giovanni's inbox-zero evernote integration
*   [beeminder/beebot][42], our Slack bot, by @apb
*   [beeminder/beemios][43], our  iOS app, by @apb
*   [palfrey/beeminder-calendar][44], eep days to calendar, by @palfrey
*   [palfrey/docket][45], synch with Todoist, by @palfrey
*   [beeminder-capstone/Nectar-Frontend][46], Android, iOS and Windows mobile app, by @nectar (@rnj, @tdulcet and [others][47])
*   [beeminder-capstone/Nectar-Backend][48], Web app and integration framework, by @nectar (@rnj, @tdulcet and [others][47]), fork of [tsubery/quantifier][49]
*   [beeminder-capstone/pebble][50], Watchapp for Pebble, by @nectar (@tdulcet)

#### Elixir

*   [quantified-self-tools/**altbee**][51] - Altbee — the alternative Beeminder web interface
*   [quantified-self-tools/**bagg**][52] - Beebrain aggregation implementation in Elixir. Computes aggregated data points, [as described here][53]. Also exposed via Altbee's public API, [as described here][54].
*   [Sodaware/**beeminder.el**][55] - Submit data to Beeminder from within Emacs. Also integrates with org-mode.

#### JavaScript

*   [malcolmocean/**beeminderjs**][31] - NodeJS wrapper for Beeminder API

#### Lisp

*   [mbork/**beeminder.el**][33] - A Beeminder client for Emacs

#### Perl

*   [pjjh/**bmndr**][57], @philip's fork of lydgate/bmndr

#### Python

*   [davecahill/**beesight**][58] - Retrieves meditation data from insighttimer.com and posts the data points to beeminder for tracking.
*   [ianmcb/**beetime**][59] - Beeminder Anki add-on
*   [lastobelus/**beeminder-anki**][60] - Anki 2.0 add-on that syncs review stats with Beeminder
*   [lydgate/**bmndr**][61] - Simple python CLI for beeminder.com

#### Ruby

*   [tsubery/**quantifier**][62] - A quantified-self app that tracks various fitness & productivity metrics.

#### Scala

*   [phdoerfler/**beegment**][63] - A little webservice to enhance the Beeminder API

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

[13]: https://freestyler.ws/

[14]: https://userstyles.org/styles/173240/hide-beeminder-dash-graphs

[16]: https://www.reddit.com/r/userstyles/

[17]: https://stylebase.cc/

[18]: https://userstyles.org/

[19]: https://www.reddit.com/r/userstyles/comments/hcndfo/userstylesorg_is_ridiculously_slow_often_timing/

[21]: https://github.com/openstyles/stylus

[22]: https://github.com/narthur

[23]: https://github.com/narthur/beeminder-traffic-light

[24]: http://api.beeminder.com/#beeminder-api-reference

[25]: https://forum.beeminder.com/t/how-to-post-to-a-beeminder-goal-with-a-google-form/7746

[26]: https://github.com/beeminder/beeminder-gem

[27]: https://github.com/beeminder/beeminder-php-api

[28]: https://github.com/beeminder/bee-perl

[29]: https://github.com/beeminder/wolfminder

[30]: https://github.com/beeminder-capstone/Nectar-Frontend/blob/develop/src/providers/beeminder-api.ts

[31]: https://github.com/malcolmocean/beeminderjs

[32]: https://github.com/mattjoyce/beeminderpy

[33]: https://github.com/mbork/beeminder.el

[34]: https://github.com/narthur/pyminder

[35]: https://github.com/bvtujo/beeminder-openapi

[36]: https://rest.sh/#/

[37]: https://github.com/search?q=beeminder&type=

[38]: https://github.com/narthur/beeminder-wiki

[39]: https://github.com/chipmanaged/MCM-Dashboard

[40]: http://forum.beeminder.com/t/help-yourself-to-some-api-files/524

[41]: https://github.com/giovannicoppola/beEvernote

[42]: https://github.com/beeminder/beebot

[43]: https://github.com/beeminder/beemios

[44]: https://github.com/palfrey/beeminder-calendar

[45]: https://github.com/palfrey/docket

[46]: https://github.com/beeminder-capstone/Nectar-Frontend

[47]: http://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421

[48]: https://github.com/beeminder-capstone/Nectar-Backend

[49]: https://github.com/tsubery/quantifier/

[50]: https://github.com/beeminder-capstone/pebble

[51]: https://github.com/quantified-self-tools/altbee

[52]: https://github.com/quantified-self-tools/bagg

[53]: https://forum.beeminder.com/t/github-projects-that-use-the-beeminder-api/7497/3?u=narthur

[54]: https://forum.beeminder.com/t/beeminder-mathematica-package/7385/12

[55]: https://github.com/Sodaware/beeminder.el

[57]: https://github.com/pjjh/bmndr

[58]: https://github.com/davecahill/beesight

[59]: https://github.com/ianmcb/beetime

[60]: https://github.com/lastobelus/beeminder-anki

[61]: https://github.com/lydgate/bmndr

[62]: https://github.com/tsubery/quantifier

[63]: https://github.com/phdoerfler/beegment
