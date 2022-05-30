import welcome from 'cli-welcome'
import pkgJSON from '../package.json' assert { type: 'json' }
import checkNode from 'cli-check-node'
import unhandled from 'cli-handle-unhandled'

export default () => {
  unhandled()

  //* Specify a minimum major version of node
  //? Should set this to the Maintenance LTS version
  checkNode('14')

  //* Force an error for us to handle
  ////Promise.reject(new Error(`THIS IS UNHANDLED`));

  welcome({
    title: `Sharif Elkassed`,
    tagLine: `Not to be confused with sheriff... 🤠`,
    description: pkgJSON.description,
    bgColor: '#21C7A8',
    color: '#d7ff00',
    bold: true,
    clear: false,
    version: pkgJSON.version,
  })
}
