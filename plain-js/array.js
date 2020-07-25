const a = [1, 2, 3]
console.log('a with literal []', a);

{
    const a = Array(3);
    console.log('a with Array() constructor', a);
}

{
    console.log('Array.fill()', [...Array(3).fill('X')]);
    console.log('Array.keys()', [...Array(3).fill('X').keys()]);
    console.log('Array.values()', [...Array(3).fill('X').values()]);
}
