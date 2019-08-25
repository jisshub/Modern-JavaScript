
// number to string
let val
val = 8
console.log(val)
console.log(typeof val)
// console.log(val.length())
// here length is string properrty to get length of a string.

val = String(8)
console.log(val.length)
// here v convert number to string uing String()
// thus v can find the length of it.

val = String(2133)
console.log(val.length)

// ------------------------------------------

// Boolean to String

val = String(true)
console.log(typeof val)
console.log(val.length)

// using toString to get string repr of object
val = true.toString()
console.log(typeof val)
console.log(val.length)

// -------------------------------------------------


// Arraays to String

val = String([3,4,5,6])
console.log(typeof val)
console.log(val.length)

// Using toString() function
val =[3,4,5,6].toString()
console.log(typeof val)


val = Number(null)
console.log(val)

// Strng to numbers

val = Number('2')
console.log(val)
console.log(typeof val)

val = Number('333')
console.log(val)
console.log(typeof val)

// boolean to number

val =Number(true)
console.log(val)
console.log(typeof val)

val = Number(false)
console.log(val)
console.log(typeof val)

// a string value to number
val = Number('akdasd')
console.log(val)
console.log(typeof val)

// console returns NaN as output of val.
// NaN is an actual value that stabds for Not a Number.

// array value to number
val = Number([3,4,5])
console.log(val)
console.log(typeof val)
// also returns NaN

// ----------------------------------------------------

// ParseInt and ParseFloat
// both converts string to number

val = parseInt('100')
console.log(val)
console.log(typeof val)

// example-2
val = parseInt('100.35')
console.log(val)
console.log(typeof val)

// here it return just 100 not 100.35
// since parseint convert to number & only returns integer portion
// of the number

// to get the decimal part also, use parsefloat()
val = parseFloat('200.12')
console.log(val)
console.log(typeof val)
// parsefloat convert to number & return decimal part also unlike parseint.

// Example-2
val = parseFloat('23.333')
console.log(val)
console.log(typeof val)

// --------------------------------------------------

// Type Coercion in JS

const val1 = 5
const val2 = 10
const result = val1 + val2
console.log(result)
console.log(typeof result)


// next v give a string instead of a number
// add with  a number

const val3 = String(5)
const val4 = 10
const sum = val3 + val4
console.log(sum)
console.log(typeof sum)

// OutPut
// number
// 510

// here one is String and other is number.
// while adding both, js will change number to 
// string automatically, thus getting two strings
// and concatenate both.

const val10 = true
const val44 = 33
const result3 = val10 + val44
console.log(val10)
console.log(result3)

// here one is boolean and other is number.
// so js converts former to number
// and adds both to get 34.(33 + 1)
// 1 denoted true.

// ------------------------------------------------------------

