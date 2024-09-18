// date are calculated from 1 Jan 1970 UTC

let myDate = new Date() // date is object

// console.log(myDate.toLocaleString());

// month starts from 0 in Javascript

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 30)
let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));  //convert millisecond to second

let newDate = new Date()
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(myDate.toLocaleString());

