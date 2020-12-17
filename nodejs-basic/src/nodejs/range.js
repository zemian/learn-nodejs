// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp?page=1&tab=votes#tab-top

console.log("== Range of int");
{
    for (let i of [...Array(5).keys()])
        process.stdout.write(i + ' ');
    console.log();
}

console.log("== Range of int using iteration");
{
    for (const x of Array(5).keys()) {
        process.stdout.write(x + ' ');
    }
    console.log();
}

console.log("== Range of letters");
{
    const letters = String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
    for (let c of letters)
        process.stdout.write(c + ' ');
    console.log();
}


console.log("== Range of letters using iteration");
{
    for (const x of Array(26).keys()) {
        process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + x) + ' ');
    }
    console.log();
}
