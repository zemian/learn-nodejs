/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Numeric_literals

Number and BigInt types can be written in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

    A decimal numeric literal is a sequence of digits without a leading 0 (zero).
    A leading 0 (zero) on a numeric literal, or a leading 0o (or 0O) indicates it is in octal. Octal numerics can include only the digits 0–7.
    A leading 0x (or 0X) indicates a hexadecimal numeric type. Hexadecimal numerics can include digits (0–9) and the letters a–f and A–F. (The case of a character does not change its value. Therefore: 0xa = 0xA = 10 and 0xf = 0xF = 15.)

    A leading 0b (or 0B) indicates a binary numeric literal. Binary numerics can only include the digits 0 and 1.

Some examples of numeric literals are:

0, 117, -345, 123456789123456789n             (decimal, base 10)
015, 0001, -0o77, 0o777777777777n             (octal, base 8) 
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" or base 16)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (binary, base 2)

*/

console.log("123", 123);
console.log("0o123", 0o123);
console.log("0x123", 0x123);
console.log("0b101", 0b101);
