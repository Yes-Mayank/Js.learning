"use strict";

const name = "Mayank"
const repoCount = 10

// Old way
console.log(name + repoCount + " Value")

// Modern way (Template Literals)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("mayank-kumar")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("a"))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    mayank    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://mayank.com/mayank%20kumar"

console.log(url.replace("%20", "-"))
console.log(url.includes("mayank"))
console.log(url.includes("hello"))

console.log(gameName.split("-"))

/*
======================
STRING METHODS SUMMARY
======================

length              -> Returns string length
toUpperCase()       -> Converts to uppercase
toLowerCase()       -> Converts to lowercase
charAt(index)       -> Returns character at index
indexOf(char)       -> Returns first occurrence index
substring(start,end)-> Extracts part of string (no negative index)
slice(start,end)    -> Extracts part of string (supports negative index)
trim()              -> Removes spaces from both ends
replace(old,new)    -> Replaces first occurrence
includes(value)     -> Checks if value exists
split(separator)    -> Converts string into an array

Examples:

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("a"))
console.log(gameName.substring(0, 4))
console.log(gameName.slice(-8, 4))
console.log(newStringOne.trim())
console.log(url.replace("%20", "-"))
console.log(url.includes("mayank"))
console.log(gameName.split("-"))

Most Used Methods:
✔ length
✔ charAt()
✔ indexOf()
✔ substring()
✔ slice()
✔ trim()
✔ replace()
✔ includes()
✔ split()
*/

