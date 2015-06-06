'use strict';
// Client Code

var ss    = window.ss,
    Davis = window.Davis;


var router = new Davis(function () {

    var self = this;

    this.configure(function () {
        this.generateRequestOnPageLoad = true;
    });

    // These are the showcase apps
    //
    var showCaseItems = [
        {name: 'Dashku',    details: 'Dashku is an open source Dashboard tool that lets you create dashboards and widgets using HTML5, CSS and JavaScript.'},
        {name: 'VMUX',      details: 'VMUX is an app that lets you have video conversations with people via Twitter, powered by WebRTC.'},
        {name: 'BitJoy',    details: 'BitJoy is a live feed of Bitcoin prices and news, providing a stock trading screen for live pricing'},
        {name: 'Hollow',    details: 'This is the official site of the award-winning documentary \'Hollow\'.'},
        {name: 'TeeLeader', details: 'TeeLeader\'s reservation system for golf courses is powered by SocketStream.'},
        {name: 'Jarawi',    details: 'Jarawi is aimed at making the creation of content something simple, fun and collaborative.'}
    ];

    var urlLinks = [
        {url: '/', template: 'site-index'},
        // {url: '/getting-started', template: 'site-getting-started'},
        // {url: '/tour', template: 'site-tour'},
        {url: '/news', template: 'site-news'},
        {url: '/showcase', template: 'site-showcase'},
        // {url: '/tutorials', template: 'site-tutorials'},
        // {url: '/screencasts', template: 'site-screencasts'},
        {url: '/plugins', template: 'site-plugins'},
        {url: '/community', template: 'site-community'}
    ];

    urlLinks.forEach(function (urlLink) {
        self.get(urlLink.url, function () {
            $('content').html(ss.tmpl[urlLink.template].r());
        });
    });

    // this.post('/search', function (req) {
    //     $('content').html(ss.tmpl['site-search'].render({term:req.params.term}));
    // });

});

router.start();