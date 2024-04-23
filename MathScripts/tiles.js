"use strict";

// Declare known values.
var roomLength = 13;
var roomWidth = 10;
var tilesPerBox = 12;

// Establish what needs to be calculated
var howManyBoxesToBuy;
var roomSquareFeet;


// Do the calculations
roomSquareFeet = roomLength * roomWidth;

howManyBoxesToBuy = roomSquareFeet / tilesPerBox;

howManyBoxesToBuy = Math.ceil(howManyBoxesToBuy);

// Display the results.
var message = "For a " + roomLength + "x" + roomWidth 
+ " room (" + roomSquareFeet + "sqft) you need to purchase " + howManyBoxesToBuy + " boxes.";

console.log(message);