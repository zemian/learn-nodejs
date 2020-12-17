// The fs.readFile callback will block main script exit!

const fs = require("fs");

function sleep(ms) {
	return new Promise(r => setTimeout(r, ms));
}

fs.readFile("src/readfile.js", "utf8", async (_, data) => {
	console.log("Inside readFile callback, wait for 5 secs...");
	await sleep(5000);
	console.log("Done with readFile");
});

console.log("Done with main script");
