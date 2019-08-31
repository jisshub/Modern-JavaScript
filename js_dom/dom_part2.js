
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item')

// console.log(list)
// console.log(listItem) 


// get childrens of an element
// children attrbuite givs us the html colections of all the elements.
// console.log(list.children)

let val 
val = list.children
val = list.children[1]
// val.textContent = 'hello'

// children of children


console.log(list)
console.log(list.children)
val = list.children[0]
console.log(val.children[0])

// adding an id to a children
val.children[0].id = 'link-text'  


// first child & last child of parent ul
// ----------------------
val = list.firstElementChild
val = list.lastElementChild
console.log(val)


// get parent elements
// get parent of li

val = listItem.parentElement

// get parent of parent
val = listItem.parentElement.parentElement

getparent = document.querySelector('a.delete-item')

val = getparent.parentElement

console.log(val)





