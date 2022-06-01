import meow from 'meow'
import meowHelp from 'cli-meow-help'
import chalk from 'chalk'

const flags = {
  bio: {
    type: `boolean`,
    default: true,
    desc: `Print the bio`,
  },
  clear: {
    type: `boolean`,
    default: false,
    desc: `Clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  minimal: {
    type: `boolean`,
    alias: `m`,
    desc: `Print minimal info`,
  },
  promo: {
    type: `boolean`,
    default: true,
    desc: `Print skyshell promo`,
  },
  social: {
    type: `boolean`,
    default: true,
    desc: `Print social links`,
  },
  version: {
    type: `boolean`,
    default: false,
    alias: `v`,
    desc: `Print the CLI version`,
  },
}

const commands = {
  help: {
    desc: `Print the help info\n\n${chalk
      .hex(`#3FA4A6`)
      .bold(`NOTE:`)} ${chalk.yellow(
      `--no`
    )} can be prepended to any boolean option\n(if the default value is ${chalk.dim.yellow(
      `true`
    )})\n\nThis will toggle the value to ${chalk.dim.yellow(`false`)}\n\n${chalk
      .hex(`#3FA4A6`)
      .bold.dim(`Example:`)} ${chalk.green(`npx sharif`)} ${chalk.yellow(
      `--no-bio --no-promo --no-social`
    )}`,
  },
}

const helpText = meowHelp({
  name: `npx sharif`,
  flags,
  commands,
})

const options = {
  importMeta: import.meta,
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
}

export default meow(helpText, options)
