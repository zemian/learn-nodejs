var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var connect = require('connect');
var app = connect();
app.use(serveIndex(__dirname));
app.use(serveStatic(__dirname));
app.listen(3000);
