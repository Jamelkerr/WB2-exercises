"use strict";

var payrate = 10;
var hoursworked = 45;
var grosspayWeekly;
var grosspayAnnual;
var stat = "single";
var taxRatePercent;
var taxRatePercentRatePercent;
var weeklyTaxWithholdings;
var netpayWeekly;

grosspayWeekly = payrate * hoursworked


//todo: actually compute gross pay correctly.
grosspayWeekly = 475;


grosspayAnnual = grosspayWeekly * 52


if (stat == "single") {
    if (grosspayAnnual < 12000) { taxRatePercent = 0.05; }
    else if (grosspayAnnual < 25000) { taxRatePercent = 0.10; }
    else if (grosspayAnnual < 75000) { taxRatePercent = 0.15; }
    else /* 75,000 or over */ { taxRatePercent = 0.20; }
}
else if (stat == "joint") {

}
else {
    console.log("ERROR INVALID FILING STATUS");
}


// if (grosspayAnnual < 12000 && stat == "single"){
//     taxRatePercent = 0.05;
// }

// else if (grosspayAnnual >= 12000 && 12000<=24999 && stat == "single"){
//   taxRatePercent =  0.1;
// }
// else if (grosspayAnnual >= 25000 && 25000<=74999 && stat == "single"){
//   taxRatePercent = 0.15;
// }
// else if (grosspayAnnual >= 75000 && stat == "single"){
//   taxRatePercent =  0.2;
// }

// else if  (grosspayAnnual < 12000 && stat == "joint"){
//   taxRatePercent = 0;
// }
// else if (grosspayAnnual >= 12000 && 12000<=24999 && stat == "joint"){
//   taxRatePercent = 0.6;
// }
// else if (grosspayAnnual >= 25000 && 25000<=74999 && stat == "joint"){
//   taxRatePercent =  0.11;
// }
// else if (grosspayAnnual >= 75000 && stat == "joint"){
//   taxRatePercent = 0.2;
// }

weeklyTaxWithholdings = grosspayWeekly * taxRatePercent;
netpayWeekly = grosspayWeekly - weeklyTaxWithholdings;

console.log(grosspayAnnual);
console.log(taxRatePercent);

console.log(netpayWeekly);