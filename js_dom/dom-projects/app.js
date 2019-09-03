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
    // add submit event
    form.addEventListener('submit', addEvent)
    // add event listener to remove task
    // use event delegation to remove each list items
    taskList.addEventListener('click', removeEvent)
    // add am vent listener for cleartaaks
    clearBtn.addEventListener('click', clearTasks)

    // add listener for input 
    filter.addEventListener('mouseleave', filterTask)


  
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


// filter and delete tasks
function removeEvent(e)
{
    // first need to check whther target element havea 
    // parent element with class delete-item, to do that,
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        // add a confimation mesage bevore removing
        if(confirm('Are You sure: ?'))
        {

        
        // then access parent of parent of target element and then call remove.
        e.target.parentElement.parentElement.remove()
        }
        // here order is icon - a tag - li element.
        // so removed li element.
        
    }
   

}

function clearTasks(e)
{
    if(taskList.children.length === 0)
    {
        alert('no tasks')
    }
    if(confirm('Are You Sure ?'))
    {
        taskList.remove()
    }
}

function filterTask(e)
{
    console.log(e.target.value)
    // if(e.target.value === )
    // {

    // }

}