// addEventListener
// ---------------------------
// here when v click the element with f=given class,
// function executes.
document.querySelector('.clear-tasks').addEventListener('click', function()
{
    console.log('Coder')
})
// while v clcick the link it doent print it in console. to log it in console.
// provide a # to the href of the link.

// Method-2- bettermthod. use onClick()

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick()
{
    console.log('Hello World')
}


// using event object
// -------------------
// here v use an event parameter e and call target and and using it v can change attributes.

document.querySelector('.clear-tasks').addEventListener('click', onClick)
function onClick(e)
{
    
    e.target.innerText = 'Delete Task'
    
    // here v change the text of btn while v click on it.
}








