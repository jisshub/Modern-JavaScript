// usin template lterals to pass the date from
// js to html document

const name = 'jissmon'
const age = '23'
const job = 'python developer'
const city = 'kochi'
const vehilce = 'bike'
const interest = 'football'
const github = 'https://github.com/'
const image = 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png'


let html

// passinf retunr value of a fucntion to the document.
function hello() {
    return 'hello'
}

// enclose all tags and variables in a backtick
html =`
      <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job : ${job}</li>
        <li>City: ${city}</li>    
        <li>${hello()}</li>
        <li>${age > 20 ? 'ok man' : 'oh no'}</li>
        <li>Favourites: ${interest}</li>
      </ul>
      Github link: <a href=${github}>Github</a>
      Image link: <img src=${image} alt='gfsha'>
    `

document.body.innerHTML = html

