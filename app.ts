// let and const
let variable = "Test";
var variable2 = "Test";

// difference between the 2 is ScopedCredential. let creates block scope, var creates global scope

//const creates a constant
const maxLevels = 100;
// maxLevels = 99; //this throws an error, can reassign a constant

// block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);    
}
reset()
console.log(variable);


// arrow functions
console.log("Arrow Functions");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
    console.log("Hello");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Austin");