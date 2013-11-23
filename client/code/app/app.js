'use strict';
// Client Code


var router = Davis(function () {

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

    this.post('/search', function () {
        $('content').html(ss.tmpl['site-search'].render({term:req.params.term}));
    });


    this.get('/features', function () {
        $('content').html(ss.tmpl['site-features'].r());
    });

});

router.start();