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


