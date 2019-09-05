// import { PI, calculateCircumference } from "./math/circle"; 
import * as Circle from "./math/circle"; 
// import { calculateRectangle } from "./math/rectangle"; 
//when adding the default function to rectangle.ts must change above
import calc from "./math/rectangle"; 

//leave out .ts above, typescript will auto resolve
// need to install a module loader = system js -> npm install --save systemjs@0.21.5
//must compile

// console.log(PI);
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
// console.log(calculateRectangle(20, 50));
console.log(calc(20, 50));