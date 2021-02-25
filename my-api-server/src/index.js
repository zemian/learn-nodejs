const express = require('express');
const endpoints = require('./endpoints.json');
const appEnv = require('./app-env.js');
const messages = require('./messages.js');

const app = express();
app.use('/env', appEnv);
app.use('/messages', messages);
app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.json({message: "Hello", timestamp: new Date()});
});

app.get("/endpoints", (req, res) => {
    res.json(endpoints);
});

let port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
