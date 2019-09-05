"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
//leave out .ts above, typescript will auto resolve
// need to install a module loader = system js -> npm install --save systemjs@0.21.5
//must compile
console.log(circle_1.PI);
console.log(circle_1.calculateCircumference(10));
console.log(rectangle_1.calculateRectangle(20, 50));
