const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./Utlis/generateMarkdown");


//User questions 

const questions = [

    {
        type:"input",
        name: "Username",
        message: "What is your name",
    },
    {
            type:"input",
            name: "Title",
            message: "What is the title of your project?",
        },
        
        {
            type:"input",
            name:"Description",
            message:"Please provide a description of your project",
        },
        
        {
            type:"input",
            name:"Usage",
            message:"How is this app used?",
        
        },
        
        {
            type:"input",
            name:"Installation",
            message: "What would you like to install?",
        },
        {
        type:"input",
        name:"Test",
        message:"Please state the kind of tests you have",
        },
        {
            type:"list",
            name:"License",
            message:"Please state your type of license",
            choices:["ISC","MIT","Apache"],
        
        },
        
        {
            type:"input",
            name:"Platform",
            message:"What is your github user username?"
           
    },

]

//generateMarkdown for README.md file




//To generate the README.md file
function writetoFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
inquirer.prompt(questions).then((answers) => {

console.log("Amazing! I am now loading a Readme.md file based on answers...");
writetoFile("./Readmefiles/README.md", generateMarkdown({...answers}));
});
}
init();
