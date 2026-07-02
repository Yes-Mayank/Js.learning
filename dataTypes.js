"use strict"; // treat all JS code as newer version

// alert(3 + 3) // works in browser, not in Node.js

console.log(3 + 3)
console.log("Mayank")

let name = "Mayank"      // string
let age = 20             // number
let isLoggedIn = false   // boolean
let state = null         // null

// number => 2 to power 53
// bigint => big numbers
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned
// symbol => unique

console.log(typeof "Mayank")
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof null)       // object (famous JS weird behavior)
console.log(typeof undefined)  // undefined