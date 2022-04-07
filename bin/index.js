#!/usr/bin/env node
import { Command } from "commander/esm.mjs"
import minimist from "minimist"
import chalk from "chalk"
import getInputConfig from "../questions/index.js"
import createProject from "../lib/createProject/index.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(import.meta.url)
const program = new Command()

program
  .command("create")
  .description(
    "create a new front-end development framework by create-front-end-develop-framework"
  )
  .action(async () => {
    if (minimist(process.argv.slice(3))._.length > 0) {
      console.log(
        chalk.yellow("\n Info: You provided some argument. They are ignored.")
      )
    }

    const config = await getInputConfig()

    createProject(config)
  })

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../package.json"))
)

program
  .version("create-front-end-develop-framework ".concat(packageJson.version))
  .usage("<command> [options]")

program.parse()
