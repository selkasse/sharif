#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const alert = require("sharif-cli-alerts");
//! Do not remove -- error handling example at end of file
const handleError = require("cli-handle-error");

const init = require("./utils/init");

const cyanBright = chalk.cyanBright.bold;
const blueBright = chalk.blueBright.bold;
const italic = chalk.italic;
const gitHub = chalk.hex("#6cc644").bold.inverse;
const linkedIn = chalk.hex("#00a0dc").bold.inverse;
const website = chalk.hex("#A357EBf").bold.inverse;
const dim = chalk.dim;

//test comme

//* Run the code in an IIFE so it does not pollute the global namespace
(() => {
  init();

  console.log(cyanBright(figlet.textSync("sharif")));

  console.log(blueBright(figlet.textSync("   elkassed")));

  console.log(`
  ${italic(`I like bridging ideas and systems together to further my skillset.

  I'm always looking for that next challenge.`)}

  🧙  ${gitHub(" GitHub   ")}   ${dim("https://github.com/selkasse")}
  ⏩  ${linkedIn(" LinkedIn ")} ${dim("  https://linkedin.com/in/selkassed")}
  🌍  ${website(" Website  ")}  ${dim(" https://saleshorse.org")}

  `);

  alert({ type: `info`, msg: `https://skyshell.tech`, name: ` COMING SOON ` });

  //! ERROR HANDLING EXAMPLE -- DO NOT DELETE
  // const err = new Error(`Something went wrong`);
  // handleError("CUSTOM ERROR", err, false, false);
})();
