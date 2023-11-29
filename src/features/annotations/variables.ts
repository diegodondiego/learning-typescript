let apples: number = 5;

apples = 10.1;

let spped: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colours: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true]

// Classes
class Car {

}
let car: Car

// Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function
// hard to read
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// when to use annotations
// 1) fx that returns the 'any' type
const json = '{ "x": 10, "y": 20 }'
const coordinates = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

