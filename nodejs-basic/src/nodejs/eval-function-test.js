console.log("Hello World");

// Note this script is been evaluated by new Function(), so you can access anything scope except global!
// However, we can pass in arguments into the function...
console.log("Function arguments: ", require);
console.log("Function arguments: ", parentScript);
