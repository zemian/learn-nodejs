(async function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    while(!context.sleeperDone) {
        console.log("Sleepy ...");
        await sleep(3000);
    }
})();
