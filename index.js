#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Guess a number between 1-10",
    }
]);
if (answer.userGuessnumber === randomNumber) {
    console.log("Congratulations! your guess is right.");
}
else {
    console.log("You guess is wrong");
}
