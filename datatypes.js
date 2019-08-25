// PPRIMITIVE TYPES

const name = 'jissmon'
// to check type of a variable use typeof
console.log(typeof name)

// number
const number = 44
console.log(typeof number)

// boolean
const answer = true
console.log(typeof answer)

// null, bt get object as type(which is a bug)
const num = null
console.log(typeof num)

// undefined
let number2
console.log(typeof number2)

//Symbols
const sym = Symbol()
console.log(typeof sym)

// -------------------------------------------

// Reference Types -OBJECT
// reference types return 'object' as their type

// arrays
const arr = [34,56,33,89]
console.log(typeof arr)

// object literals
const address =
{
    city: 'kochi',
    state: 'kerala',
    zip: 27328
}

console.log(typeof address)

// datesconsole.log(date)
const date = new Date
console.log(typeof date)

// ------------------------------------------------