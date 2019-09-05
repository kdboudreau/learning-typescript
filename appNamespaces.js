// to bundle and compile all files into one file type in console
// tsc --outfile app.js circleMath.ts rectangleMath.ts app.ts
// this allows us to not need to add all files import in index.html
//below is another way to include all files to be compiled; 
// you still need to add the --outFile and output file name
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.Circle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);
// namespaces are good for small projects, but ES6 modules or modules in general are 
// typically better for medium to large projects
