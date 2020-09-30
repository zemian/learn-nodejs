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
