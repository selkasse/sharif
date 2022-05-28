#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");

console.log(chalk.cyanBright(figlet.textSync("sharif")));
console.log(chalk.blueBright(figlet.textSync("   elkassed")));

console.log(`
I'm Sharif Elkassed :)

I like bridging systems and ideas together to further my skillset.

I'm always looking for that next challenge.


🧙  ${chalk.cyan("GitHub:")}   https://github.com/selkasse
⏩  ${chalk.blueBright("LinkedIn:")} https://linkedin.com/in/selkassed
🌍  ${chalk.magentaBright("Website:")}  https://saleshorse.org

`);
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
