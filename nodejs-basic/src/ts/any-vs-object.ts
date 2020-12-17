let a: any;
let b: Object;

a.nomethod(); // Transpiles just fine
//b.nomethod(); // Error: Property 'nomethod' does not exist on type 'Object'.
