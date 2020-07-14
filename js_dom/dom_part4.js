

// REPLACING THE ELEMENT WITH A NEW ELEMENT
// -------------------------------------------

// first - create an element

const newHeading = document.createElement('h2')
newHeading.id = 'task-title'


// add a texNode
newHeading.appendChild(document.createTextNode('Task-Title'))

// next - fetch the elemnt to be replaced
oldHeading = document.querySelector('#task-title')

// get the parent node of node to be replaced
parentNode = document.querySelector('.card-action')

// use replaceChild() function and pass both nodes aas args.  use parentnode.replaceChild else error shows.
parentNode.replaceChild(newHeading, oldHeading)


// REMOVING A LIST ITEM
// --------------------------

const lis = document.querySelectorAll('li')
// use remove() method of array
lis[1].remove()



// CLASSES AND ATTRBIUTES 
// -------------------------

const firstLi = document.querySelector('li:first-child')

// get the classes
// ---------------

let val

const link = firstLi.children[0]
val = link.className

// gives string of  classes
console.log(val)

// use classlIst property
// gives a dom tokenlist
val = link.classList
console.log(val)

// to acces them individuall
val = link.classList[1]
console.log(val)

// // to add class
link.classList.add('test')
console.log(link)

// remove class
link.classList.remove('test')
console.log(link)


// ATTRIBUTES
// -------------------
// GET ATTRIBUTE

val = link.getAttribute('href')
console.log(val)

// set attribute
link.setAttribute('href', 'https://www.youtube.com')

link.setAttribute('href', 'https://www.udemy.com')


