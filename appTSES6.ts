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


// default parameters
console.log("Default Parameters");
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start --;
    }
    console.log("Done!", start)
};
countdown(); // without entering a parameter it defaults to 10,
            // otherwise it will use the number entered into the function


// spread and spread operators
console.log("REST and SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(numbers)); //cant do this, errors
console.log(Math.max(...numbers)); //turns this array into a list of numbers

// rest is kind of the opposite of spread operator
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2));


// destructuring
console.log("Destructuring");
const myHobbies = ["Coooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const[hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData3 = { userName: "Kat", age: 27 };
const {userName, age} = userData3;
console.log(userName, age);


// template literals
const userName2 = "Kat";
// const greeting = "Hello, I'm " + userName2;
const greeting = ` This is a heading!
I'm ${userName2}.
This is cool!`;
console.log(greeting);
