// keyboard and input events
// --------------------
// KeyboardEvent()
// forms and inout events

const form = document.querySelector('#task-form')
const input = document.querySelector('#task')

// Submit Event
// ---------------------
form.addEventListener('submit', runevent)

// empty the inputvalue at the begining
input.value = ''

function runevent(e)
{
    console.log(`Event Type: ${e.type}`
    )

    // prvents the default behaviouf of form.
    // else. it redirect to a link that specified in the action.
    e.preventDefault()
    // get the input value
    console.log(input.value)
    // empty the inputvalue for the form after event happens
    input.value = ''
}



const heading = document.querySelector('#task-title') 

// keyup Event
// -----------

// it fires up when type the input. 
input.addEventListener('keyup', keyEvent)
function keyEvent(e)
{
    console.log(e.target.value)
    heading.innerText = e.target.value

}


// input Event - same as keyup

input.addEventListener('input', inptEvent)
function inptEvent(e)
{
    console.log(e.target.value)
    heading.innerText = e.target.value
}


