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