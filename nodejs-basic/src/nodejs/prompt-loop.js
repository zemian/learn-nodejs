// This script will enter an infinite loop to prompt user for a command input
// in command line. The input is then use to load a command file from "prompt-commands" folder
// that match the filename. The ".js" file extension is optional to enter by user.
// Example, entering "test", will run the "prompt-commands/test.js" file.
// Enter "quit" command to exit the loop.

// TODO: If prompt-commands uses console.log(), then the output can be
//       overlapping this main loop prompt for command. One solution would be
//       to redirect console.log() into a file as output?

const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const context = {}; // A global context for all scripts to share
function promptLoop() {
    rl.question("Please enter a command: ", line => {
        const args = line.split(" ");
        const cmd = args[0];
        if (cmd === "quit") {
            console.log("Good bye!");
            rl.close();
        } else {
            try {
                // Execute JS file based on cmd name
                let fname = (cmd === "") ? "test.js" : cmd;
                if (!fname.endsWith(".js"))
                    fname += ".js";
                fname = "prompt-commands/" + fname;
                const code = fs.readFileSync(fname, "utf8");

                // Param "require" is need if we want script to load module
                // Param "context" is a global object shared by all scripts
                // Param "args" is the user command input splitted by space
                const fn = new Function("require", "context", "args", code);
                fn(require, context, args);
            } catch (err) {
                console.error(err);
            } finally {
                // When function is done, re-prompt user for input again.
                promptLoop();
            }
        }
    });
}
promptLoop();
