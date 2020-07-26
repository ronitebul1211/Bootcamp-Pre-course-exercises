"use strict";

const readlineSync = require('readline-sync');

let userNumber = readlineSync.questionInt("Enter a number and you will get all the prime numbers that exist up to that number: ");
primeNumbers(userNumber);

/*
This function get edge number and print all the prime number that exist between 1 - edge number 
*/
function primeNumbers(edgeNumber){
    for(let x = 2; x <= edgeNumber; x++){
        if (isPrime(x)){
            console.log(x);
        }
    }
}

/*
This function get a number and check if it's prime
if the number is prime return true, else false
*/
function isPrime(number){
    if(number === 2){
      return true;
    } 
    else {
        for (let divider = 2; divider < number; divider++){
          if (number % divider === 0){ 
             return false;
          } 
        } 
        return true;
    }  
  }



