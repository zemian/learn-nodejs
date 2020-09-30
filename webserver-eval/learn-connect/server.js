var connect = require('connect');
var app = connect();
app.use(function(req, res){
    res.end('Hello from Connect!\n');
});
app.listen(3000);
