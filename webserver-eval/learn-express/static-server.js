const serveIndex = require("serve-index");
const express = require('express');
const app = express();
const port = 3000;
const dir = __dirname;

app.use(express.static(dir + "/"));
app.use('/', serveIndex(dir + '/'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
