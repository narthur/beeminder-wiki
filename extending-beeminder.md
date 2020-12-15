# Extending Beeminder

See also: [Integrations](integrations.md)

Thanks to @philip for granting permission to duplicate the content in his [API Coding Resources List](https://forum.beeminder.com/t/api-coding-resources-list/2947) forum thread!

## Graphical Automation Tools

- [**Android and Beeminder and Tasker**](https://blog.beeminder.com/beedroid/)
- [**Tasker recipes?**](https://forum.beeminder.com/t/tasker-recipes/5367) - Forum users sharing how they use Tasker with Beeminder.
- [**Using Beeminder with Android Automate**](https://forum.beeminder.com/t/using-beeminder-with-android-automate/6401) -
  Short tutorial on using the Beeminder API from an Android Automate flow.

## Browser-based Customization

- [**Beeminder Power Breaks**](https://openuserjs.org/scripts/narthur/Beeminder_Power_Breaks) - User script that adds 
  power features to Beeminder breaks page.
- [**Beeminder Filters**](https://openuserjs.org/scripts/narthur/Beeminder_Filters) - User script that adds filter
  buttons to Beeminder dashboard.
- [**Beeminder Open Tabs**](https://openuserjs.org/scripts/narthur/Beeminder_Open_Tabs) - User script that adds links
  for opening all goals in new tabs from dashboard.

## Hardware

- [narthur](https://github.com/narthur)/[**beeminder-traffic-light**](https://github.com/narthur/beeminder-traffic-light) - Tutorial. "How to use a Raspberry Pi as a Beeminder traffic light"

## Scripting

- [**Beeminder API**](http://api.beeminder.com/#beeminder-api-reference) - Beeminder's API allows you to integrate
  Beeminder with your own scripts and programs.
  
Note that a project's inclusion below does not mean it is official, tested, or endorsed. Use at your own risk.

### API Wrappers

- [beeminder/beeminder-gem](https://github.com/beeminder/beeminder-gem) - Ruby (@muflax)
- [beeminder/beeminder-php-api](https://github.com/beeminder/beeminder-php-api) - PHP (@sodaware)
- [beeminder/bee-perl](https://github.com/beeminder/bee-perl) - Perl 
- [beeminder/wolfminder](https://github.com/beeminder/wolfminder) - Mathematica (@dreev)
- [beeminder-capstone/Nectar-Frontend](https://github.com/beeminder-capstone/Nectar-Frontend/blob/develop/src/providers/beeminder-api.ts) - Angular/Ionic (@nectar)
- [malcolmocean/beeminderjs](https://github.com/malcolmocean/beeminderjs) - NodeJS (@malcolm)
- [mattjoyce/**beeminderpy**](https://github.com/mattjoyce/beeminderpy) - python wrapper for beeminder api
- [mbork/beeminder.el](https://github.com/mbork/beeminder.el) - Emacs (@mbork)
- [narthur/**pyminder**](https://github.com/narthur/pyminder) - Beeminder library for Python

### Example Projects

Beeminder users use the API to create all sorts of things! Below is only a small sample of the projects that have been published publicly online. [Search GitHub](https://github.com/search?q=beeminder&type=) to find more. If you know of a project you think should be added to the list below, [make a pull request with your addition](contributing.md).

* [chipmanaged/MCM-Dashboard](https://github.com/chipmanaged/MCM-Dashboard), including @mary's brilliant [dashboard and autodial](http://forum.beeminder.com/t/help-yourself-to-some-api-files/524) features
* [giovanni/evernote](https://github.com/giovannicoppola/beEvernote), @giovanni's inbox-zero evernote integration
* [beeminder/beebot](https://github.com/beeminder/beebot), our Slack bot, by @apb
* [beeminder/beemios](https://github.com/beeminder/beemios), our  iOS app, by @apb 
* [palfrey/beeminder-calendar](https://github.com/palfrey/beeminder-calendar), eep days to calendar, by @palfrey
* [palfrey/docket](https://github.com/palfrey/docket), synch with Todoist, by @palfrey 
* [beeminder-capstone/Nectar-Frontend](https://github.com/beeminder-capstone/Nectar-Frontend), Android, iOS and Windows mobile app, by @nectar (@rnj, @tdulcet and [others](http://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421))
* [beeminder-capstone/Nectar-Backend](https://github.com/beeminder-capstone/Nectar-Backend), Web app and integration framework, by @nectar (@rnj, @tdulcet and [others](http://forum.beeminder.com/t/new-mobile-app-android-ios-windows-plus-7-new-integrations/3421)), fork of [tsubery/quantifier](https://github.com/tsubery/quantifier/)
* [beeminder-capstone/pebble](https://github.com/beeminder-capstone/pebble), Watchapp for Pebble, by @nectar (@tdulcet)

#### Elixir

- [quantified-self-tools/**altbee**](https://github.com/quantified-self-tools/altbee) - Altbee — the alternative Beeminder web interface
- [quantified-self-tools/**bagg**](https://github.com/quantified-self-tools/bagg) - Beebrain aggregation implementation in Elixir. Computes aggregated data points, [as described here](https://forum.beeminder.com/t/github-projects-that-use-the-beeminder-api/7497/3?u=narthur). Also exposed via Altbee's public API, [as described here](https://forum.beeminder.com/t/beeminder-mathematica-package/7385/12).
- [Sodaware/**beeminder.el**](https://github.com/Sodaware/beeminder.el) - Submit data to Beeminder from within Emacs. Also integrates with org-mode.

#### JavaScript

- [malcolmocean/**beeminderjs**](https://github.com/malcolmocean/beeminderjs) - NodeJS wrapper for Beeminder API

#### Lisp

- [mbork/**beeminder.el**](https://github.com/mbork/beeminder.el) - A Beeminder client for Emacs

#### Mathematica

- [dehowell/**beeminder-mathematica**](https://github.com/dehowell/beeminder-mathematica) - Mathematica 12 friendly wrapper for Beeminder API

#### Perl

- [pjjh/**bmndr**](https://github.com/pjjh/bmndr), @philip's fork of lydgate/bmndr

#### Python

- [davecahill/**beesight**](https://github.com/davecahill/beesight) - Retrieves meditation data from insighttimer.com and posts the data points to beeminder for tracking.
- [ianmcb/**beetime**](https://github.com/ianmcb/beetime) - Beeminder Anki add-on
- [lastobelus/**beeminder-anki**](https://github.com/lastobelus/beeminder-anki) - Anki 2.0 add-on that syncs review stats with Beeminder
- [lydgate/**bmndr**](https://github.com/lydgate/bmndr) - Simple python CLI for beeminder.com

#### Ruby

- [tsubery/**quantifier**](https://github.com/tsubery/quantifier) - A quantified-self app that tracks various fitness & productivity metrics.

#### Scala

- [phdoerfler/**beegment**](https://github.com/phdoerfler/beegment) - A little webservice to enhance the Beeminder API
