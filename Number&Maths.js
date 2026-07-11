"use strict";

// =======================
// NUMBERS
// =======================

const score = 400
console.log(score)

const balance = new Number(100)

console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000

console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

// =======================
// MATHS
// =======================

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*
==========================================
NUMBER METHODS SUMMARY
==========================================

toString()          -> Converts number to string
toFixed(n)          -> Fixed decimal places
toPrecision(n)      -> Total significant digits
toLocaleString()    -> Formats number with commas

Examples:

balance.toString()
balance.toFixed(2)
otherNumber.toPrecision(4)
hundreds.toLocaleString()
hundreds.toLocaleString('en-IN')

==========================================
MATH METHODS SUMMARY
==========================================

Math.abs(x)         -> Absolute value
Math.round(x)       -> Nearest integer
Math.ceil(x)        -> Round up
Math.floor(x)       -> Round down
Math.min(...)       -> Smallest value
Math.max(...)       -> Largest value
Math.random()       -> Random number between 0 and 1

Random Number Formula:

Math.floor(Math.random() * 10) + 1
-> Random number between 1 and 10

General Formula:

const min = 10
const max = 20

Math.floor(Math.random() * (max - min + 1)) + min

-> Random number between min and max

Most Used Methods:
✔ toFixed()
✔ toPrecision()
✔ toLocaleString()
✔ Math.abs()
✔ Math.round()
✔ Math.ceil()
✔ Math.floor()
✔ Math.min()
✔ Math.max()
✔ Math.random()
*/