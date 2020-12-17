// Object type declaration
//declare function create(o: object | null): void;
function create(o) {
    console.log("Creating object:=", o);
}
class MyData {
    demoTypes() {
        // Boolean
        let isDone = false;
        // Numbers
        let decimal = 6;
        let hex = 0xf00d;
        let binary = 0b1010;
        let octal = 0o744;
        let n1 = 6.00;
        let n2 = 6;
        console.log("Compare n1 == n2", n1 == n2);
        // String
        let color = "blue";
        color = 'red';
        console.log("color=", color);
        let fullName = `Bob Bobbington`;
        let age = 37;
        let sentence = `Hello, my name is ${fullName}.`;
        console.log("sentence", sentence);
        // List/Array
        console.log("List demos");
        let list = [1, 2, 3];
        console.log(list);
        let list2 = [1, 2, 3];
        console.log(list2);
        let list3 = [1, 2, 3];
        console.log(list3);
        // Declare a tuple type
        let x;
        // Initialize it
        x = ["hello", 10]; // OK
        // Initialize it incorrectly
        //x = [10, "hello"]; // Error
        let Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        let c = Color.Green;
        console.log("Enum", c);
        // Any type
        let notSure = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean
        // object type
        console.log("Object type");
        create({ prop: 0 }); // OK
        create(null); // OK
        // create(42); // Error
        // create("string"); // Error
        // create(false); // Error
        // create(undefined); // Error
        // Type cast/assertion
        let someValue = "this is a string";
        let strLength = someValue.length;
        console.log("strLength=", strLength);
        // alternative of cast using 'as'
        let someValue2 = "this is a string";
        let strLength2 = someValue.length;
    }
}
new MyData().demoTypes();
