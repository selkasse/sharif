#!/usr/bin/env -S node --no-warnings

import alert from 'sharif-cli-alerts'
import handleError from 'cli-handle-error'

import init from './utils/init.js'
import * as data from './utils/data.js'
import cli from './utils/cli.js'
import debug from './utils/debug.js'
import stats from './utils/stats.js'

const input = cli.input
const flags = cli.flags

//* Run the code in an IIFE so it does not pollute the global namespace
;(async () => {
  //* Init and help
  init(flags, data)
  input.includes('help') && cli.showHelp(0)

  //* Main info
  flags.bio && console.log(data.bio)
  flags.social && console.log(data.social)
  flags.promo &&
    alert({
      type: `info`,
      msg: `${data.promo}`,
      name: ` COMING SOON `,
    })

  //* Stats
  await stats()

  //* Debug
  debug(flags.debug, cli)
})()
