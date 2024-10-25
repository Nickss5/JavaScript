let score1 = 33 // data = number
console.log(typeof score1); // one way - number 
//console.log(typeof(score1)); // another way - method - number


let score2 = "33" // data = number like string
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // 33


let score3 = "33abc" // data = number mixed with string 
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3) // number -- even with "abc"
console.log(valueInNumber3) // Nan -- (Not a number) -- problem with js , no strict check, cant convert properly

/*

Conversion to Number 

"33" => value = 33, type = number
"33abc" => Nan ,number
"Nishma" => Nan ,number
undefined => Nan ,number
null => 0 ,number
true => 1 ,number
false => 0 ,number

*/

let LoggedIn = 3
let BooleanLoggedIn = Boolean(LoggedIn)
console.log(BooleanLoggedIn) // true

/*

Conversion to Boolean

1,2,3..... => true
0 => false
"" =>  false
"Nishma" => true

*/

let stringNumber = 4.44
let conStringNumber = String(stringNumber)
console.log(conStringNumber) // 33 - string

//----------------- operations --------------------------

let value = 33
let negValue = -value // -33

//arthemetic operators --> +, -, *, %, /, **

//concat 
let str1 = "Nishma"
let str2 = "Hello "

let full = str2 + str1 // Hello Nishma

// Different types of concatination

console.log(2+2)  // --> 4 - number
console.log("2" + "2") // --> 22 - string
console.log(1 + "2") // --> 12 - string
console.log("1" + 2) // --> 12 - string
console.log("1" + 2 + 2) // --> 122 - string - one string then entirity is string
console.log(1 + 2 + "2") // --> 32 - string is last 

// Another type of conversion (not a good practice)

console.log(+true) // 1 --> converted to number boolean 
console.log(+"") //  0 --> since empty string is always false/0

// Prefix and Suffix operands

// 1) Prefix -- (++x) --> increments and returns the value after incrementing

let x = 3
let y = ++x 
console.log(`x: ${x}, y: ${y}`)
// output :  x: 4, y: 4

//----------------------------------------

// 2) Suffix/Postfix -- (x++) --> returns the value then increments the value

let a = 3
let b = a++
console.log(`a: ${a}, b: ${b}`)
//output : a: 4, b: 3

//------------ when does the increment not change for pre/postfix ------------

let gameCounter = 100
++gameCounter // 101
gameCounter // 101






