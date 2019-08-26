// conatenate two strings
const firstName = 'Akhil'
const lastName = 'Paul'
const age = 23
val = firstName +' '+ lastName
console.log(val)


// append two string to same variable
val = 'Aju '
val += 'Shaju'
console.log(val)

// example2
val = 'jissmon '
val += 'jose'
console.log(val)

// concatenating sentences
val = 'my name is ' + firstName+" "+lastName + ' and my age is '+ age
console.log(val)

// ------------------------------------------------------------------

// Escaping quotes
// val = 'this is a 'good idea' bro'
// console.log(val)

// to escape qupotes from sentence as above
// use \
val = 'this is a \'good idea\' bro'
console.log(val)

val = 'my name is \'jiss\''
console.log(val)

// or use "" 

val = 'this is a "good idea" bro'
console.log(val)

// ----------------------------------------

// String Methods

// length
val = firstName.length

// concat -- can concatenate with any no of strings
val = firstName.concat(' ',lastName,)
val = lastName.concat(' ',firstName )

// touppercase
val = firstName.toUpperCase()

// to lowercase
val =firstName.toLowerCase()

// indexof() - index position of a charecter
val = firstName.indexOf('h')
// if nothing found, returns -1.

// selection each character from string based on index.
val = firstName[2]
val = firstName[1]
val = lastName[1]

// charAt -- selection based on index.
val = firstName.charAt(2)
val = firstName.charAt(1)

// to get last character of a string.
val = firstName.charAt(firstName.length - 1)
val = lastName.charAt(lastName.length - 1)

// Substring -- toget substring of a string.
val = firstName.substring(0,4)
// return char from index 0 to index 3
val = lastName.substring(1, 3)
// return char at index 1 nd index 2

// Slice same as substring()
val = firstName.slice(1, 3)
console.log(val)
// Split() -- split the string to array based on a separator.

let sent = 'this is my life'
console.log(sent.split(' '))
// separator is ','
sent = 'web design, web development, web scraping'
console.log(sent.split(','))
// note: returns an arrary of strings

// replace() -- replacing a string with another
sent = 'js is not similar to python'
val = sent.replace('python', 'java')
console.log(val)
// example
sent = 'my age is 23'
console.log(sent.replace('23', '21'))

// includes() -- returns true if search string appears 
// in the inputted string.
 

let car = 'baleno'
yesno = car.includes('e')
console.log(yesno)
// example-2
yesno = car.includes('r')
console.log(yesno)
// example-3
console.log(car.includes('n'))



// pracitce
name = 'jissmon jose'
console.log(name.replace('jissmon', 'jomon'))


console.log(name.substring(3,7))

console.log(name.includes('jis'))

name = 'jomon jose'
console.log(name.split(' '))




