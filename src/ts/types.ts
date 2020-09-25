function test() {
	// Boolean
	let isDone :boolean = true;
	
	// Number
	let num :number = 99;
	let pi :number = 3.14;
	let hex :number = 0xCAFE;
	let bin :number = 0b1001;
	let oct :number = 0o007;
	
	// String and template
	let color :string = "Red";
	color = 'Blue';
	
	let name :string = "Zemian Deng";
	let greeting = `Hello ${name} with num ${num}`;
	
	let html = `
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        ${greeting}
    </body>
</html>
	`
	
	// Array
	let myArray :number[] = [1, 2, 3];
	let names :Array<string> = ['kenny', 'lily'];
	let coolNames = ['Julie', 'Zemian']; // Without type info???
	
	let myPair :[number, string];
	myPair = [99, 'zemian'];
	let myNum = myPair[0];
	let myName = myPair[1];
	
	// When indice is out of bound, it's still work! but the type is Union type
	// myPair[2] = 100;
	// myPair[3] = 'zemian2';
	
	// Enum
	enum Color{Red = 1, Green, Blue};
	let c :Color = Color.Green;
	let colorName :String = Color[2]; // enum string name
	
	// Any, void, null and undefined
	let notSure :any = 4;
	notSure = "Zemian";
	let anyArray :any[] = [1, "Zemian", true];
	let unusable :any = undefined;
	let unusable2 :void = undefined;
	let unusable3 :undefined  = undefined;
	let unusable4 :null = null;
	//let unusable5 :void = null;
	
	// Type casting
	let nameTypeCastDemo :string = "zemian";
	let nameLen :number = (<string>nameTypeCastDemo).length;
	let nameLen2 :number = (nameTypeCastDemo as string).length;
	
	return "test";
}

function warnUser() :void {
	alert("Warning");
}

// Never?
function error() :never {
	throw new Error("test");
}

document.body.innerHTML = test();
