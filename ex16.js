
/** Write a program that takes a array of numbers as a parameter and returns an
array with the index of the minimum and maximum values inside the array. */

"use strict";

//Create array of numbers, size 100 elements
let numsArray = createNumArray(100);
console.log(numsArray);
//Get index number of min and max value
let indexOfMinAndMaxValue = getIndexOfMinAndMaxValue(numsArray);
console.log("Index of min & max value -> " + indexOfMinAndMaxValue);



/**
 * This function find in the array min and max value and return its index number
 * @param {number[]} numsArray - array of number
 * @return {number[]} - array of number represent the index number of min and max value
 */
function getIndexOfMinAndMaxValue(numsArray){
    let minMaxIndexArray = [];
    
    let minValue = getMinValue(numsArray);
    let maxValue = getMaxValue(numsArray);
    console.log("Min value -> " + minValue + " Max value -> " + maxValue);
    
    for (let i = 0; i <= numsArray.length -1; i++){
        if (numsArray[i] === minValue || numsArray[i] === maxValue){
            minMaxIndexArray.push(i);
        }
    }
    return minMaxIndexArray;
}

/**
 * This function find the minimum number value in the array
 * @param {number[]} numsArray - array of number
 * @return {number} - minimum number value in the array
 */
function getMinValue(numsArray){
    return Math.min(...numsArray);
}

/**
 * This function find the maximum number value in the array
 * @param {number[]} numsArray - array of number
 * @return {number} - maximum number value in the array
 */
function getMaxValue(numsArray){
    return Math.max(...numsArray);
}

/**
 * This function create an array and assign random number (1-50) to each element
 * @param {number} elementsNum - array size
 * @return {number[]} numArray - array of numbers
 */
function createNumArray(elementsNum){
    let numArray = [];
    for (let i = 0; i < elementsNum; i++){
        numArray[i] = getRandomNum();
    }
    return numArray;
}

/** 
 * This function find random card value 
 * @return {number} - random number between 1 and 50 inclusive
 */
function getRandomNum(){
    return Math.floor(Math.random() * 50) + 1;;
}