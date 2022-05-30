import meow from 'meow'
import chalk from 'chalk'

const green = chalk.green
const yellow = chalk.yellow
const cyan = chalk.cyan
const dim = chalk.dim

const helpText = `
  Usage
    ${green(`npx sharif`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

	Options
    ${yellow(`--bio`)}             Print bio ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}          Don't print the bio
    ${yellow(`--social`)}          Print the social info ${dim(
  `(DEFAULT: true)`
)}
    ${yellow(`--no-social`)}       Don't print the social info
    ${yellow(`--promo`)}           Print the promo ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-promo`)}        Don't print the promo
    ${yellow(`-c`)},${yellow(` --clear`)}       Clear the console
    ${yellow(`-m`)},${yellow(` --minimal`)}     Print minimal info
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
  inferType: true,
  hardRejection: false,
  flags: {
    clear: {
      type: `boolean`,
      default: false,
      alias: `c`,
    },
    minimal: {
      type: `boolean`,
      alias: `m`,
    },
    bio: {
      type: `boolean`,
      default: true,
    },
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
