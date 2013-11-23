'use strict';
// Client Code

var ss    = window.ss,
    Davis = window.Davis;


var router = new Davis(function () {

    this.configure(function () {
        this.generateRequestOnPageLoad = true;
    });

    this.get('/', function () {
        $('content').html(ss.tmpl['site-index'].r());
    });

    this.get('/getting-started', function () {
        $('content').html(ss.tmpl['site-getting-started'].r());
    });

    this.get('/tour', function () {
        $('content').html(ss.tmpl['site-tour'].r());
    });

    this.get('/news', function () {
        $('content').html(ss.tmpl['site-news'].r());
    });

    this.post('/search', function (req) {
        $('content').html(ss.tmpl['site-search'].render({term:req.params.term}));
    });


    this.get('/features', function () {
        $('content').html(ss.tmpl['site-features'].r());
    });

});

router.start();