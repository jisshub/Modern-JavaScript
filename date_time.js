const date = new Date()
console.log(date)

let birthday
// here format is month-date-year
birthday = new Date('07-04-1996')
console.log(birthday)

birthday = new Date('October 10 1996 ')
console.log(birthday)

birthday = new Date('05/23/2010')
console.log(birthday)


// date along with time

birthday = new Date('10-22-2018 10:40:20')
console.log(birthday)

// ------------------------------------------


// date methods

// -----------------------------------------


// getMonth()
newDate = new Date('December 10 1995')
console.log('Month: ' + newDate.getMonth())
// month are zero based.
// 0-january, 1-february, 2-march


// getDay to get the day from the given Date.
newDate = new Date('07/01/2019')
console.log('Day: '+ newDate.getDay())



// getFullYear()
newDate = new Date('10-22-1994')
console.log('year:', newDate.getFullYear())

// getHours()
const newTime = new Date('10-22-1992 9:40:10')
console.log('hours: '+ newTime.getHours())

// get minutes from the given time
console.log('minutes: ' +newTime.getMinutes())

// get seconds from time.
console.log('Seconds: ' + newTime.getSeconds())


