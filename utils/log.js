'use strict';

const clc = require('cli-color');

module.exports = {
  notice(message) {
    console.log(clc.blue.bold(message));
  },
  error(message) {
    console.log(clc.red.bold(message));
  },
  warning(message) {
    console.log(clc.yellow(message));
  },
};
