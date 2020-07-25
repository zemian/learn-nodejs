/* Python version
>>> def fib(n):
>>>     a, b = 0, 1
>>>     while a < n:
>>>         print(a, end=' ')
>>>         a, b = b, a+b
>>>     print()
>>> fib(1000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
*/

console.log("== fib impl with temp var assignment");
{
    function fib(n) {
        let a = 0, b = 1;
        while (a < n) {
            process.stdout.write(a + ' ');
            let tmp = b;
            b = a + b;
            a = tmp;
        }
        process.stdout.write("\n");
    }
    fib(1000);
}

console.log("== fib impl with array destructor like python version");
{
    function fib(n) {
        let [a, b] = [0, 1];
        while (a < n) {
            process.stdout.write(a + ' ');
            [a, b] = [b, a + b];
        }
        process.stdout.write("\n");
    }
    fib(1000);
}
