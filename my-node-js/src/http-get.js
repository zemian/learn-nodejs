// https://nodejs.org/api/https.html#https_https_get_options_callback
const https = require('https');
https.get('https://api.github.com/', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
