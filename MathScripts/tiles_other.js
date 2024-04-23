"use strict";

// Declare known values.
var roomLength = 13;
var roomWidth = 10;
var tilesPerBox = 12;

// Establish what needs to be calculated
var howManyBoxesToBuy;

// Do the calculations

howManyBoxesToBuy = Math.ceil(roomLength * roomWidth / tilesPerBox);

// Display the results.
var message = "For a " + roomLength + "x" + roomWidth 
+ " room (" + roomLength * roomWidth + "sqft) you need to purchase " + howManyBoxesToBuy + " boxes.";

console.log(message);