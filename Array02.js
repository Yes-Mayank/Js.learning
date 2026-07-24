"use strict";

// =======================
// ARRAYS
// =======================

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Ironman", "Batman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr)
console.log(myHeroes)
console.log(myArr2)

// =======================
// ARRAY METHODS
// =======================

// push() -> Add element at end
myArr.push(6)
myArr.push(7)
console.log(myArr)

// pop() -> Remove last element
myArr.pop()
console.log(myArr)

// unshift() -> Add element at beginning
myArr.unshift(9)
console.log(myArr)

// shift() -> Remove first element
myArr.shift()
console.log(myArr)

// includes() -> Check if element exists
console.log(myArr.includes(3))
console.log(myArr.includes(9))

// indexOf() -> Returns index
console.log(myArr.indexOf(3))
console.log(myArr.indexOf(10))

// join() -> Converts array into string
const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// =======================
// SLICE vs SPLICE
// =======================

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C ", myArr)

/*
==========================================
ARRAY METHODS SUMMARY
==========================================

push(value)        -> Add element at end
pop()              -> Remove last element
unshift(value)     -> Add element at beginning
shift()            -> Remove first element
includes(value)    -> Checks if value exists
indexOf(value)     -> Returns index of value
join()             -> Converts array into string

Examples:

myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
myArr.includes(3)
myArr.indexOf(2)
myArr.join()

==========================================
SLICE vs SPLICE
==========================================

slice(start, end)

- End index NOT included
- Original array remains unchanged

Example:

const arr = [0,1,2,3,4]

arr.slice(1,3)

Output:
[1,2]

Original:
[0,1,2,3,4]

------------------------------------------

splice(start, count)

- Removes elements from original array
- Original array changes

Example:

const arr = [0,1,2,3,4]

arr.splice(1,3)

Output:
[1,2,3]

Original:
[0,4]

==========================================
MOST USED METHODS
==========================================

✔ push()
✔ pop()
✔ shift()
✔ unshift()
✔ includes()
✔ indexOf()
✔ join()
✔ slice()
✔ splice()