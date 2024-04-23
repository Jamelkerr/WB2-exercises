"use strict";

// Declare known values.


// Establish what needs to be calculated
var howManyBoxesToBuy;

// Do the calculations

howManyBoxesToBuy = Math.ceil(13 * 10 / 12);

// Display the results.
var message = "For a " + 13 + "x" + 10 
+ " room (" + 13 * 10 + "sqft) you need to purchase " + howManyBoxesToBuy + " boxes.";

console.log(message);