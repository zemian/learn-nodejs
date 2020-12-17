"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myfoomod = require("./myfoomod");
const myfoomod1 = require("./lib1/myfoomod1");
const myfoomod2 = require("lib2/myfoomod2");
// Test
console.log(myfoomod);
console.log(myfoomod.MyFooMod);
console.log(new myfoomod.MyFooMod().toUpper('hello'));
// Test
console.log(new myfoomod1.MyFooMod1().toUpper('hello'));
// Test
console.log(new myfoomod2.MyFooMod2().toUpper('hello'));
