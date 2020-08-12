/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals

A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

\uXXXX 	The Unicode character specified by the four hexadecimal digits XXXX.
For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\u{XXXXX} 	Unicode code point escapes.
For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.

*/

console.log("## Unicode strings")
console.log("\\xCA \\xFE", "\xCA \xFE");
console.log("\\uCAFE", "\uCAFE", "\\u00A9", "\u00A9");
console.log("\\u{2F804}", "\u{2F804}", "\\uD87E\\uDC04", "\uD87E\uDC04");


console.log("test double quote");
console.log('test single quote');
console.log(`test tick quote`);
console.log(/test (.*regex.*)/);
