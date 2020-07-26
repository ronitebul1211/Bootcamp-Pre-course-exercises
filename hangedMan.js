
"use strict";

const readlineSync = require('readline-sync');
const figlet = require('figlet');


const words = ["wonderful", "banana", "encyclopedia", "bootcamp"];
let selectedWord, wordForDisplay,  exposedLetters = "";

//Intial Game
printWelcomeMessage();
selectedWord = getRandomWord();
wordForDisplay =  getWordWithExposedLetters("");

for (let guessNum = 10; 0 < guessNum; guessNum--){
    
    let rightGuess = true;
    while(rightGuess){
        //Print message with guess number and the current state of selected word
        console.log(`You have ${guessNum} guesses \nThe word is: \n${wordForDisplay}`);
        let userGuess = getUserGuess();
        //User guess right
        if (selectedWord.includes(userGuess)){
            exposedLetters = exposedLetters.concat(userGuess);
            wordForDisplay = getWordWithExposedLetters(exposedLetters);
            //When user guessed all the letters -> print win message & exit game
            if(!wordForDisplay.includes("*")){
                console.log(`Wow you are good, The word is ${selectedWord}`);
                return;
            }
        }
        //User guess wrong
        else {
            rightGuess = false;
        }
        //Print line break after guesss
        console.log("- - - - - - - - - - - \n")
    }
}


/** Print to te console welcome message */
function printWelcomeMessage(){
    console.log(figlet.textSync('Hang Man!', {
        font: 'Standard'
        })
    );    
}

/**
 * This function return random word from words array
 * @return {string} - word
 */
function getRandomWord(){
    let randomIndex = Math.floor(Math.random() * words.length);    
    return words[randomIndex];
}

/** 
 * This function ask the user to guess and accept as an input one letter
 * in case of any other input "Invalid Input" message will be print to the user
 * @return {string} - one lower case letter
 */
function getUserGuess(){
    let letterInput = readlineSync.keyIn("What is your guess? ", {
        limit: '$<A-Z>$<a-z>',
        limitMessage: "Invalid Input",
    });
    return letterInput.toLowerCase();
}

/** 
 * This function exposed the lettes the user guess and hide all the rest in the selected word
 * @param {string} letters - contain letters to expose
 * @return {string} - selected word 
  */
 function getWordWithExposedLetters(letters){
    let searchPattern = new RegExp('[^' + letters + ']', 'g');
    return selectedWord.replace(searchPattern, "*");
}

