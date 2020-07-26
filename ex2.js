
const readlineSync = require('readline-sync');

isEqualToTen();

//This function check if the sum of 2 numbers is 10 and print the result to the console
function isEqualToTen(){
  "use strict";
    let firstNum = getNumFromUser();
    let secondNum = getNumFromUser();
    // If the sum of 2 numbers is 10 print "makes 10", otherwise print "nope"
    if (firstNum + secondNum === 10) {
        console.log("makes 10");
      } 
      else {
        console.log("nope");
      }
}

//This function ask from the user to write a number and return it.
function getNumFromUser(){
    "use strict";
    let num = readlineSync.questionInt("Write a number and press Enter ");
    return num;
}