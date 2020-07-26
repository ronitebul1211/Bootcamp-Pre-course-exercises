"use strict";

const readlineSync = require('readline-sync');

let userNum = readlineSync.questionInt("Please enter a number that will represent array size: ");

//Create an array of the size the user chooses and assign each element a number between 1-50
let userNum = readlineSync.questionInt("Please enter a number that will represent array size: ");
let numsArray = getNumArray(userNum);
//Print min and max number in the array
console.log("Min number is -> " + Math.min(...numsArray));
console.log("Max number is -> " + Math.max(...numsArray));



/**
 * This function create an array and assign random number (1-50) to each element
 * @param {number} elementsNum - array size
 * @return {number[]} numArray - array of numbers
 */
function getNumArray(elementsNum){

    let numArray = [];

    for (let i = 0; i < elementsNum; i++){
        numArray[i] = getRandomNum();
    }
    return numArray;

}

/** 
 * This function find random number between 1-50 inclusive 
 * @return {number} num - random number
 */
function getRandomNum(){
    let num = Math.floor(Math.random() * 50) + 1;
    return num;
}