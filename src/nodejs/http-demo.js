/*
How to run this script:
    # To run server
    node src/http-demo.js

    # To run client
    node src/http-demo.js client

## How to use http module

See https://nodejs.org/api/http.html

* Header object is always lower case key-value

* Agent is responsible to managing connections for a client

## Http module entry methods

* http.request(res: IncomingMessage => {}) -> ClientRequest - creates a client "request" to a server(url)
    - The argument is called 'responseListener', hence named "res"
    - Then returned object is usually named "req"
    - You can set any request method: GET, POST, DELET etc
    - You need to call result.end() to end the request

* http.get() - A convenience method to perform GET request() only, and calls req.end() automatically.

* http.createServer((req: IncomingMessage, res: ServerResponse) => {}) -> Server
    - The argument is called 'requestListener'
    - You need to call res.end() to finish the response
    - Then returned object is usually named "server"
 */
const http = require("http");

function server() {
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
}

function client() {
    console.log("Making a client http request");
    http.get("http://localhost:8000", res => {
        console.log("Received response headers");
        for (let key in res.headers) {
            console.log(`header[${key}]=${res.headers[key]}`);
        }
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            console.log(rawData);
        });
    });
}

if (process.argv.length > 2 && process.argv[2] === "client") {
    client();
} else {
    server();
}
