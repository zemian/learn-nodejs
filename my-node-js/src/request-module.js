const request = require('request');

// request({
//     'url':'https://jsonplaceholder.typicode.com/posts',
//     'method': "GET",
//     'proxy':'http://www-proxy.us.oracle.com:80'
// },function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     } else {
//         console.log("ERROR: ", error);
//         console.log("RESPONSE: ", response);
//     }
// });

request({
    'url':'https://jsonplaceholder.typicode.com/posts',
    'method': "GET"
},function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    } else {
        console.log("ERROR: ", error);
        console.log("RESPONSE: ", response);
    }
});
