"use strict";
exports.__esModule = true;
exports.hello = void 0;
var _ = require("lodash");
function hello() {
    // we can use lodash in happy case here.
    console.log(_.join(_.split("Test", ""), "-"));
    // TS should catch this as failure if enabled.
    _.map([1, 2, 3], 123);
}
exports.hello = hello;
hello();
