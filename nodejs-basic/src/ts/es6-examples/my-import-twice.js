"use strict";
// NOTE: You shouldn't repeat two "from" since it will generate in "define" function
// But it will continue to work though.
Object.defineProperty(exports, "__esModule", { value: true });
const my_export_1 = require("./my-export");
const my_export_2 = require("./my-export");
console.log(my_export_1.Hello);
console.log(my_export_2.Hello);
