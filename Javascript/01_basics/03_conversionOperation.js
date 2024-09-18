let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);

console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true 

//********************************** OPERATIONS ***************** *

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " world"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
let counter = gameCounter++;
console.log(counter);
console.log(gameCounter);
