const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptData(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, data => resolve(data));
    });
}

(async function main() {
    let done = false;
    while (!done) {
        // const cmd = await new Promise(resolve => rl.question("Please enter a command: ", data => resolve(data)));
        const cmd = await promptData("Please enter a command: ");
        if (cmd === "quit") {
            done = true;
            console.log("Good bye!");
            rl.close();
        } else {
            console.log("Processing command: " + cmd);
        }
    }
})();

