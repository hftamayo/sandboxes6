//number: no hay floats, doubles, todo es bajo un mismo formato
console.log(typeof 10);
console.log(typeof "10");
console.log(120 + 6);
console.log(120 % 6); //modulo
console.log(Math.random());
console.log(Math.PI);
console.log("10" + 213); //concatenate: 10213
console.log(parseInt("10") + 213); //223
console.log(parseInt("10", 10)); //casting base10 (puede ser binario, hex)
console.log(parseInt("hello")); //NaN-> Not a Number
console.log(isNaN("hello")); //true
console.log(isNaN(1)); //false
console.log(+"10"); //casting cadena a number

//strings: in JS are sequences or unicode characters
console.log("hello there");
console.log("superduper".length);//string length
console.log("Chris".charAt(0));//"C"
console.log("Hello" + "world" + "!");//concatenate
console.log("this is a data".toUpperCase());

