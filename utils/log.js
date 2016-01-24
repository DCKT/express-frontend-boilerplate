'use strict';

const clc = require('cli-color');

module.exports = {
  notice(message) {
    console.log(clc.blue.bold(message));
  },
  error() {
    console.log(clc.red.bold(message));
  },
  warning() {
    console.log(clc.yellow(message));
  },
};
