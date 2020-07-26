"use strict";

const readlineSync = require('readline-sync');

// collect user information about his resturant preferences
getTotalDiners(); // Not saved in variable Since it is not used
let foodTypeChoice  = getFoodType();
let kashrutLevelChoice = getKashrutLevel();

// Find a restaurant according to the user's choices and recommend it
let resturantName = findResturant(foodTypeChoice, kashrutLevelChoice);
console.log("Recommended Restaurant: " + resturantName);


/* 
This function ask the user to enter number of diners that he go with to a resturant
and add 1 to get the amount of total diners
*/
function getTotalDiners(){
    let invitedDiners = readlineSync.questionInt("How many people are you going with? ", {
        limitMessage: "Please enter a number"
    });
        let totalDiners = invitedDiners++;
    return totalDiners;
}

/* 
This function ask the user to choose the kosher level He expects in the resturant
and return kosher level as a string - Possible values: Not Kosher / Kosher / Kosher Lemehadrin
*/
function getKashrutLevel(){
    let isKosher = readlineSync.keyInYNStrict("Should it be Kosher? ");
    if(isKosher){
        let isKosherLemehadrin = readlineSync.keyInYNStrict("Should it be Kosher Lemehadrin? ");
        if (isKosherLemehadrin){
            return "Kosher Lemehadrin"
        } else{
            return "Kosher"
        }
    } else {
        return "Not Kosher"
    }
}

/* 
This function ask the user to choose what type of food he would like to eat in the restaurant 
and return food type as a string - Possible values: Italian / Chinese / Steakhouse
*/
function getFoodType(){
    let foodType = ['Italian', 'Chinese', 'Steakhouse'];
    let foodTypeIndex = readlineSync.keyInSelect(foodType, "What kind of food do you want? ",{
        cancel: false
    });
   return foodType[foodTypeIndex];
}

/*
get as an argument food type
This function finds a matching restaurant Based on food type (arg1), kashrut level (arg2)
and return resturant name as a string
*/
function findResturant(foodTypeChoice, kashrutLevelChoice){
    let resturants = [
        {name:"Sorento", foodType:"Italian", kosherLevel:"Kosher"},
        {name:"Pantolino", foodType:"Italian", kosherLevel:"Kosher Lemehadrin"},
        {name:"Silo", foodType:"Italian", kosherLevel:"Not Kosher"},
        {name:"River", foodType:"Chinese", kosherLevel:"Kosher"},
        {name:"Oshi Oshi", foodType:"Chinese", kosherLevel:"Kosher Lemehadrin"},
        {name:"China Court", foodType:"Chinese", kosherLevel:"Not Kosher"},
        {name:"Leham Basar", foodType:"Steakhouse", kosherLevel:"Kosher"},
        {name:"Eve", foodType:"Steakhouse", kosherLevel:"Kosher Lemehadrin"},
        {name:"Porter and Sons", foodType:"Steakhouse", kosherLevel:"Not Kosher"}
    ];

    for (let x = 0; x < resturants.length; x++){
        if (foodTypeChoice === resturants[x].foodType && kashrutLevelChoice === resturants[x].kosherLevel){
            return resturants[x].name;
        }
    }
}






