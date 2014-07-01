'use strict';
// My SocketStream 0.3 app


var http = require('http'),
    ss = require('socketstream');

// Define a single-page client called 'main'
ss.client.define('main', {
    view: 'app.jade',
    css:  ['app.styl'],
    code: ['libs/jquery.min.js', 'libs/davis.min.js', 'app'],
    tmpl: '*'
});

// Serve this client on the root URL
ss.http.route('/', function(req, res){
    res.serveClient('main');
});

var links = [
  {url: '/news',            text: 'News'},
  {url: '/getting-started', text: 'Getting Started'},
  {url: '/showcase',        text: 'Showcase'},
  {url: '/tutorials',       text: 'Tutorials'},
  {url: '/screencasts',     text: 'Screencasts'},
  {url: '/plugins',         text: 'Plugins'}
];

// Code Formatters
ss.client.formatters.add(require('ss-jade'), {locals: {links: links}});
ss.client.formatters.add(require('ss-stylus'));

// Use server-side compiled Hogan (Mustache) templates. Others engines available
ss.client.templateEngine.use(require('ss-hogan'));

// Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') {
    ss.client.packAssets();
}

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(process.env.PORT || 3000);

// Start SocketStream
ss.start(server);