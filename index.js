//Imports
const fx = require("fs");
const util = require("util");
const inquirer = require("inquirer");


// array of questions for user
const questions = [
    {type: "input", message: "What is the title of your project?", name: "title"},
    {type: "input", message: "Write a brief description of your project", name: "desc"},
    {type: "input", message: "Write down installation instructions if any.", name: "install"},
    {type: "input", message: "Write a description of how to use this app.", name: "usage"},
    {type: "input", message: "Please list the projects contributers.", name: "contribute"},
    {type: "input", message: "Please include any testing if applicable.", name: "tests"},
    {type: "list", message: "Please select a licence", choices: ["this", "that", "the other"], name:"licence"},
    {type: "input", message: "Enter your Github user Name.", name: "username"},
    {type: "input", message: "Enter your Email address.", name: "email"}

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program  //main function
function init() {
    inquirer.prompt(questions)
    .then((res) =>{
        console.log(res);
    })

}

// function call to initialize program
init();
