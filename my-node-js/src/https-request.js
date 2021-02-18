// https://nodejs.dev/learn/making-http-requests-with-nodejs#perform-a-get-request

// const https = require('https')
// const options = {
//     hostname: 'whatever.com',
//     port: 443,
//     path: '/todos',
//     method: 'GET'
// }
//
// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)
//
//     res.on('data', d => {
//         process.stdout.write(d)
//     })
// })
//
// req.on('error', error => {
//     console.error(error)
// })
//
// req.end()

// https://github.com/nodejs/node-v0.x-archive/issues/2474
var http = require('http');
var https = require('https');

var connectReq = http.request({ // establishing a tunnel
    host: 'www-proxy',
    port: 80,
    method: 'CONNECT',
    path: 'github.com:443',
}).on('connect', function(res, socket, head) {
    // should check res.statusCode here
    var req = https.get({
        host: 'github.com',
        socket: socket, // using a tunnel
        agent: false    // cannot use a default agent
    }, function(res) {
        res.setEncoding('utf8');
        res.on('data', console.log);
    });
}).end();
