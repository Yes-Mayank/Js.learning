"use strict";

// Stack (Primitive) -> Copy
let myYoutubeName = "chaiaurcode"

let anotherName = myYoutubeName
anotherName = "mayank"

console.log(myYoutubeName)
console.log(anotherName)

// Heap (Non-Primitive) -> Reference
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)