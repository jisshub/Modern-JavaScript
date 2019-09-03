// console.log(document)

// Event Bubbling
// -----------------------
// https://www.quirksmode.org/js/events_order.html


// const title = document.querySelector('.card-title')
// title.addEventListener('click', function()

// {
//     console.log('Card Title')
// })


// const content = document.querySelector('.card-content')
// content.addEventListener('click', function()

// {
//     console.log('Card content')
// })

// const card = document.querySelector('.card')
// card.addEventListener('click', function()
// {
//     console.log('Card')
// })


//  EVENT DELEGATION
// -------------------------

const ul = document.querySelector('.delete-item')
ul.addEventListener('click', deleteItem)

function deleteItem(e)
{
    console.log('delete item')
}

// here of v delete an item it logs , bt if v try to delete next one it doesnt happens so use it parent class of delete-item class



const ul = document.querySelector('ul.collection')
ul.addEventListener('click', deleteItem)

function deleteItem(e)
{
    console.log('delete item')
}
