#!/usr/bin/env -S node --no-warnings

import alert from 'sharif-cli-alerts'
import handleError from 'cli-handle-error'

import init from './utils/init.js'
import * as data from './utils/data.js'
import cli from './utils/cli.js'

const input = cli.input
const flags = cli.flags

//* Run the code in an IIFE so it does not pollute the global namespace
;(() => {
  init()

  console.log(data.ASCII_FIRST_NAME)
  console.log(data.ASCII_LAST_NAME)

  console.log(data.bio)

  if (flags.social) {
    console.log(data.social)
  }

  if (flags.promo) {
    alert({
      type: `info`,
      msg: `${data.promo}`,
      name: ` COMING SOON `,
    })
  }

  if (flags.debug) {
    alert({
      type: `info`,
      msg: ` CLI DATA ⬇️ `,
    })
    console.log(`input`, input)
    console.log(`flags`, flags)
  }
})()
