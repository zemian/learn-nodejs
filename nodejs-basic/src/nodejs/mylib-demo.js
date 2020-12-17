const mylib = require("./mylib");
const myconfig = require("./myconfig");
const MyClass = require("./MyClass");

console.log("mylib", mylib);
console.log("mylib.hello", mylib.hello());
console.log("myconfig.name", myconfig.name);

let a = new MyClass(), b = new MyClass();
console.log("a, b", a, b);
