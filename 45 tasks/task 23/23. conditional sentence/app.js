"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cars = 'subaru';
console.log("is car == 'subaru'? i predict true.");
console.log(cars == 'subaru'); //true
console.log("is car === 'subaru'? i predict true.");
console.log(cars === 'subaru'); //true
console.log("is car != 'subaru'? i predict false.");
console.log(cars != 'subaru'); //false
console.log("is car !== 'subaru'? i predict false.");
console.log(cars !== 'subaru'); //false
console.log("is car < 'subaru'? i predict false.");
console.log(cars < 'subaru'); //false (lexicographic comparision)
console.log("is car > 'subaru'? i predict false.");
console.log(cars > 'subaru'); //false (lexicographic comparision)
console.log("is car <= 'subaru'? i predict true.");
console.log(cars <= 'subaru'); //true
console.log("is car >= 'subaru'? i predict true.");
console.log(cars >= 'subaru'); //true
console.log("is car? 'subaru'? i predict true.");
console.log(cars); //true (non empty string is truthy)
console.log("is !car? i predict false.");
console.log(!cars); //false (negation of a truthy value)
