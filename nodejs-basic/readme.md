# Learning JavaScript

See "nodejs-basic" folder.

This project explore JavaScript and TypeScript using NodeJS env. The project is
setup with `ts-node` module so it can run TypeScript on command line. 
It also has added '@types/node', so we can use it in `.ts` files to explore all 
NodeJS modules with type information.

Note also that in `tsconfig.json`, the TS compiler is set to generate `commonjs` 
code, which will be runnable by node directly.

NOTE: If you want to learn JavaScript in browser env (DOM API etc), checkout 
the [learn-html](https://github.com/zemian/learn-html) repository instead.

## How to Compile & Run Examples

    # For any nodejs scripts, you can just run it
    node src/nodejs/hello.js

    # For TypeScript, you need to get ts-node first
    npm install
    npx ts-node src/ts/hello.ts

    # Or to compile then run as node
    npx tsc
    node src/ts/hello.js

## EMACScript (ES) Versions

Edition 	Official name 	Date published
ES11 	    ES2020 	        Summer 2020?
ES10 	    ES2019 	        Summer 2019
ES9 	    ES2018 	        June 2018
ES8 	    ES2017 	        June 2017
ES7 	    ES2016 	        June 2016
ES6 	    ES2015 	        June 2015
ES5.1 	    ES5.1 	        June 2011
ES5 	    ES5 	        December 2009
ES4 	    ES4 	        Abandoned
ES3 	    ES3 	        December 1999
ES2 	    ES2 	        June 1998
ES1 	    ES1 	        June 1997

* ES Next
  
ES.Next is a name that always indicates the next version of JavaScript.

Ref: 
- https://flaviocopes.com/ecmascript/
- https://en.wikipedia.org/wiki/ECMAScript

## ES Versions Features Summary

REF: https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4

## ECMAScript 6(2015)

ES6 includes the following new features:
    
        arrows
        classes
        enhanced object literals
        template strings
        destructuring
        default + rest + spread
        let + const
        iterators + for..of
        generators
        unicode
        modules
        module loaders
        map + set + weakmap + weakset
        proxies
        symbols
        subclassable built-ins
        promises
        math + number + string + array + object APIs
        binary and octal literals
        reflect api
        tail calls

## ECMAScript 7(2016)

ECMAScript 2016(ES7) introduced only two new features:
   
       Array.prototype.includes()
       Exponentiation operator

## ECMAScript 8(2017)

Major new features:

    Async Functions (Brian Terlson)
    Shared memory and atomics (Lars T. Hansen)

Minor new features:

    Object.values/Object.entries (Jordan Harband)
    String padding (Jordan Harband, Rick Waldron)
    Object.getOwnPropertyDescriptors() (Jordan Harband, Andrea Giammarchi)
    Trailing commas in function parameter lists and calls (Jeff Morrison)

## ECMAScript 9(2018)

Major new features:

    Asynchronous Iteration (Domenic Denicola, Kevin Smith)
    Rest/Spread Properties (Sebastian Markbåge)

New regular expression features:

    RegExp named capture groups (Gorkem Yakin, Daniel Ehrenberg)
    RegExp Unicode Property Escapes (Mathias Bynens)
    RegExp Lookbehind Assertions (Gorkem Yakin, Nozomu Katō, Daniel Ehrenberg)
    s (dotAll) flag for regular expressions (Mathias Bynens)
    
Other new features:

    Promise.prototype.finally() (Jordan Harband)
    Template Literal Revision (Tim Disney)
