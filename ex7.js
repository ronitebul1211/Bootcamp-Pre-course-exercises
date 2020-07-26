"use strict";

const readlineSync = require('readline-sync');

let userNum = getPositiveNumber();
let factorialNum = calculateFactorial(userNum);
console.log("The factorial number of " + userNum + " is " + factorialNum);

/* 
This function ask from the user to enter a positive number 
if the user enter negative number or 0 it will ask again until positive number get entered 
*/
function getPositiveNumber(){
    let userNum = getNumber();
    while (userNum <= 0){
        userNum = getNumber();
    }
    return userNum;
}

/* 
This function ask from the user to enter a positive number and return it
*/
function getNumber(){
    let userNum = readlineSync.questionInt("please choose positive number -> larger than 0: ");
    return userNum; 
}

/*
This function get a number and return the factorial of this number
*/
function calculateFactorial(num){
    let factNum = 1;
    for (let multiplier = 2; multiplier <= num; multiplier++){
        factNum = factNum * multiplier
    }
    return factNum;
}


