'use strict';
// Client Code


console.log('App Loaded');

window.router = Davis(function () {

  this.configure(function () {
    this.generateRequestOnPageLoad = true;
  });

  this.get('/', function (req) {
    $('content').html(ss.tmpl['site-index'].r());
  });

  this.get('/features', function (req) {
    $('content').html(ss.tmpl['site-features'].r());
  });

});

router.start();