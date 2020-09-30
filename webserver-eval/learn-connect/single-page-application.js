//
/*
SPA implementation
This server will handle all requests using our custom middleware that will serve index file
Note: Since we do not call `next()`, ensure you add it to last if you want to use other middleware.
 */
var fs = require('fs');
var connect = require('connect');

var app = connect();

// Configure other middleware first!

// Catch all handler
app.use(function handle(req, res) {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(__dirname +'/index.html').pipe(res);
});
app.listen(3000);
