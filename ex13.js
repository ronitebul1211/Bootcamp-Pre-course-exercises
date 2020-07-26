"use strict";

const readlineSync = require('readline-sync');

let userString = getUserInput();
let longestWord = getLongestWord(userString);
console.log("\"" + longestWord + "\"");

/*
This function ask from the user to enter a string and return it
*/
function getUserInput(){
    return readlineSync.question("Enter a string: ");
}

/*
The function get a string, finds the longest word (consists of letters only) in it and returns it
*/
function getLongestWord(string){
    
    let wordsArray = string.split(" ");
    let longestWord;
    let longestWordLength = 0;

    for (let i = 0; i <= wordsArray.length-1; i++){

        if (isItContainOnlyLetters(wordsArray[i]) && wordsArray[i].length > longestWordLength){
            longestWord = wordsArray[i];
            longestWordLength = wordsArray[i].length;
        }
    }
    return longestWord;
}

/*
The function get a string, checks whether the string contains only letters and return boolean
*/
function isItContainOnlyLetters(string){
    if(/^[a-z]+$/i.test(string)){
        return true;
    } else {
        return false;
    }
}