"use strict";

//Create array of numbers, size 5 elements, print each element in separate line
let numArray = createNumArray(5);
printElementsInSeparateLines(numArray)


/** 
 * This function print each array element in separate line 
 * @param {Array} array - array for print
 */
function printElementsInSeparateLines(array){
    array.forEach(element => console.log(element));
}


/**
 * This function create an array and assign random number (1-100) to each element
 * @param {number} elementsNum - array size
 * @return {number[]} numArray - array of numbers
 */
function createNumArray(elementsNum){

    let numArray = [];

    for (let i = 0; i < elementsNum; i++){
        numArray[i] = getRandomNumr();
    }
    return numArray;

}

/** 
 * This function find random card value 
 * @return {number} - random number between 1 and 100 inclusive
 */
function getRandomNumr(){
    let num = Math.floor(Math.random() * 100) + 1;
    return num;
}