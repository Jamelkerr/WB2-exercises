"use strict";

//what I know
let studentName = "Matt";
let studentMajor = "MKT";



//what I need to compute
let majorName;
let departmentOffice;


if( studentMajor == "BIOL"){
    majorName = "Biology";
    departmentOffice = "Science Building, Room 310";
}
else if( studentMajor == "CSCI"){
    majorName = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
}
else if( studentMajor == "ENG"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}
else if( studentMajor == "HIST"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}
else if( studentMajor == "MKT"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}

//display the results.

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + departmentOffice);