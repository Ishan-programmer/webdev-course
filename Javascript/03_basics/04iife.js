// Immediately Invoked Function Expression

(function chai(){
    console.log(`DB Connected`)
})();

// ()() 1st parentheses is function and 2nd parentheses is execcution

( (name) =>{
    console.log(`DB is connected too ${name}`);
})('hitesh');