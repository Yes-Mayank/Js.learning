"use strict";

// =======================
// DATE & TIME
// =======================

let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

console.log(typeof myDate)

// =======================
// CREATING DATES
// =======================

let myCreatedDate1 = new Date(2025, 6, 18)
console.log(myCreatedDate1.toDateString())

let myCreatedDate2 = new Date(2025, 6, 18, 5, 3)
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("2025-07-18")
console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 = new Date("07-18-2025")
console.log(myCreatedDate4.toLocaleString())

// =======================
// TIMESTAMP
// =======================

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate4.getTime())

console.log(Math.floor(Date.now() / 1000))

// =======================
// GET METHODS
// =======================

let newDate = new Date()

console.log(newDate)

console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getDate())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())

// =======================
// CUSTOM FORMAT
// =======================

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
)

/*
==========================================
DATE METHODS SUMMARY
==========================================

new Date()                  -> Current date & time

toString()                  -> Full date & time
toDateString()              -> Date only
toLocaleString()            -> Local date & time
toLocaleDateString()        -> Local date
toLocaleTimeString()        -> Local time

Examples:

myDate.toString()
myDate.toDateString()
myDate.toLocaleString()

==========================================
CREATE DATE
==========================================

new Date(2025, 6, 18)
new Date(2025, 6, 18, 5, 3)
new Date("2025-07-18")
new Date("07-18-2025")

==========================================
TIMESTAMP
==========================================

Date.now()                  -> Current timestamp (milliseconds)

getTime()                   -> Timestamp of a Date object

Convert milliseconds to seconds:

Math.floor(Date.now() / 1000)

==========================================
GET METHODS
==========================================

getFullYear()               -> Year
getMonth()                  -> Month (0-11, so add +1)
getDate()                   -> Day of month
getDay()                    -> Day of week (0=Sunday)
getHours()                  -> Hours
getMinutes()                -> Minutes
getSeconds()                -> Seconds

==========================================
CUSTOM FORMAT
==========================================

newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})

==========================================
MOST USED METHODS
==========================================

✔ new Date()
✔ Date.now()
✔ getTime()
✔ getFullYear()
✔ getMonth()
✔ getDate()
✔ getDay()
✔ getHours()
✔ getMinutes()
✔ getSeconds()
✔ toLocaleString()
✔ toDateString()
✔ toLocaleDateString()
✔ toLocaleTimeString()