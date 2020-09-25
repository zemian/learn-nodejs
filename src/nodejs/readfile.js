const fs = require("fs")
fs.readFile("src/readfile.js", "utf8", (_, data) => {
    console.log("data: ", data);
});
