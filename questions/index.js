import inquirer from "inquirer"
import repositoryName from "./repositoryName.js"

export default () => {
  return inquirer.prompt([repositoryName()])
}
