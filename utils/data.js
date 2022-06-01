import chalk from 'chalk'
import figlet from 'figlet'
import boxen from 'boxen'

const cyanBright = chalk.cyanBright.bold
const blueBright = chalk.blueBright.bold
const italic = chalk.italic
const gitHub = chalk.hex('#6cc644').bold.inverse
const linkedIn = chalk.hex('#00a0dc').bold.inverse
const website = chalk.hex('#A357EBf').bold.inverse
const dim = chalk.dim

const ASCII_FIRST_NAME = cyanBright(figlet.textSync('sharif'))
const ASCII_LAST_NAME = blueBright(figlet.textSync('   elkassed'))

const bio = `
  ${italic(`I like bridging ideas and systems together to further my skillset.

  I'm always looking for that next challenge.`)}
  `

const social = boxen(
  `  
  🧙  ${gitHub(' GitHub   ')}   ${dim('https://github.com/selkasse  ')}
  ⏩  ${linkedIn(' LinkedIn ')} ${dim('  https://linkedin.com/in/selkassed  ')}
  🌍  ${website(' Website  ')}  ${dim(' https://saleshorse.org  ')}
  `,
  { borderColor: 'cyan' }
)

const promo = `https://skyshell.tech`

export { ASCII_FIRST_NAME, ASCII_LAST_NAME, bio, social, promo }
