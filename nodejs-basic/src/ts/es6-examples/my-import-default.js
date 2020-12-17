"use strict";
// Notice because of "export default", we can import it in different form!
Object.defineProperty(exports, "__esModule", { value: true });
const my_export_default_1 = require("./my-export-default");
// Or even rename it!
const my_export_default_2 = require("./my-export-default");
// Note that you can't import it using bracket style!
// import { Hello4 } from "./my-export-default";
console.log(my_export_default_1.default);
console.log(my_export_default_2.default);
