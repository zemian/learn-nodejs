"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_export_default_1 = require("./my-export-default");
console.log(new my_export_default_1.default());
// This should work the same
const my_export_default_end_of_line_1 = require("./my-export-default-end-of-line");
console.log(new my_export_default_end_of_line_1.default());
// Note that you can rename class with "export default"
const my_export_default_2 = require("./my-export-default");
console.log(new my_export_default_2.default());
/* This will not compile!
// NOTE: You can use "import * as" form for "export default".
import * as mylib from "./my-export-default";
console.log(new mylib.Hello5());
 */
