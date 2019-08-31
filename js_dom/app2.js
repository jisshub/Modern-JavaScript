// console.log(document.head)

// // /DOM  selectors for single elements
// // -------------------------

// main = document.getElementById('main')


// // get id and class 
// console.log(main.id)

// console.log(main.className)


// // change styling

// let head = document.getElementById('task-title')
// // head.style.display='none'
// // head.style.color = 'red'


// // change contents
// // ------------------

// head.textContent = 'not a task list'
// head.innerText = 'new task list'

// // innerHTML add html codes to the element
// // here v change the style of head.
// head.innerHTML = '<span style="color:red">Task list</span>'

// // here it overrdes the previous changes made
// head.innerHTML = '<span style="color:blue">hello</span>'



// Documet.querySelector
// -------------------------


// selecting elements using anything including id , class ,element

// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-action'))
// console.log(document.querySelector('li'))


// // styling contents 
// // --------------------
// console.log(document.querySelector('li').style.color="red")

// console.log(document.querySelector('li:last-child').style.color = 'green')

// console.log(document.querySelector('li:nth-child(2)').style.color = 'blue')



// DOM selector for mulitple elements
// ----------------------------------------


// const doc = document.getElementsByClassName('collection')
// console.log(doc)


const doc = document.getElementsByClassName('collection-item')
console.log(doc)

// gets item with index1
console.log(doc[1])


// using queryselector with getelementby classname
// ----------------------

const doc2 = document.querySelector('ul').getElementsByClassName('collection-item')

console.log(doc2)

// here v first select ul and later slect li's based on classname.


// getelementbytagname
// -----------------------

let doc3 = document.getElementsByTagName('li')
console.log(typeof doc3)

// 

// convert html collection to arrays
doc3 = Array.from(doc3)
console.log(doc3)

// looping thru each items;
// use forEach and pass the elementto be looped to a
// function.


doc3.forEach(function(li) {
    console.log(li.className)
});

// doc3.forEach(function(li)
// {
//     li.textContent = 'hello'
// })

// doc3.forEach(function(li)
// {
//     li.style.background = '#333'
// })



// document.qurryselectorAll()
// ----------------------------

// its a node list insted odf html collection

const list_it = document.querySelectorAll('li')
console.log(list_it)


// do forEach on NOdelist
// list_it.forEach(function(li)
// {
//     console.log(li)
// })

// list_it.forEach(function(li)
// {
//     li.textContent = 'Njan Polichu'
// })



// Practice


// change hthe bg style of even and odd ones.


// select the nth element odd and even.

const even_li = document.querySelectorAll('li:nth-child(even)')

const odd_li = document.querySelectorAll('li:nth-child(odd)')
odd_li.forEach(function(li)
{
    li.style.background = 'grey'
}
)

even_li.forEach(function(li)
{
    li.style.background='blue'
}
)
// for (let i = 0; i < even_li.length; i++)
// {
//     even_li[i].style.background = 'blue'
// }



