#!/usr/bin/env -S node --no-warnings

import alert from 'sharif-cli-alerts'
import handleError from 'cli-handle-error'
import meow from 'meow'

import init from './utils/init.js'
import * as data from './utils/data.js'

const helpText = `RUN: npx sharif`
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
const cli = meow(helpText, options)

//* Run the code in an IIFE so it does not pollute the global namespace
;(() => {
  init()

  console.log(data.ASCII_FIRST_NAME)
  console.log(data.ASCII_LAST_NAME)

  console.log(data.bio)
  console.log(data.social)

  alert({
    type: `info`,
    msg: `${data.promo}`,
    name: ` COMING SOON `,
  })

  alert({
    type: `info`,
    msg: `CLI DATA ⬇️`,
  })
  // console.log(`CLI DATA: ${JSON.stringify(cli)}`)
})()
