// let and const
var variable = "Test";
var variable2 = "Test";
// difference between the 2 is ScopedCredential. let creates block scope, var creates global scope
//const creates a constant
var maxLevels = 100;
// maxLevels = 99; //this throws an error, can reassign a constant
// block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Austin");
// default parameters
console.log("Default Parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(); // without entering a parameter it defaults to 10,
// otherwise it will use the number entered into the function
// spread and spread operators
console.log("REST and SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(numbers)); //cant do this, errors
console.log(Math.max.apply(Math, numbers)); //turns this array into a list of numbers
// rest is kind of the opposite of spread operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
