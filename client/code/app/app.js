'use strict';
// Client Code

var ss    = window.ss,
    Davis = window.Davis;


var router = new Davis(function () {

    var self = this;

    this.configure(function () {
        this.generateRequestOnPageLoad = true;
    });

    var urlLinks = [
        {url: '/', template: 'site-index'}//,
        // {url: '/getting-started', template: 'site-getting-started'},
        // {url: '/tour', template: 'site-tour'},
        // {url: '/news', template: 'site-news'},
        // {url: '/showcase', template: 'site-showcase'},
        // {url: '/tutorials', template: 'site-tutorials'},
        // {url: '/screencasts', template: 'site-screencasts'},
        // {url: '/plugins', template: 'site-plugins'}
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