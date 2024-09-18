const name = "hitesh"
const repoCount = 50

// console.log(name+repoCount+" value");

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String(`hitesh-hc-choudhary`)

//string is an object

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
 
console.log(gameName.charAt(2));

console.log(gameName.indexOf(`h`));

const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(-8,4)
// we can give negative values to slice method. It will start from the opposite side

console.log(anotherString);

const newString1 = "   hitesh   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh%20choudhary.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('eti'));

console.log(gameName.split('-'));



