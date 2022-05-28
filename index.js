#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");
const alert = require("sharif-cli-alerts");

//* Alerts
const symbol = require("log-symbols");
const success = chalk.green.inverse;
const warning = chalk.keyword("orange").inverse;
const info = chalk.blue.inverse;
const error = chalk.red.bold.inverse;

welcome({
  title: `Sharif Elkassed`,
  tagLine: `Not to be confused with sheriff... 🤠`,
  description: pkgJSON.description,
  bgColor: "#21C7A8",
  color: "#d7ff00",
  bold: true,
  clear: true,
  version: pkgJSON.version,
});
console.log(chalk.cyanBright.bold(figlet.textSync("sharif")));

console.log(chalk.blueBright.bold(figlet.textSync("   elkassed")));

// I'm ${chalk.keyword("blue").bgCyan.bold(" Sharif Elkassed ")} :)
console.log(`
${chalk.italic(`I like bridging ideas and systems together to further my skillset.

I'm always looking for that next challenge.`)}


🧙  ${chalk.hex("#6cc644").bold.inverse(" GitHub   ")}   ${chalk.dim(
  "https://github.com/selkasse"
)}
⏩  ${chalk.hex("#00a0dc").bold.inverse(" LinkedIn ")} ${chalk.dim(
  "  https://linkedin.com/in/selkassed"
)}
🌍  ${chalk.hex("#A357EBf").bold.inverse(" Website  ")}  ${chalk.dim(
  " https://saleshorse.org"
)}

`);

alert({ type: `info`, msg: `https://skyshell.tech`, name: ` COMING SOON ` });
//* To make the file executable:
//? From the terminal, run:
//* chmod +x index.js

//* From there, we are able to execute the file by running:
//? ./index.js
//* BUT, the terminal doesn't know to run the file with node
//? In other words, it is trying to read it is a shell script

//* To get around that, we need to tell the terminal to use Node.js
//* We do that by putting a shebang at the top of the file
//? #! /usr/bin/env node <-- this is a shebang

//* We then create the package.json file manually, like so:
// {
//   "name": "sharif",      //* the name of the package on the npm registry
//   "version": "1.0.0",
//   "bin": {
//     "sharif": "index.js" //* the name of the command to run
//   }
// }

//* After creating the package.json, we can then run:
//? npm link
//* Don't worry too much about the details;
//? Just know that it makes developing npm packages easier
