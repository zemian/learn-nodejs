const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
    var readStream = fs.createReadStream("readme.md");
    readStream.pipe(res);
});
server.listen(3000);
