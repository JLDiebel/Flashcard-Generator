var inquirer = require("inquirer");
var Qpull = require("./questions.js");
var count = 0;
var score = 0;

var askQuestion = function() {

     if (count < 10) {
        inquirer.prompt([{
                type: "input",
                message: Qpull[count].front,
                name: "question"
            }

        ]).then(function(answers) {
          
           
            if (answers.question === Qpull[count].back) {
                console.log("You're correct! Great job!")
                score++;
                console.log("score: " + score);
            } else {
                console.log("Negatory, Ghostrider.")
            };
           
            count++;

            askQuestion();
        });

    } 
    
};
askQuestion();
    
