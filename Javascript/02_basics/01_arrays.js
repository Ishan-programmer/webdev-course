const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","nagraj"]

const myanotherArr = new Array(1,2,3,4)
console.log(myArr2[1]);

// array methods

myArr.push(6)
myArr.pop()
// push adds element to the last position, and pop removes element from the last position

//unshift adds element to the first position
//shift removes element from the 1st position
myArr.unshift(-1)
myArr.shift()

console.log(myArr.includes(9)); // returns true or false

console.log(myArr.indexOf(3)); //return index position

const newArr = myArr.join()  //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(typeof newArr);

console.log(myArr);

//slice splice

console.log("A ", myArr);

const myArr1 = myArr.slice(1,3)

console.log(myArr1);
console.log("B ",myArr);

const myArr2 = myArr.splice(1,3)
console.log(myArr2);
console.log("C ",myArr);

// slice returns the portion of array without including the last index, without changing the array
// splice includes the last index specified and also changes the array. In short terms, it removes that part of the array

const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
// arrays can hold arrays inside it. Push adds array to the original array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// concat Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const all_new_heros = [...marvel_heros, ...dc_heros]
// spread also adds two or more arrays. Think of glass dropped from height and it spreads in the ground. Similarly, spread(...ArrayName) spreads the elements 
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("hitesh"));
console.log(Array.from(1,2,3,4,5));

console.log(Array.from({name: "hitesh"})); //we have to define weather we want array of keys or values. Without information it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
