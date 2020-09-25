const fs = require("fs");
const lines = fs.readFileSync("prompt-commands/test.js", "utf8");
console.log(lines);
