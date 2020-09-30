const http = require("http");

console.log("Running a http server on http://localhost:8000");
let server = http.createServer((req, res) => {
    console.log("Received request headers");
    for (let key in req.headers) {
        console.log(`header[${key}]=${req.headers[key]}`);
    }

    console.log("Sending response");
    res.write("Hello World, timestamp=" + Date.now());
    res.end();
});
server.listen(8000);
