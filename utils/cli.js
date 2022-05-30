import meow from 'meow'

const helpText = `
  Usage
    npx sharif [options]

	Options
    social:      Show the social info
    --no-social: Don't show the social info
    promo:       Show the promo
    --no-promo:  Don't show the promo

	Examples
    npx sharif --no-social 
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
  },
}

export default meow(helpText, options)
