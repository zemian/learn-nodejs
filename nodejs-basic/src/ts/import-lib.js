"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Note we need "lodash" dependency added into package.json
const _ = require("lodash");
console.log("random of 10:", _.random(10));
console.log("range", _.range(1, 10));
