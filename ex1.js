// pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
const input = require('readline-sync');

// Display Question to the user and store respond data in the variable name.
let name = input.question("What is your name ? ");

// print to the console: Hello + user name!
console.log("Hello " + name + "!");