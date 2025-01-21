
export{}


let car: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

console.log("is car == 'subaru'? i predict true.");
console.log(car == 'subaru'); // true (case-insensitive)

console.log("is car === 'subaru'? i predict false.");
console.log(car === 'subaru'); // false (case-sensitive)

console.log("is car != 'toyota'? i predict true.");
console.log(car != 'toyota'); // true

console.log("is car !== 'subaru'? i predict false.");
console.log(car !== 'subaru'); // false (case-sensitive)

console.log("is car.tolower case() == 'subaru'? i predict true.");
console.log(car.toLowerCase() == 'subaru'); // true (converted to lower case)


console.log("is car === car.tolower case() === 'subaru'? i predict false.");
console.log(car === car.toLowerCase()); // false (original value remains uppercase)

console.log("is age == 25? i predict true.");
console.log(age == 25); //true



console.log("is age != 30? i predict true.");
console.log(age != 30); //true




console.log("is age > 30? i predict false.");
console.log(age > 30); //false


console.log("is age <= 25? i predict true.");
console.log(age <= 25); //true



console.log("is age > 20 && age < 30? i predict true.");
console.log(age > 20 && age < 30); //true (both conditions met)



console.log("is age > 30 || age < 18? i predict false.");
console.log(age > 30 || age <18); //false (neither conditions met)


console.log("is 3 in numbers? i predict true.");
console.log(3 in numbers); //true (checks for index existence)


console.log("is 5 not in number? i predict true.");
console.log(5 not in numbers); //true (negation of "in" operator)























