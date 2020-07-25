// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
console.log("== Simple ex")
{
    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const gen = generator(); // "Generator { }"
    console.log("next", gen.next());
    console.log("next", gen.next());
    console.log("next", gen.next());
    console.log("next", gen.next());
}

console.log("== An infinite iterator");
{
    function* infinite() {
        let index = 0;

        while (true) {
            yield index++;
        }
    }

    const generator = infinite(); // "Generator { }"

    console.log(generator.next().value); // 0
    console.log(generator.next().value); // 1
    console.log(generator.next().value); // 2
}
