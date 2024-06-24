import inquirer from "inquirer";
import chalk from "chalk";
const answers : {
    sentence : string
} = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : chalk.red.bold("Enter your sentence to count the word"),


},
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.green.bold('your sentence to count the words is  ${words.length}'));

