"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloAssignInstance = require("./my-export-assignment-instance");
console.log(helloAssignInstance);
// Using different import form:
// Note this form require you to export module instance with a indirect
// variable!
const helloAssignInstance2 = require("./my-export-assignment-instance");
console.log(helloAssignInstance2);
/* This will not compile!
// Since we did not export with specific name, we cant use this import form
import {helloAssignInstance} from "./my-export-assignment-instance";
*/
