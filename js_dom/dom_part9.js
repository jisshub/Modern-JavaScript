// LOCAL ANS SESSION STORAGE
// -------------------------
// local storage will stay untill it is emoved manually.

// session storage leaves once seession is closed or v close the browser.

// set item
// localStorage.setItem('name', 'jiss')
// localStorage.setItem('age', 23)
// // get item
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('age'))

// // ?remove item
// localStorage.removeItem('task')

// // clear local Storage
// localStorage.clear()


// Practice
// -----------

// const input = document.querySelector('form')

// // create event
// input.addEventListener('submit', runEvent)
// function runEvent(e)
// {
//     const task = document.querySelector('#task').value
//     let tasks

//     if (localStorage.getItem('task') === null)
//     {
//         tasks = []
//     }
//     else 
//     {
//         task = JSON.parse(localStorage.getItem('task'))
//         console.log(tasks)  
//     }
//     tasks.push(task)


//     localStorage.setItem('tasks', JSON.stringify(task))
//     alert('Item Saved')

//     e.preventDefault()
// }

// here v can store multiple tasks = tasks = tasks innce each time task will be overwriiten by another.
// so want to put the tsaks in a n array and 
// reformat it as a String.

// console.log(localStorage.getItem('task'))

document.querySelector('form').addEventListener('submit', function(e)
{
    // inputVal = []
    const inputVal = document.querySelector('input#task').value
    
    let tasks
    if (localStorage.getItem('inputVal') === null)
    {
        tasks = [] 
    }                                                                           
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(inputVal)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    alert('Value Added')

    e.preventDefault()

})
