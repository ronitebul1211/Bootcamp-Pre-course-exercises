"use strict";

const readlineSync = require('readline-sync');


let num = getNumber("please choose a number larger than 10: ");
while (num <= 10){
    num = getNumber("please choose a number LARGER than 10: ");
}
console.log("thank you"); 

/*
This function ask from the user to enter a number and return it.
ouestionForm - string with specific instruction to the user
*/
function getNumber(ouestionForm){
    let number = readlineSync.questionInt(ouestionForm);
    console.log("User answer : " + number);
    return number;
}