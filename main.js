#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operators to  perform operation", type: "list", name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select valid operator");
}
