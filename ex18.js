/**
 * Write a function that takes an array of integers as a parameter, and reverses it
 * in place, without using an additional array. Example: for myArr= [1,2,3], after
 * the method runs the array will be [3,2,1]
 */
"use strict";

//Declare diffrent numbers arrays
let numsArray1 = [1,2,3,4,5];
let numsArray2 = [5,4,3,2,1];

//Print reversed arrays
console.log(
    "numsArray1 -> " + reverseNumArray(numsArray1) + "\n" +
    "numsArray2 -> " + reverseNumArray(numsArray2)
    );

/**
 * This finction get an array and reverse it
 * @param {number[]} numsArray - Array of numbers 
 * @return {number[]} reversed array of numbers 
 */
function reverseNumArray(numsArray){
   return numsArray.reverse();
}