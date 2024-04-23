"use strict"


// some set bill amount
var billAmount = 231.9;
// some set tip percentage
var tipPercent = 25;

// to calculate tipAmount we take the billAmount times by the tip  ( divided by 100)

// creating a variable to store the tip amount
var tipAmount = billAmount * (tipPercent / 100);

// printing the amount
console.log("The tip on a " + billAmount + " food bill is " + tipAmount.toFixed(2));