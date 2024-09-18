// constructor -> singleton Object.create

// literal -> not singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh choudhary",
    [mySym]: "key1",
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@apple.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
//we can use this to reference same object 

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
}
// console.log(JsUser.greetingTwo());


// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array of objects
const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    }
]
// console.log(users[1].id);

// console.log(Object.keys(tinderUser)); //return type will be array
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring of objects
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

//JSON is also a type of object in which keys are in double quotes
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}