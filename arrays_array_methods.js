const numbers = [10, 20 ,30 ,40]

// here new Array is an ArrayConstrutor
const numbers2 = new Array(10 ,20 ,30, 40)
const fruits = ['apple', 'orange' ]

// can create mixed arrays having diff. types.
const mixed = [10, 20, 'apple', {a:1, b:2}, new Date]


// array method
// ----------------------------

// lenght of array
let val
val = numbers.length


// find value based on index.
val = numbers[2]

// insert into array
numbers[2] = 500

// check whether an array object or not
val = Array.isArray(numbers)
// if not array retuns error
// console.log(Array.isArray(gssjhdgasj))

// to get the index of valur v pass in 
val = numbers.indexOf(20)
val = numbers2.indexOf(40)
// if no value is found returns -1.
val = numbers.indexOf(100)

// console.log(numbers)
// console.log(val)


// MUTATTING ARRAYS
// ----------------------
const num1 = [34,12,20,40,22,55]
const num2 = new Array(12, 11, 77, 22)

// insert to the end of the array.
num1.push(52)

// pop last element from the array
num1.pop()

// add to the front of array.
num1.unshift(300)

//remove first element and returns it.
val = num1.shift()
// console.log(val)

// arrays reverse
num1.reverse()

// arrays sort 
num1.sort()
num2.sort()width="100%">
  c

// concatenate arrays
num3 = num1.concat(num2)

// Splice out elements from array
num4 = num1.splice(1, 3)
// here splice() removes elements with index 1,2,and 3 from array.
// and store thos removed ones in new array.

// find amethod to find the first element that satusfies
// the given predicate  in return statment.
const array = [70, 20, 30, 60, 45]
function func1(num)
{
   return num < 55
}
val = array.find(func1)
console.log(val)

// example-2
function func2(num)
{
    return num > 55    
}
val = array.find(func2)
console.log(val)


console.log(num1)
console.log(num4)
console.log(num2)
console.log(num3)



// practice
const num10 = [45,56,55]
num10.push(22)
console.log(num10)


num10.pop()
console.log(num10)

num10.unshift(11)
console.log(num10)

num10.shift()
console.log(num10)

console.log(num10.sort())
console.log(num10.reverse())

// ------------------------------------



