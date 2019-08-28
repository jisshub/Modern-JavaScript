// define an object literal
// r encoleod in curly braces.
// person is the object here,
// can hold diff types of data
// data goes like key: value pairs.


const person ={
    firstName: 'Steven',
    lastName: 'Smith',
    age: 33,
    address: 
    {
        city: 'kochi',
        country: 'india',
        zip_code: '672722'
    },
    likes: ['movies', 'football', 'coding'],

    getfunc: function phone(num)
    {
        return num

    },

    getjob: function func(job)
    {
        return job
    },

    // to access the value of age within the object,
    // use this keyword which points to the object person
    ageafter: function func3(val)
    {
        return this.age + val
    },
    addmore: function fun4(val2)
    {
        this.likes[1] = 'basketball'
        return this.likes
    }

}
// print the obj literal
console.log(person)

// print firstname, lastname,age and address
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.address)

// print values of address object usinh keys
console.log(person.address.city)
console.log(person.address.country)
console.log(person.address.zip_code)

// print arrays likes and fetch index 2 value
console.log(person.likes)
console.log(person.likes[2])
 
// return values by passing argumenfts
console.log(person.getfunc(832738))
console.log(person.getjob('web developer'))
console.log(person.ageafter(10))
console.log(person.addmore())


// Practice 
const college=
{
    name:'fisat',
    place:'angamaly',
    departments: ['computer science' ,'engineering', 'management'],
    students: {
        'mca': 200,
        'btech': 200,
        'mba': 100

    }


}
console.log(college.name)
console.log(college.place)
console.log(college.students)
console.log(college.students.btech)


