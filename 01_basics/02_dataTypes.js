"use strict" // if we write this all the Js code will be treated as the newer version (but the js engine is already very advance and this syntax is not neccessarry but a good practice).

//alert(3+3) ... wrong syntax since we are using nodejs(shows errr in terminal) not browser (in browser , if we bind this js with htmland run in browser or just run it in inpect console , we will see a popup with 6)

// commenly used datatypes

let name = "Nishma"
let age = 20
let isLoggedIn = false

console.log(typeof age) // gives the type of the data/value

// datatypes
/*
1) undefined 

=> console.log(typeof undefined) -- type is undefined
=> Any variable that has not been assigned has the value as undefined and its type as undefined.


2) Null

=> Null is a standalone value. (value in itself)
=> Its type is object (some say its the flaw of js)
=> console.log(typeof null) -- object


3) Boolean

=>logical entity with two values - true/false

4) String

=> set of all ordered sequences of zero or more 16-bit unsigned integer values("elements") up to max length of 2^53 - 1 elements.
=> typically represents textual data where each element in string is treated as UTF-16 code unit value.
=> Each element is regarded as occupying a position in sequence starting from zero.
=> Numeber of elements is length of string , No elements means length = 0 (empty string)

5) Symbol

=> Each symbol value is unique and immutable , ,mostly used for differentaiting and indentifying unique components in React etc.,
=> Each symbol value immutably holds an associated value called [[Description]] that is either undefined or a string value.


6) Number 

=> has 2^64 - 2^53 + 3 values

7) BigInt

--- Non primitive datatypes

8) Object

=> Each instance of object , or simply referred to "an Object", simply represents a collection of properties. Each prperty is either a data property, or an accessor property.

*/

console.log(typeof undefined) // undefined
console.log(typeof null) // object