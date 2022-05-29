#!/usr/bin/env node
const alert = require('sharif-cli-alerts')
const handleError = require('cli-handle-error')

const init = require('./utils/init')
const data = require('./utils/data')

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
})()
