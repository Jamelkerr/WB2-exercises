"use strict";

//what do we start with?
let currentHour = -1;



//what do we need to compute
let greeting;



if (currentHour < 0){
    greeting = "ERROR INVALID HOUR OF " + currentHour;
}
else if( currentHour < 10 ){
    greeting = "Good morning!";
}
else if( currentHour < 17 ){
    greeting = "Good day!";
}
else if(  currentHour <= 23 ){
    greeting = "Good evening!";
}
else{
    greeting = "ERROR INVALID HOUR OF " + currentHour;
}




//display the result

console.log(greeting);