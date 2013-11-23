'use strict';
// Client Code


console.log('App Loaded');

var router = Davis(function () {

  this.configure(function () {
    this.generateRequestOnPageLoad = true;
  });

  this.get('/', function (req) {
    $('content').html(ss.tmpl['site-index'].r());
  });

  this.get('/getting-started', function (req) {
    $('content').html(ss.tmpl['site-getting-started'].r());
  });


  this.get('/tour', function (req) {
    $('content').html(ss.tmpl['site-tour'].r());
  });

  this.get('/news', function (req) {
    $('content').html(ss.tmpl['site-news'].r());
  });

  this.post('/search', function (req) {
    console.log();
    $('content').html(ss.tmpl['site-search'].render({term:req.params.term}));
  });


  this.get('/features', function (req) {
    $('content').html(ss.tmpl['site-features'].r());
  });

});

router.start();