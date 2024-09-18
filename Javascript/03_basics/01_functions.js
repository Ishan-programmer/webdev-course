function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName     ->   reference
// sayMyName()   ->    execution

// function addTwoNumbers(number1, number2){  //parameters
//     number1+number2
// }
function addTwoNumbers(number1, number2){
    return (number1+number2)
}
const result = addTwoNumbers(3 , 5)   //arguements
// console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){ // "..." are rest as well as spread
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 800));

const user = {
    username : "hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
// we can pass object directly to the function

handleObject({
    username: "sam",
    price: 399
})

const newArray = [200,400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));

