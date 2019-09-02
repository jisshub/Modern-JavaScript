// Define uif element

const form = document.querySelector('#task-form')
const taskList = document.querySelector('ul.collection')
const filter = document.querySelector('#filter')
const  clearBtn = document.querySelector('.clear-tasks')
const taskInp = document.querySelector('#task')



// load event listeners
loadEventListeners()

// create a fucntion to laod all event listeners
function loadEventListeners()
{   
    // add task event
    form.addEventListener('submit', addEvent)
  
}

// Add Tasks
function addEvent(e)
{
    if(taskInp.value === " ")
    {
        alert('no value')
    }
    // Next create li,
    const li = document.createElement('li')
    // give a className
    li.className = 'collection-item'
    // create a tex node
    li.appendChild(document.createTextNode(taskInp.value))
    // create  link
    const link = document.createElement('a')
    // add classname
    link.className = 'delete-item secondary-content'
    // add inerhtml
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // append link to li
    li.appendChild(link)
    // append li to ul
    taskList.appendChild(li)

    // clear the input
    taskInp.value = ''


    e.preventDefault()
}


