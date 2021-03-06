// https://nodejs.org/api/https.html#https_https_get_options_callback
//
// https://nodejs.dev/learn/making-http-requests-with-nodejs

const https = require('https');

// https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
//
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
//
// }).on('error', (e) => {
//     console.error(e);
// });

var options = {
    host: 'www-proxy',
    port: 80,
    method: 'CONNECT',
    path: "https://jsonplaceholder.typicode.com/posts",
};
https.get(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
