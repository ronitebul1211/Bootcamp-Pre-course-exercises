

const readlineSync = require('readline-sync');

let selectedNumber = getNumber();
let selectedNumberName = getNumberName(selectedNumber);
console.log(selectedNumberName);

/* 
This function ask from the user to enter number between 0-9 and return it as a string
If the user enter a number out of range, they will be prompted to enter a number again 
*/
function getNumber(){
    "use strict";
   
    let num = readlineSync.question("Write a number between 0-9 and press Enter ", {
        limit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        limitMessage: "Please enter a number between 0-9"
    });
    return num;
}

/* 
This function get number and return number name to numbers between 0-9 
*/
function getNumberName(number){
    "use strict";
    let numbersNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numbersNames[number];
}


