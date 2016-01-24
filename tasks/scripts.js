'use strict';

const gulp          = require('gulp');
const gutil         = require('gulp-util');
const webpack       = require('webpack');
const webpackConfig = require('../webpack.config.js');
const notifier      = require('node-notifier');

module.exports = function(config) {
  return function(callback) {
    webpack(webpackConfig, (err, stats) => {
      console.log(stats)
      if (err) {
        return callback(err);
      }
      else {
        notifier.notify({
          title: 'Gulp task',
          message: 'scripts build done',
          wait: false,
          time: 1500,
          icon: err ? config.iconBuild.error : config.iconBuild.valid
        });
      }
      
      callback();
    });
  };
};
