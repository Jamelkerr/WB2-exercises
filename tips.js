"use strict"; 

//sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;



//calculcations
var totalDue = foodCost + tax + tip;

//output

console.log(
    "Food cost is " + foodCost + " and tax is " + tax
);
console.log("Tip is " + tip);
console.log("Total Due is " + totalDue);


//version with string interpolation
// let result = `Food cost is ${foodCost.toFixed(2)} and tax is ${tax.toFixed(2)}\nTip is $${tip.toFixed(2)}\nTotal Due is $${totalDue.toFixed(2)}
// console.log(result)