"use strict";

const readlineSync = require('readline-sync');
const chalk = require('chalk');



let isPlaying, playMode;
let player1 = {name: "", money: 50, bet: 0, card: 0};
let player2 = {name: "", money: 50, bet: 0, card: 0};
let computerCard;

//Start a new game and select play mode
isPlaying = true;
console.log("//////////-----------Welcome To WAR-----------\\\\\\\\\\\\\\\\\\\\");
playMode = selectGameMode();

switch (playMode){ 
  
  case "ONE_PLAYER_MODE":
    
    //Get player name and print initial status message
    player1.name = getPlayerName();
    printStatusMessage("START", player1);
    //Start new round
    while(isPlaying){
      //When player bet is valid -> hands out cards
      if (getPlayerBet(player1) > 0) {         
        handOutCards(playMode);
        //When player won the round add bet to his money
        if(player1.card > computerCard){          
          player1.money += player1.bet;
          printStatusMessage("WINNER", player1);
        } 
        //When player lost the round subtract from his money
        else {                            
          player1.money -= player1.bet;
          printStatusMessage("LOSER", player1);
          //When player don't have enough money for another round exit game
          if (player1.money === 0){
            exitGame("NO_MONEY", player1);        
            return;
          }
        }
        //Continue for another round or exit the game if the player chooses to retire
        if(!askForAnotherRound()){
          exitGame("RETIRE", player1);
        } 
      } 
      //When player bet is invalid -> exit game
      else {                                
        exitGame("INVALID_BET", player1);
      }
    }
    break;
    
    case "TWOֹֹֹֹֹ_PLֹAYER_MODE":
      
      //Get players name and print initial status message for each one of them
      player1.name = getPlayerName();
      printStatusMessage("START", player1);
      player2.name = getPlayerName();
      printStatusMessage("START", player2);
      //Start new round
      while(isPlaying){
        let roundBet;
        //When player1 have more / equal amount of money than player2, 
        //The value of the bet will be smaller than the total money of player2
        if (player1.money >= player2.money) {
          roundBet = getPlayerBet(player2);
          player1.bet = roundBet;
          //When bet is invalid -> exit game
          if(roundBet === 0){
            exitGame("INVALID_BET", player2);
            return;
          }
        }
        //When player2 have more money than player1, 
        //The value of the bet will be smaller than the total money of player1
        else {
          roundBet = getPlayerBet(player1);
          player2.bet = roundBet;
          //When bet is invalid -> exit game
          if(roundBet === 0){
            exitGame("INVALID_BET", player1);
            return;
          }
      }
      //When bet is valid -> hands out cards
      handOutCards(playMode);
      //Player 1 Won -> add bet to player1 money and subtract bet from player2 money
      if(player1.card > player2.card){
        player1.money += roundBet;
        player2.money -= roundBet;
        printStatusMessage("WINNER", player1);
        printStatusMessage("LOSER", player2);
      }
      //Player 2 Won -> add bet to player2 money and subtract bet from player2 money
      else {
        player1.money -= roundBet;
        player2.money += roundBet;
        printStatusMessage("WINNER", player2);
        printStatusMessage("LOSER", player1);
      }
      //When one of the players runs out of money -> exit game
      if(player1.money === 0 || player2.money === 0 ){
        if(player1.money === 0){
          exitGame("NO_MONEY", player1);
        }
        else {
          exitGame("NO_MONEY", player2);
        }
        exitGame("EXIT");
        return;
      }
      //Continue for another round or exit the game if the players chooses to retire
      if(!askForAnotherRound()){
        exitGame("RETIRE", player1);
        exitGame("RETIRE", player2);
      } 
    }
    break; 
    
    case "CANCEL_MODE":
      exitGame("EXIT");
      break;
}


/** 
 * This Function ask from the user to select game mode
 * @return {string} game mode: ONE_PLAYER_MODE / TWOֹֹֹֹֹ_PLֹAYER_MODE / CANCEL_MODE  
 */
function selectGameMode(){

  let option = [
    "Game against the computer", 
    "Game against another player"
  ];
  
  let optionIndex = readlineSync.keyInSelect(option, "Hello, Please select a game mode");

  if (optionIndex === 0){
    return "ONE_PLAYER_MODE"
  } else if (optionIndex === 1){
    return "TWOֹֹֹֹֹ_PLֹAYER_MODE"
  } else {
    return "CANCEL_MODE"
  }
}

