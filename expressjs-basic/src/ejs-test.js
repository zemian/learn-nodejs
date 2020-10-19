const ejs = require('ejs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let template = req.query['template'] || 'hello.ejs';
    let data = {
        name: "World",
        fruits: ['apple', 'orange', 'banana']
    }
    const dir = __dirname;
    ejs.renderFile(dir + `/templates/${template}`, data, {}, (err, result) => {
        res.send(result);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
