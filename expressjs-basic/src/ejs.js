// Render output using 'src/templates/' directly from 'ejs' module
const ejs = require('ejs');
const express = require('express');
const app = express();

let template = `
<h1>Hello <%= name %></h1>
<ul>
    <% for (fruit of fruits) { %>
        <li> <%= fruit %></li>
    <% } %>
</ul>
`;

app.get('/', (req, res) => {
    let data = {
        name: "World",
        fruits: ['apple', 'orange', 'banana']
    }
    result = ejs.render(template, data);
    res.send(result);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