/** 
 * This function ask from the player to enter his name 
 * @return {string} player name 
 */
function getPlayerName(){
  let playerName = readlineSync.question("Please enter your name: ");
  return playerName;
}

/**
 * This function asks the player to place a bet
 * @param {object} player - player object
 * @return {number} - player bet or 0 for invalid bet
 */
function getPlayerBet(player){
  
  player.bet = readlineSync.questionInt("Place your bet for the next round: 1$ to " + player.money + "$ -> ");

  if (player.bet >= 1 && player.bet <= player.money){
    return player.bet;
  } else {
    return 0;
  } 
}

/**
 * This function prints a status message to the player based on his status in the game
 * @param {string} status - START / WINNER / LOSER 
 * @param {object} player - player object
 */
function printStatusMessage (status, player){

  let statusMessage;

  switch(status){
    case "START":
      statusMessage = "Hello " + player.name + ", you currently have " + player.money + "$";
      break;
    case "LOSER":
      statusMessage = player.name + ", you lost " + player.bet + "$ And now you have " + player.money + "$";
      break;
    case "WINNER":
      statusMessage = player.name + ", you won " + player.bet + "$ And now you have " + player.money + "$"
  }
  console.log(statusMessage);
}

/** 
 * This function asks the player if he wants to continue for another play round
 * @return {boolean} - true = play / false = stop play
 */
function askForAnotherRound(){
    let option = [
        "Play another round", 
        "leave with my money :-)"
    ];
    let optionIndex = readlineSync.keyInSelect(option, "What would you like to do? ", {cancel: false});

    if (optionIndex === 0){
        return true;
    } else {
        return false;
    }
}

/**
 * This function exit the game and prints a corresponding message to the player
 * @param {string} exitMode - EXIT / INVALID_BET / NO_MONEY / RETIRE
 * @param {object} player - player object
 */
function exitGame(exitMode, player){
    
    let exitMessage;
    
    switch(exitMode){
      case "EXIT":
        exitMessage = "Game Over!";
        break;
      case "INVALID_BET":
        exitMessage = "I said between 1$ to " + player.money + "$ and you typed " + 
                        player.bet + "$!!! \nI don't play with liars!!! Bye";
        break;
      case "NO_MONEY":
        exitMessage = player.name + ", you are broke... Bye Bye";
        break;
      case "RETIRE":
        exitMessage = player.name + ", the game is over, you won " + player.money + "$";
        break;          
    }

   console.log(exitMessage);
   isPlaying = false;
}

/**
 * This function assigns different cards to players based on the game mode and print message to the console
 * @param {string} playMode - represent play mode: ONE_PLAYER_MODE / TWOֹֹֹֹֹ_PLֹAYER_MODE
 */
function handOutCards(playMode){
  
  let card1 = getRandomCardValue();
  let card2 = getRandomCardValue();
  let cardsMessage;

  while (card1 === card2){
    card1 = getRandomCardValue();
    card2 = getRandomCardValue();4
  }

  if (playMode === "ONE_PLAYER_MODE"){
    player1.card = card1;
    computerCard = card2;
    cardsMessage = player1.name + ", your card is " + player1.card + " " + getRandomCardSuit() + 
    " My card is " + computerCard + " " + getRandomCardSuit();
  }
  if (playMode === "TWOֹֹֹֹֹ_PLֹAYER_MODE"){
    player1.card = card1;
    player2.card = card2;
    cardsMessage = player1.name + ", your card is " + player1.card + " " + getRandomCardSuit() + 
    " " + player2.name + ", your card is " + player2.card + " " + getRandomCardSuit();
   
  }
  console.log(cardsMessage);
}

/** 
 * This function find random card value 
 * @return {number} - Number between 1 and 12 inclusive
 */
function getRandomCardValue(){
    let randomCard = Math.floor(Math.random() * 12) + 1;
    return randomCard;
}

/** 
 * This function find random card suit 
 * @return {string} - unicode char represent: Spades / Diams / Clubs / Hearts
 */
function getRandomCardSuit(){
    let cardsSuits = [
      chalk.black.bgWhite("\u2660"),    //Spades
      chalk.red.bgWhite("\u2666"),      //Diams
      chalk.black.bgWhite("\u2663"),    //Clubs
      chalk.red.bgWhite("\u2665")       //Hearts 
    ];
    let randomIndex = Math.floor(Math.random() * 4);
    return cardsSuits[randomIndex];
  }
