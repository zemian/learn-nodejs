{
    const numbers = [2, 4, 6, 8]
    let product = 1
    for (let number of numbers)
        product = product * number
    console.log("== The product is:", product);
}
{
    const a = [1, 2, 3]
    console.log('== a with literal []', a);
    for (let x of a)
        console.log(x);
}

{
    const a = Array(3);
    console.log('a with Array() constructor', a);
}

{
    console.log('Array.fill()', [...Array(3).fill('X')]);
    console.log('Array.keys()', [...Array(3).fill('X').keys()]);
    console.log('Array.values()', [...Array(3).fill('X').values()]);
}
{
    console.log("== Array.map()");
    fruits = ['Banana', 'Apple', 'Lime']
    loud_fruits = fruits.map(e => e.toUpperCase());
    console.log(loud_fruits);
}
