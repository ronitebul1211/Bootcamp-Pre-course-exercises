/**
 * Write a function that takes two String arrays as parameters and returns an 
 * array that is the joining of those two arrays. Example: for the arrays: arr1= [“Hello”] 
 * and arr2= [“AppleSeeds”, “Bootcamp”] we’ll get [“Hello”,“AppleSeeds”, “Bootcamp”]
 */
"use strict";

let arr1 = ["Hello"];
let arr2 = ["AppleSeeds", "Bootcamp"];

let mergedArreys = mergeStringArrays(arr1, arr2);
console.log(mergedArreys);

/**
 * This function merges two string Arrays into one array, each element containing a separate word
 * @param {string[]} arr1 - string array
 * @param {string[]} arr2 - string array
 * @return {string[]} - merged string array
 */
function mergeStringArrays(arr1, arr2){
    return arr1.concat(arr2);
}