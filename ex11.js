"use strict";

const readlineSync = require('readline-sync');

let userStr = getUserInput();
// Print to tha console if string is palindrome or not
if(isPalindrome(userStr)){
    console.log("\"" + userStr + "\" it’s a palindrome");
} else {
    console.log("\"" + userStr + "\" it’s Not a palindrome");
}


/*
This function ask from the user to enter a string and return it
*/
function getUserInput(){
    return readlineSync.question("Enter a string: ");
}

/*
This function get string and check if it's Palindrome and return boolean.
Palindrome is sequence of characters which reads the same backward as forward
*/
function isPalindrome(baseStr){
    let reverseStr = reverseString(baseStr)
 
    for (let i = 0; i <= baseStr.length - 1; i++){
        if(baseStr[i] !== reverseStr[i]){
            return false;
        }
    }
    return true;
}

/*
This function get a string and return reverrsed string e.g: "bootcamp" -> "pmactoob"
*/
function reverseString(baseString) { 
    let reverseStr = "";
    for (let i = baseString.length - 1; i >= 0; i--) { 
        reverseStr += baseString[i];
    }
    return reverseStr; 
}