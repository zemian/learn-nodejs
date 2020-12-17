console.log("Console assert");
console.assert(1 + 1 === 2);
console.assert(.1 + .2 === .3);
// Or some custom error message:
let sum = .1 + .2;
console.assert(sum == 0.3, 'computer can not handle .1 + .2 => ', sum);
// Notice that program will continue even if there is first assertion error!
// that's because it's just a console output
