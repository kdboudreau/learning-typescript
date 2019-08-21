//string
let myName = "Kat";
// myName = 28;

//number
let myAge = 28;
// myAge = 'Kat';

// assign types
let myRealAge: number;
myRealAge = 28;
// let myRealAge : number = 28;  //this works too
// myRealAge = '28';

// array
let hobbies: any [] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples: arrays with mixed types
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray,   //0
    Green,  //1   //can also do Green = 100, that would set Blue = 101
    Blue    //2
}
let myColor: Color = Color.Green;
console.log(myColor); //logs 1

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string { //this type is the return value (not arguments)
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello");
    // can't return comething here
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2,'Kat'));
console.log(multiply(2,10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData = {
    name: "Kathryn",
    age: 28
};
// userData = {
//     a: "Hello",  //
//     b: 22
// }
let userData2: { name: string, age: number } = {
    name: "Kathryn",
    age: 28
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number [] {
        return this.data;
    }
};
// variable named complex
// object has 2 properties, data and output
// output property is a function

// type alias
// this is still a type creation, even though were on the right of the =, and thats only because of the keyword type
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output:function (all: boolean): number [] {
        return this.data;
    }
};

// union types
let myRealRealAge : number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = 'A string';
if (typeof finalValue == "string") {
    console.log("final value is a string");
} else if (typeof finalValue == 'number') {
    console.log('final value is a number')
}

// never type
function neverReturns(): never {
    throw new Error ('An error');
}

// nullable types
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
//added strictNullChecks = true; then compiler throws error when we set canBeNull = null
// to allow this to be null but have strict null checks, do the following
let canBeNull2: number | null = 12;
canBeNull2 = null;
let canThisBeAny = null;
canThisBeAny = 12;  //this throws an error if strict null checks, canThisBeAny is assumed to be of type null