const li = document.createElement('li')

// add class and id for li
li.className = 'collection-item'
li.id = 'new-item'

// add attribute

li.setAttribute('style', 'color: green')
console.log(li)

// append textnode to the li.
text = document.createTextNode ('Hello World')  
li.appendChild(text)
console.log(li.textContent)

// add this to parent ul element
let sel_ul
sel_ul = document.querySelector('ul.collection')
sel_ul.appendChild(li)

// add children anchor element to the created li.

const link = document.createElement('a')
link.className = 'delete-item secondary-content'
link.innerHTML = `<i class="fa fa-remove"></i>`
li.appendChild(link)



// practice in addin element

let ul
const sec_li = document.createElement('li')
sec_li.className = 'collection-item'
sec_li.id = 'sec-item'
sec_li.setAttribute('style', 'color:purple')
const text_val = document.createTextNode('Hello Friends')
sec_li.appendChild(text_val)
ul = document.querySelector('ul.collection')
ul.appendChild(sec_li)
const link2 = document.createElement('a')
link2.className = 'delete-item secondary-content'
link2.innerHTML = `<i class="fa fa-remove"></i>`
sec_li.appendChild(link2)






