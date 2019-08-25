// Math Objects in JS
// -------------------------


// basic math
const num1 = 45
const num2 = 22
val = num1 + num2
val = num1- num2
console.log(val)

// /using math object
val = Math.PI
val = Math.pow(5,2)
val = Math.sqrt(16)
val = Math.abs(-5)
val = Math.ceil(4.3)
val = Math.floor(6.9)
val = Math.max(4,5,6,219)
val = Math.min(6,1,2)

// random () genrates a random decimal b/w 0 1 nd 1
val = Math.random() 

// gives a random no with decimal in range  0 and 20 bt not including 20.
val = Math.random() * 20 

// // gives a random no with decimal in range  0 and 20 , including 20.
val = Math.random() * 20 + 1

// to remove dcimal use round() method of Math object
val = Math.round(Math.random() * 20 + 1)


console.log(val)
