import { readFileSync } from 'fs'

import welcome from 'cli-welcome'
// import pkgJSON from '../package.json' assert { type: 'json' }
import checkNode from 'cli-check-node'
import boxen from 'boxen'
import unhandled from 'cli-handle-unhandled'

const pkgJSON = JSON.parse(readFileSync('./package.json'))

export default ({ minimal, clear }, data) => {
  unhandled()

  //* Specify a minimum major version of node
  //? Should set this to the Maintenance LTS version
  checkNode('14')

  //* Force an error for us to handle
  ////Promise.reject(new Error(`THIS IS UNHANDLED`));

  !minimal &&
    welcome({
      title: `Sharif Elkassed`,
      tagLine: `Not to be confused with sheriff... 🤠`,
      description: pkgJSON.description,
      bgColor: '#21C7A8',
      color: '#d7ff00',
      bold: true,
      clear,
      version: pkgJSON.version,
    })

  !minimal && console.log(data.ASCII_FIRST_NAME)
  !minimal && console.log(data.ASCII_LAST_NAME)

  minimal && console.log(boxen(`Sharif Elkassed`, { padding: 1 }))
}
