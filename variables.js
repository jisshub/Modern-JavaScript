

// VARIBLABLES -LET AND CONST

// Rules for initialising variables
// ---------------------------------------
// letter, numbers, underscores, $

// cannot start with a num.

// -------------------------------------------------------

// using LET to initialize a variable
let name = 'Jissmon Jose'
console.log(name)

// // can reassign variabe name wuith new value
name = 'Corey Schafer'
console.log(name)


// --------------------------------------------------

// Using const to declare variables
const name = 'Ajith'
console.log(name)

// while declaring a varibale using const, it shud be assigned
// wth  a value. else error
// eg:
const greeting


// cannot reassign to same varible that alread assigned.
const fullname = 'Aju Shaju'
console.log(fullname)
// tring to reassgin throws err.
fullname = 'John Doe'


// using const to declare object
// v cdeclaraed a person object and data goes like key:value pairs
const person = {
    name:'jiss',
    age:32
}

person.name = 'jissmon'
person.age = 45

console.log(person)

// bt cant use the same object using const,
// eg:
const person =
{
    name: 'jiss',
    age: 34
}


// declaring arrays

const numbers = [2,4,5,6,7]
console.log(numbers)

// bt cant reassign numbers array again.
const numbers = [45,2,1]











