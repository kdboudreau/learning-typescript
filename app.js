//string
var myName = "Kat";
// myName = 28;
//number
var myAge = 28;
// myAge = 'Kat';
// assign types
var myRealAge;
myRealAge = 28;
// let myRealAge : number = 28;  //this works too
// myRealAge = '28';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples: arrays with mixed types
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); //logs 1
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello");
    // can't return comething here
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,'Kat'));
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Kathryn",
    age: 28
};
// userData = {
//     a: "Hello",  //
//     b: 22
// }
var userData2 = {
    name: "Kathryn",
    age: 28
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = 'A string';
if (typeof finalValue == "string") {
    console.log("final value is a string");
}
else if (typeof finalValue == 'number') {
    console.log('final value is a number');
}
// never type
function neverReturns() {
    throw new Error('An error');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
//added strictNullChecks = true; then compiler throws error when we set canBeNull = null
// to allow this to be null but have strict null checks, do the following
var canBeNull2 = 12;
canBeNull2 = null;
var canThisBeAny = null;
canThisBeAny = 12; //this throws an error if strict null checks, canThisBeAny is assumed to be of type null
