// Bad Example
class Hello3_Bad {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
/* This will not compile:
NOTE You can't export without '=' on a class name on it's own line.

export Hello3_Bad;
*/
