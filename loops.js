// FOR LOOPS

// for(let i = 1; i <= 10; i++)
// {
//     console.log(i)

// }


// // using if inside the for.
// // ------------------------
// for(let i = 0; i <= 10; i++)

// {
//     if (i == 2)
//     {
//         console.log(`number: ${i}`)
//     }
 
//         console.log(i)
    
// }


// using break  and continue
// ------------------------------

// continue statement will stop the execution following that statement. and continue the iteration.
// break will stops entire iteration.

for (let i = 1; i <= 10; i++)
{
    if (i == 3)
    {
        console.log(`my fav number ${i}`)
        continue
    }
    if(i == 6)
    {
        console.log(`i dont like ${i}`)
        break
    }
    console.log(i)
}

// while loop
// exceutes unitl condition  becomes false

let i = 25
while(i < 30)
{
    console.log(`number is ${i}`)
    i++
}


let age = 20
while(age < 25){
    console.log('age is '+ age)
    age++
}


