const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptLoop() {
    rl.question("Please enter a command: ", cmd => {
        //console.log("You have entered: " + cmd);
        if (cmd === "quit") {
            console.log("Good bye!");
            rl.close();
        } else {
            console.log("Processing command: " + cmd);
            promptLoop();
        }
    });
}
promptLoop();
