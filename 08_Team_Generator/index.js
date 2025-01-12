const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./src/manager.js')
const Engineer = require('./src/engineer.js')
const Intern = require('./src/intern.js')

let teamArr = [];

//write inquirer prompts to user about each employee
const promptManager = () =>
    inquirer.prompt([
        {
            type:'input',
            name:'managerName',
            message:"What is the manager's name?"
        },
        {
            type:'input',
            name:'managerID',
            message:"What is the manager's id?"
        },
        {
            type:'input',
            name:'managerEmail',
            message:"What is the manager's email?"
        },
        {
            type:'input',
            name:'managerOfficeNumber',
            message:"What is the manager's office number?"
        },
        {
            type:'list',
            name:'memberType',
            message:"Which type of employee would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team']        
        }
    ])  
    .then(function(answer){
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber)
        teamArr.push(manager)
        switch(answer.memberType){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'Finish building my team':
                endPrompt()
        }
    })
    
const promptEngineer = () =>
    inquirer.prompt([
        {
            type:'input',
            name:'engineerName',
            message:"What is the engineer's name?"
        },
        {
            type:'input',
            name:'engineerID',
            message:"What is the engineer's id?"
        },
        {
            type:'input',
            name:'engineerEmail',
            message:"What is the engineer's email?"
        },
        {
            type:'input',
            name:'engineerPhone',
            message:"What is the engineer's phone number?"
        },
        {
            type:'list',
            name:'memberType',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team']            
        }
    ])
    .then(function(answer){
        const newEngineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerPhone)
        teamArr.push(newEngineer)
        switch(answer.memberType){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'Finish building my team':
                endPrompt()
        }
    })

const promptIntern = () =>
    inquirer.prompt([
        {
            type:'input',
            name:'internName',
            message:"What is the intern's name?"
        },
        {
            type:'input',
            name:'internID',
            message:"What is the intern's id?"
        },
        {
            type:'input',
            name:'internEmail',
            message:"What is the intern's email?"
        },
        {
            type:'input',
            name:'internPhone',
            message:"What is the intern's phone number?"
        },
        {
            type:'list',
            name:'memberType',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team']       
        }
])
.then(function(answer){
    const newIntern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internPhone)
    teamArr.push(newIntern)
    switch(answer.memberType){
        case 'Engineer':
            promptEngineer()
            break
        case 'Intern':
            promptIntern()
            break
        case 'Finish building my team':
            endPrompt()
    }
})

const endPrompt = function(){
    let team = function(){
            teamArr.forEach(function(teammate){
                return `<h2>${teammate.name}</h2>`;
            })
        }

    fs.writeFile('index.html', team(), (err) =>
        err ? console.log(err) : console.log('HTML Generated!')
    );
}

promptManager()

