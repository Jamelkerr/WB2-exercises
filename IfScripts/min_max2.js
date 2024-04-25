"use strict";

let a = 923;
let b = 128;
let c = 540;

let lowestNumber = a;
let highestNumber = a;

if(b < lowestNumber){
    lowestNumber = b;
}
if(c < lowestNumber){
    lowestNumber = c;
}

if(b > highestNumber){
    highestNumber = b;
}

if (c > highestNumber){
    highestNumber = c;
}


let lowestString = lowestNumber + " is the lowest number.";
let highestString = highestNumber + " is the highest number.";

console.log(lowestString);
console.log(highestString);