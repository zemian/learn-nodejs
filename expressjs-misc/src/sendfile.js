// Serve a file
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});