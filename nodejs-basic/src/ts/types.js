function test() {
    // Boolean
    let isDone = true;
    // Number
    let num = 99;
    let pi = 3.14;
    let hex = 0xCAFE;
    let bin = 0b1001;
    let oct = 0o007;
    // String and template
    let color = "Red";
    color = 'Blue';
    let name = "Zemian Deng";
    let greeting = `Hello ${name} with num ${num}`;
    let html = `
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        ${greeting}
    </body>
</html>
	`;
    // Array
    let myArray = [1, 2, 3];
    let names = ['kenny', 'lily'];
    let coolNames = ['Julie', 'Zemian']; // Without type info???
    let myPair;
    myPair = [99, 'zemian'];
    let myNum = myPair[0];
    let myName = myPair[1];
    // When indice is out of bound, it's still work! but the type is Union type
    // myPair[2] = 100;
    // myPair[3] = 'zemian2';
    // Enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
    let c = Color.Green;
    let colorName = Color[2]; // enum string name
    // Any, void, null and undefined
    let notSure = 4;
    notSure = "Zemian";
    let anyArray = [1, "Zemian", true];
    let unusable = undefined;
    let unusable2 = undefined;
    let unusable3 = undefined;
    let unusable4 = null;
    //let unusable5 :void = null;
    // Type casting
    let nameTypeCastDemo = "zemian";
    let nameLen = nameTypeCastDemo.length;
    let nameLen2 = nameTypeCastDemo.length;
    return "test";
}
function warnUser() {
    alert("Warning");
}
// Never?
function error() {
    throw new Error("test");
}
document.body.innerHTML = test();
