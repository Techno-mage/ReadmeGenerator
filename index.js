//Imports
const mkdirp = require('mkdirp');
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");

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

    mkdirp("output"), (err) =>{
        if (err){
            return (err)
        }

    }

    fs.writeFile(fileName, generate(data), (err) => { if(err) {return console.log(err);}})
}

// function to initialize program  //main function
function init() {
    inquirer.prompt(questions)
    .then((res) =>{
        console.log(res);
        writeToFile("output/README.md", res);

    })
    .catch( (err) => {return console.log(err)})

}

// function call to initialize program
init();
