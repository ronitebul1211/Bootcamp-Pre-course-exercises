"use strict";

const readlineSync = require('readline-sync');
const chalk = require('chalk');
// Array of question
let questions = [
    {
        questionStr:"How often do you share your feelings with friends or relatives?",
        answers:[
            {answer:"About once a day.", answerValue:6},
            {answer:"Once or twice a week", answerValue:4},
            {answer:"Once or twice a month.", answerValue:2},
            {answer:"Never", answerValue:0}
        ]
    },
    {
        questionStr:"How often do you do kind things for others?",
        answers:[
            {answer:"About once a day.", answerValue:6},
            {answer:"Once or twice a week", answerValue:4},
            {answer:"Once or twice a month.", answerValue:2},
            {answer:"Never", answerValue:0}
        ]
    },
    {
        questionStr:"How much time do you spend on social media per day?",
        answers:[
            {answer:"6 to 8 hours", answerValue:0},
            {answer:"4 to 6 hours", answerValue:2},
            {answer:"2 to 4 hours", answerValue:4},
            {answer:"Less than 2 hours", answerValue:6}
        ]
    },
    {
        questionStr:"How often do you do (at least 20 minutes) of physical exercise?",
        answers:[
            {answer:"About once a day.", answerValue:6},
            {answer:"Once or twice a week", answerValue:4},
            {answer:"Once or twice a month.", answerValue:2},
            {answer:"Never", answerValue:0}
        ]
    },
    {
        questionStr:"I find a deep sense of fulfilment in my life by using my strengths and skills towards a purpose greater than myself.",
        answers:[
            {answer:"Never", answerValue:0},
            {answer:"Rarely", answerValue:2},
            {answer:"Sometimes", answerValue:4},
            {answer:"Almost always", answerValue:6}
        ]
    },
    {
        questionStr:"I know what my strengths and virtues are and I use them creatively to improve the quality of my life \n(for example: I am patient and organized and I enjoy using these traits in my job as an elementary school teacher)",
        answers:[
            {answer:"I don't know what my strengths & virtues are.", answerValue:0},
            {answer:"I know what they are, but I don’t use them.", answerValue:2},
            {answer:"I know what they are and I sometimes use them.", answerValue:4},
            {answer:"I know what they are and use them very often.", answerValue:6}
        ]
    },
    {
        questionStr:"I engage in activities (sports, writing, etc) that I find challenging and absorbing.",
        answers:[
            {answer:"Every Day.", answerValue:6},
            {answer:"Once or twice a week", answerValue:4},
            {answer:"Once or twice a month.", answerValue:2},
            {answer:"Never", answerValue:0}
        ]
    },
    {
        questionStr:"I have feelings of gratitude towards people and events from my past.",
        answers:[
            {answer:"I feel this way most of the time.", answerValue:6},
            {answer:"I sometimes feel this way.", answerValue:4},
            {answer:"I rarely feel this way.", answerValue:2},
            {answer:"I never feel this way.", answerValue:0}
        ]
    },
    {
        questionStr:"I am able to focus on the present moment and do not get distracted by thoughts of the past or future.",
        answers:[
            {answer:"I feel this way most of the time.", answerValue:6},
            {answer:"I sometimes feel this way.", answerValue:4},
            {answer:"I rarely feel this way.", answerValue:2},
            {answer:"I never feel this way.", answerValue:0}
        ]
    }, 
    {
        questionStr:"I am optimistic about the future",
        answers:[
            {answer:"I feel this way most of the time.", answerValue:6},
            {answer:"I sometimes feel this way.", answerValue:4},
            {answer:"I rarely feel this way.", answerValue:2},
            {answer:"I never feel this way.", answerValue:0}
        ]
    },
    {
        questionStr:"I participate in a spiritual community or group.",
        answers:[
            {answer:"More than once a week", answerValue:6},
            {answer:"About once or twice a month", answerValue:4},
            {answer:"About once or twice a year", answerValue:2},
            {answer:"Never", answerValue:0}
        ]
    },
    {
        questionStr:"I feel that my life is meaningful (i.e. has an important quality or purpose).",
        answers:[
            {answer:"I feel this way most of the time.", answerValue:6},
            {answer:"I sometimes feel this way.", answerValue:4},
            {answer:"I rarely feel this way.", answerValue:2},
            {answer:"I never feel this way.", answerValue:0}
        ]
    }
]
// Score counter
let userScore = 0;

printWelcomeMessage();
// Print all questions and save the points accumulated by the user in userScore var
for(let x = 0; x <= questions.length-1; x++){
    userScore += printQuestion(questions[x], x+1);
}
printUserResult(userScore);
        



/*
This function prints the welcome message to the quiz 
*/
function printWelcomeMessage(){
    printLineBreak();
    printLineBreak();
    printStyle("\t\t\t\t---Welcome to The Happiness Skills Quiz---", chalk.yellow, true);
    printStyle("\nThe Happiness Skills Quiz measures your “happiness skills” or habits.\nBased on your answers, you receive a brief report with guidance on how to improve your score.",
    chalk.whiteBright,
    false);
}

/*
This function print question, 4 possible answers and return answer value
*/
function printQuestion(question, questionNumber){
    
    // Print question number headline
    printLineBreak();
    printStyle("Question Number " + questionNumber + ":", chalk.yellow, true);
    // possibleAnswers array
    let possibleAnswers = [
        question.answers[0].answer, 
        question.answers[1].answer, 
        question.answers[2].answer, 
        question.answers[3].answer
    ];
    
    let answerIndex = readlineSync.keyInSelect(
        possibleAnswers, 
        printStyle(question.questionStr, chalk.yellow, true),
        {cancel: false}
        );

   return question.answers[answerIndex].answerValue;;
}

/*
This function print text result to the user base on his score
*/
function printUserResult(userScore){

    let resultStr = "";
    printLineBreak();
    printLineBreak();

    if ( userScore >= 0 && userScore <= 15){
        resultStr = 
        "\t\t\t\t\tYOUR RESULTS: \n\nYou are practicing very few life skills that contribute to greater happiness. \nThe good news is that, by learning new skills, you can achieve significant results with a little effort. ";
    } else if (userScore > 15 && userScore <= 24){
        resultStr = 
        "\t\t\t\t\tYOUR RESULTS: \n\nYou are practicing few life skills that contribute to your happiness. \nThe great news is that, by learning new skills, you can significantly increase your level of happiness.";
    } else if (userScore > 24 && userScore <= 48){
        resultStr = 
        "\t\t\t\t\tYOUR RESULTS: \n\nYou are practicing many life skills that contribute to your happiness. \nThe great news is that, by learning new skills (and a little work can go a long way), you can make yourself even happier.";
    } else {
        resultStr = "\t\t\t\t\tYOUR RESULTS: \n\nYou are a happiness expert You don’t need much guidance about life skills that contribute to happiness";
    }
    printStyle(resultStr, chalk.yellow, true);
}

/*
This function print purple line break
*/
function printLineBreak(){
    printStyle("* - * - * - * - * - * - * - * - * - * - * - * -* - * - * - * - * - * - *- * - * - * - * - * - * - * - * - * - *", 
    chalk.magentaBright, 
    true);
}

/*
This function get string, color (chalk.colorName), and boolean to determine bold style
and print the string in the selected color & bold style
*/
function printStyle(str, selectedColor, isBold){
    if (isBold){
        console.log(selectedColor.bold(str));
    } else {
        console.log(selectedColor(str));
    }
}

