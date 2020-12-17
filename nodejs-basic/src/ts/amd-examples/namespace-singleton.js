"use strict";
// NOTE: When using "export =", we will not create the the named global variable
// but letting user to re-assign with any name during import!
var mynssingleton;
(function (mynssingleton) {
    mynssingleton.name = "Hello";
    class Hello {
        constructor() {
            this.name = "World";
        }
        greeting() {
            return "Hello " + this.name;
        }
    }
    mynssingleton.hello = new Hello();
})(mynssingleton || (mynssingleton = {}));
module.exports = mynssingleton;
