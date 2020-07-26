"use strict";

const readlineSync = require('readline-sync');

// Get String from the user
let userString = readlineSync.question("Enter a string: ");
//  \s matches any whitespace character And the g flag tells JavaScript to replace it multiple times.
let newStrintg = userString.replace(/\s/g, "*");
console.log(newStrintg);
