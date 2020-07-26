"use strict";

const readlineSync = require('readline-sync');


let userStr = getUserInput();
let capitalizeVowelStr = capitalizeVowel(userStr);
console.log(capitalizeVowelStr);

/*
This function ask from the user to enter a string and return it
*/
function getUserInput(){
    return readlineSync.question("Enter a string: ");
}

/*
This function get a base string, capitalize all vowel in it and return new string
*/
function capitalizeVowel(baseStr){
    let capitalizeVowelStr = "";

    for (let i = 0; i <= baseStr.length-1; i++){   
        switch (baseStr[i]){
            case "a":
                capitalizeVowelStr += "A";
                break;
            case "e":
                capitalizeVowelStr += "E";
                break; 
            case "i":
                capitalizeVowelStr += "I";
                    break;
            case "o":
                capitalizeVowelStr += "O";
                break;
            case "u":
                capitalizeVowelStr += "U";
                break; 
            case "y":
                capitalizeVowelStr += "Y";
                break;
            default:
                capitalizeVowelStr += baseStr[i];    
                break;           
        }
    }  
    return capitalizeVowelStr;
}