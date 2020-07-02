//Imports
const fx = require("fs");
const util = require("util");
const inquirer = require("infquirer");


// array of questions for user
const questions = [

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
