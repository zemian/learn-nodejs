let express = require('express');
let app = express();

app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.send("Hello");
});

let port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
