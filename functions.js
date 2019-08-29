
// FUNCTION DECLARATION 

// block inside the funcion is fucntio scope
function greet(firstName, lastName)
{
    return 'hello ' + firstName + lastName
}
console.log(greet('jissmon', 'jose'))





// Example - 2
// default arguments
function greet(firstName='jisson', lastName = 'joy')
{
    return 'hello ' + firstName +' '+ lastName
}
console.log(greet())

// function expressions
// ------------------------
// assign a function to a variable
// call using that variable

const square = function(value)
{
    return value **2
}
console.log(square(4))


// Example -3
const uppercase = function(teamName)
{
    let newName = teamName.toUpperCase()
    return newName
}
console.log(uppercase('Real Madrid'))



// Functions wwith in objects
// -----------------------------

const todo =
{
    add: function(){
        console.log('Add todo')
    },
    edit: function(id)
    {
        // here v suse template literal to get the argument of id parameter
        console.log(`Edit todo ${id}`)
    },
    delete: function(name)
    {
        console.log(`Delete todo with name ${name}`)
    }
}
console.log(todo.add())
console.log(todo.edit(33))
console.log(todo.delete('jissmon'))











