const welcome = require("cli-welcome");
const pkgJSON = require("../package.json");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");

module.exports = () => {
  unhandled();

  //* Specify a minimum major version of node
  //? Should set this to the Maintenance LTS version
  checkNode("14");

  //* Force an error for us to handle
  ////Promise.reject(new Error(`THIS IS UNHANDLED`));

  welcome({
    title: `Sharif Elkassed`,
    tagLine: `Not to be confused with sheriff... 🤠`,
    description: pkgJSON.description,
    bgColor: "#21C7A8",
    color: "#d7ff00",
    bold: true,
    clear: true,
    version: pkgJSON.version,
  });
};
