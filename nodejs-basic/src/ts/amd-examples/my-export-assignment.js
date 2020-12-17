"use strict";
/*
The "export =" is TS way of exporting single object in module. When translated
to RequireJS, it will use "return" instead of "exports" assignment.


To use it, you must use the "import myModule = require("my-module")" form.
Note: that "myModule" can be any name!
 */
class Hello3 {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
module.exports = Hello3;
