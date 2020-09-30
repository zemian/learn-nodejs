//
/*
The `connect-history-api-fallback` will rewrite request /foo to /index.html in your browser
history API only. The request will still pass to server to handle. If you are in a SPA, then
you need to handle all request route to /index.html
 */
var fs = require('fs');
var connect = require('connect');
var history = require('connect-history-api-fallback');

var app = connect();
app.use(history({verbose: true}));
app.use('/', function handle(req, res) {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(__dirname +'/index.html').pipe(res);
});
app.listen(3000);
