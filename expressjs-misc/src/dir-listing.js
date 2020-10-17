const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('dir-listing.html', {root: 'public'});
});

app.get('/json/dir-listing', (req, res) => {
  fs.readdir('public', (err, files) => {
    res.json(files);
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
