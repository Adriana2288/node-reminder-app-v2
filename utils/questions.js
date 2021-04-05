const inquirer = require("inquirer")
const { addNotes, listNotes, removeNotes } = require("../utils/notes")

const topLevelQuestion = [
    {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: ["add", "remove", "list", "exit"]
    }
]

const addQuestions = [
    {
        type: "input",
        name: "add",
        message: "What would you like to add?"
    }
]

const removeQuestions = [
    {
        type: "input",
        name: "remove",
        message: "What would you like to remove? Please type the number of the item."
    }
]


const app = async () => {
    const answers =  await inquirer.prompt(topLevelQuestion)
    
    if (answers.options === "add"){
        const answer = await inquirer.prompt(addQuestions)
        addNotes(answer.add)
        app()
    } else if (answers.options === "remove") {
        listNotes()
        const answer = await inquirer.prompt(removeQuestions)
        removeNotes(answer.remove)
        app()
    } else if (answers.options === "list") {
        listNotes()
        app()
    } else if (answers.options === "exit") {
        console.log("Exiting the application")
    } 
}

module.exports = { app }