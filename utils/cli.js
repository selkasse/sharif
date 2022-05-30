import meow from 'meow'
import chalk from 'chalk'

const green = chalk.green
const yellow = chalk.yellow
const cyan = chalk.cyan

const helpText = `
  Usage
    ${green(`npx sharif`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

	Options
    ${yellow(`--social`)}          Print the social info
    ${yellow(`--no-social`)}       Don't print the social info
    ${yellow(`--promo`)}           Print the promo
    ${yellow(`--no-promo`)}        Don't print the promo
    ${yellow(`-d`)},${yellow(` --debug`)}       Print debug info
    ${yellow(`-v`)},${yellow(` --version`)}     Print CLI version
  
  Commands
    ${cyan(`help`)}              Print CLI help info

	Examples
    ${green(`npx sharif`)} ${yellow(`--no-social`)}
    ${green(`npx sharif`)} ${yellow(`--no-promo`)}
`
const options = {
  importMeta: import.meta,
  flags: {
    social: {
      type: `boolean`,
      default: true,
    },
    promo: {
      type: `boolean`,
      default: true,
    },
    debug: {
      type: `boolean`,
      default: false,
      alias: `d`,
    },
    version: {
      type: `boolean`,
      default: false,
      alias: `v`,
    },
  },
}

export default meow(helpText, options)
