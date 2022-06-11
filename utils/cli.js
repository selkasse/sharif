import meow from 'meow'
import meowHelp from 'cli-meow-help'
import makeFooter from 'cli-footer'

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
    alias: `v`,
    desc: `Print the CLI version`,
  },
}

const commands = {
  help: {
    desc: `Print the help info`,
  },
}
const footer = makeFooter('sharif', flags)

const helpText = meowHelp({
  name: `npx sharif`,
  flags,
  commands,
  footer,
})

const options = {
  importMeta: import.meta,
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
}

export default meow(helpText, options)
