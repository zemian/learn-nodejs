// Render output using 'views/' with expressjs view engine

const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let data = {
        name: "World",
        fruits: ['apple', 'orange', 'banana']
    }
    res.render('index', data);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
