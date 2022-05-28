#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");
const alert = require("sharif-cli-alerts");
const checkNode = require("cli-check-node");

//* Specify a minimum major version of node
//? Should set this to the Maintenance LTS version
checkNode("14");

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
