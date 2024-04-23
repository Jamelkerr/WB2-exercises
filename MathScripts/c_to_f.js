"use strict";

// Declare known values.
var celsius = 26.66;

// Establish what needs to be calculated
var fahrenheit;

// Do the calculations
//celsius = (fahrenheit - 32) * ( 5 / 9);
fahrenheit = (celsius * (9/5) + 32);

// Display the results.
var message = celsius + "C is " + fahrenheit + "F";

console.log(message);