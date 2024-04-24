
//known values
var payRate = 17.30;
var hoursWorked = 45;



//calculations
var grossPay;






grossPay = 0;


if (hoursWorked <= 40) //standard time 
{
    grossPay = payRate * hoursWorked;
}
else // overtime
{
    var overtimeHours = hoursWorked - 40 ;
    var overtimeRate = payRate * 1.5;
    var basePay = 40 * payRate;
    var overtimePay = overtimeHours * overtimeRate;

    grossPay = basePay + overtimePay;

   // grossPay = (40 * payRate) + ( (hoursWorked - 40) * payRate * 1.5 );


}



//display results
var message = "worked " + hoursWorked + " hours for " + grossPay;

console.log(message);