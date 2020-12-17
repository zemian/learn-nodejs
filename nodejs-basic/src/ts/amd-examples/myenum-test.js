"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myenum_1 = require("./myenum");
let demo = new myenum_1.ColorDemo();
demo.test();
console.log(demo.getMyColor());
let c = demo.myColor;
console.log(c);
