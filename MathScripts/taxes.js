"use strict";

// Declare known values.
var federalTaxRate = 0.23;
var monthlySalary = 1000;

// Establish what needs to be calculated
var amountWithheld;

// Do the calculations
amountWithheld = monthlySalary * federalTaxRate;
amountWithheld = Math.round(amountWithheld * 100) / 100;

// Display the results.
var message = "Amount Withheld: " + amountWithheld;

console.log(message);