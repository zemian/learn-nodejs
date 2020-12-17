"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_export_class_one_1 = require("./my-export-class-one");
const my_export_class_many_1 = require("./my-export-class-many");
console.log(new my_export_class_one_1.HelloClass1(), new my_export_class_many_1.HelloClassMany1(), new my_export_class_many_1.HelloClassMany2());
/* This will not compile:
NOTE: You can't import and remap the classname!

import {HelloClass1b} from "./my-export-class-one";
 */
