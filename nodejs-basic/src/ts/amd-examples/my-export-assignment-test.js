"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hello3 = require("./my-export-assignment");
console.log(new Hello3());
// NOTE: you can reassign the class name!
const Hello3b = require("./my-export-assignment");
console.log(new Hello3b());
/* This will not compile:
NOTE: This import form will only work if you export = object, not the class!

import * as Hello3c from "./my-export-assignment";
console.log(new Hello3c());
 */
