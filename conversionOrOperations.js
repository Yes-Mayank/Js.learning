"use strict";

let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "Mayank" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

console.log(Number("33abc"))   // NaN
console.log(Number(null))      // 0
console.log(Number(undefined)) // NaN

console.log(Boolean(""))       // false
console.log(Boolean("hello"))  // true


// node conversionOperation.js


"use strict";

let value = 3
let negValue = -value

console.log(negValue)

console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 ** 3) // power
console.log(2 / 3)
console.log(2 % 3)

let str1 = "hello"
let str2 = " mayank"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
// console.log(true+) // error

console.log(+"")