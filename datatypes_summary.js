"use strict";

// Primitive Datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 3456543576654356754n

// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Mayank",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof score)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFunction)