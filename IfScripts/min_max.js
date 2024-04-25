"use strict";

let a = 23;
let b = 128;
let c = 540;

let lowestString;
let highestString;


//test for a
if ( a > b && a > c){
    highestString = "The value of " + a + " in the variable A is the biggest!";
}
//test for b
else if ( b > a && b > c){
    highestString = "The value of " + b + " in the variable B is the biggest!";
}
//test for c
else if ( c > a && c > b){
    highestString = "The value of " + c + " in the variable C is the biggest!";
}

//test for a
if ( a < b && a < c){
    lowestString = "The value of " + a + " in the variable A is the smallest!";
}
//test for b
else if ( b < a && b < c){
    lowestString = "The value of " + b + " in the variable B is the smallest!";
}
//test for c
else if ( c < a && c < b){
    lowestString = "The value of " + c + " in the variable C is the smallest!";
}

console.log(lowestString);
console.log(highestString);