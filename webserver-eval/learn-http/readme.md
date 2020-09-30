## How to run this script:
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
