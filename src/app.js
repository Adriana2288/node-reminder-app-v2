const figlet = require("figlet")
const chalk = require("chalk")
const { app } = require("../utils/questions")

const welcomeGreeting = () => {
    console.log(chalk.redBright(figlet.textSync("Welcome")))
    app()
}

welcomeGreeting()
