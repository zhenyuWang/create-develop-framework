import projectList from "../../config/projectList.js"
import { execa } from "execa"
import chalk from "chalk"

export default async (config) => {
  const repositoryUrl = projectList[config.repositoryName]
  const packageManager = "(npm | yarn | pnpm)"

  await execa("git", ["clone", repositoryUrl], {
    cwd: `./`,
    stdio: [2, 2, 2],
  })

  console.log(
    `🎉  Successfully cloned project ${chalk.yellow(config.repositoryName)}.`
  )
  console.log(
    `👉  Get started with the following commands:\n\n` +
      chalk.cyan(` ${chalk.gray("$")} cd ${config.repositoryName}\n`) +
      chalk.cyan(` ${chalk.gray("$")} ${packageManager} install\n`) +
      chalk.cyan(` ${chalk.gray("$")} ${packageManager} run dev`)
  )
}
