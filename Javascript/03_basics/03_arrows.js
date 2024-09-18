const user = {
    userName: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website `);
        
    }
}
// this is used for current context
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this)  //here this refers to empty object in node

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName);
// }
// chai()

// const chai = () => {
//     let userName ="hitesh"
//     console.log(this.userName);
    
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// const addTwo = (num1, num2) => num1+num2 
// implicit function. curly braces and return is removed for one line function

// const addTwo = (num1, num2) => (num1+num2) 
//if curly braces are used then return statement must be there. If parentheses are used , dont need to write return 

const addTwo = (num1, num2) => ({username: "hitesh"}) 

console.log(addTwo(1,2));
