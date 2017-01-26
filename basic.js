var inquirer = require("inquirer");
var question = require('./questions.json');
var fs = require("./questions.js");
var count = 0;
var score = 0;
var questionArray = [];

​
var askQuestion = function() {
 
  if (count < 5) {
    inquirer.prompt([
      {
        type: "input",
        message: fs.questions[0].front,
        name: "que"
      }

    ]).then(function(answers) {

      if (answers = question[0].back){
        console.log("You're correct! Radical!")
        score++;
      }else {
        console.log("Negatory, Ghostrider.")
      };
      count++;
      askQuestion();
    });
  
  }
  else {
    for (var x = 0; x < 5; x++) {
      questionArray[x].printInfo();
    }
  }
};
askQuestion(); 