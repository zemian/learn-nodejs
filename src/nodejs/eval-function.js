// Function(string) is safer than eval?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function

const fs = require("fs");
const file = process.argv[2] || "src/eval-function-test.js";
fs.readFile(file, "utf8", (err, data) => {
    //console.log("Got data: ", data);
    const dataFunc = new Function("process", "require", "parentScript", data);
    console.log("Running data function: ", dataFunc);
    dataFunc(process, require, this);
});
