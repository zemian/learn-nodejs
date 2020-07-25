const util = require("util");

// NOTE, the NodeJS util.format() is very limited. It will not handle padding and specifier!
for (let i of Array(10).keys())
    console.log(util.format("%d %f %s", i, Math.random(), 'foo'));

// In ES8, we have String.padStart()/padEnd() that might be more helpful
// https://stackoverflow.com/questions/19837697/node-js-formatted-console-output
{
    'abc'.padStart(10);         // "       abc"
    'abc'.padStart(10, "foo");  // "foofoofabc"
    'abc'.padStart(6,"123465"); // "123abc"
    'abc'.padStart(8, "0");     // "00000abc"
    'abc'.padStart(1);          // "abc"

    'abc'.padEnd(10);          // "abc       "
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(6, "123456"); // "abc123"
    'abc'.padEnd(1);           // "abc"
}
