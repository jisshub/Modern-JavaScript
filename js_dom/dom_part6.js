// MOUSE EVENTS
// -------------------

const card = document.querySelector('.card')
// console.log(clearBtn)
const linkBtn = document.querySelector('.clear-tasks')
const heading = document.querySelector('h5')

const inputBtn = document.querySelector('input.btn')



function Click(e)
{
    inputBtn.style.background = 'green'
}

// cretate event
inputBtn.addEventListener('click', Click)

// event handler
function onClick(e)
{
    console.log(`Event Handler: ${e.type}`)
 
    
}

// CLICKdocument
// -----------------
// create event
linkBtn.addEventListener('click', onClick)


// dblclick 
// -----------------
linkBtn.addEventListener('dblclick', onClick)


// mouse over
// event occurs while v hover over the btn
linkBtn.addEventListener('mouseover', onClick)


// mouseleave
// occurs when v leave the mouse
linkBtn.addEventListener('mouseleave', onClick)


// mouseup
linkBtn.addEventListener('mouseup', onClick)

// mousedown
linkBtn.addEventListener('mousedown', onClick)

// mousemove
card.addEventListener('mousemove', movEvent)
function movEvent(e)
{
    // card.style.background = ;
    // console.log(e.offsetx)
    const head = document.querySelector('#task-title')

    // change the body bg while vmove the mouse over card
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
}