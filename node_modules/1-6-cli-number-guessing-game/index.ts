#! usr/bin/env node

import inquirer from "inquirer";
//computer will generated a random number-
//user input for guessing number-
//compare user input with computer generated  number and show result-

const randomNumber = Math.floor(Math.random() * 6 + 1);


const Answer = await inquirer.prompt([
  {
    message: "please guess a number",
    type: "number",
    name: "userguessedNumber"
  },
]);

  if (Answer.userguessedNumber === randomNumber) {
    console.log("congratulation! you gueesed  write Number");
  }else {
    console.log("you guessed wrong Number");
  };
