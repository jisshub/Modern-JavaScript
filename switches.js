// Switches in js
// ---------------------
// switch statement followed by case statmement
// break keywird after each case 
// at end default statment, in cae none of case stamt satifies.
// switches better when having many no of cases.

const color = 'green'
switch(color)
{
    case 'red':
        console.log(color)
        break
    case 'blue':
        console.log(color)
        break
    case 'green':
        console.log(color)
        break
    default: 
    console.log('color not red, green, blue')
    break
}

// Example using Switche
// ---------------

switch(new Date().getDay())
{
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    default: 
    console.log('Saturday')
    break
}
