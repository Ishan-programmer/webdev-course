// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);
// console.log(c);


// global scope in node and in browser are different

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    two()
}
one()

//                          interesting


console.log(addone(5))
function addone(num){
    return num+1
}


// we cannot run the function before declaration by this method
console.log(addTwo(5))
const addTwo = function(num){   //also known as expression
    return num+2
}