"use strict";

// =======================
// ARRAY PART - 2
// =======================

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// push()
marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
console.log(marvel_heroes[3][1])

// concat()
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

// spread operator (...)
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes)

// =======================
// FLAT
// =======================

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray)

// =======================
// ARRAY CHECKING
// =======================

console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank"))
console.log(Array.from({name: "Mayank"}))

// =======================
// ARRAY OF
// =======================

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

/*
==========================================
ARRAY METHODS PART - 2
==========================================

push(array)
-> Adds entire array as a single element

Example:

const a = [1,2]
const b = [3,4]

a.push(b)

Output:
[1,2,[3,4]]

------------------------------------------

concat()

-> Merges two arrays
-> Returns new array

Example:

a.concat(b)

Output:
[1,2,3,4]

------------------------------------------

Spread Operator (...)

-> Best way to merge arrays

Example:

[...a, ...b]

Output:
[1,2,3,4]

------------------------------------------

flat(depth)

-> Converts nested array into single array

Example:

const arr = [1,[2,[3,4]]]

arr.flat(Infinity)

Output:
[1,2,3,4]

------------------------------------------

Array.isArray(value)

-> Checks if value is array

Example:

Array.isArray("Mayank")

Output:
false

------------------------------------------

Array.from(value)

-> Creates array from iterable

Examples:

Array.from("Mayank")

Output:
['M','a','y','a','n','k']

Array.from({name:"Mayank"})

Output:
[]

------------------------------------------

Array.of()

-> Creates array from values

Example:

Array.of(10,20,30)

Output:
[10,20,30]

==========================================
MOST USED METHODS
==========================================

✔ concat()
✔ spread (...)
✔ flat()
✔ Array.isArray()
✔ Array.from()
✔ Array.of()

Interview Tip:
Use the spread operator (...) instead of concat() whenever possible because it's cleaner and more flexible.