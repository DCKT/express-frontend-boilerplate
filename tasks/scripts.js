'use strict';

const gulp          = require('gulp');
const gutil         = require('gulp-util');
const webpack       = require('webpack');
const webpackConfig = require('../webpack.config.js');
const notifier      = require('node-notifier');
const log           = require('../utils/log.js');

module.exports = function(config) {
  return function(callback) {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return callback(err);
      }
      else {
        const jsonStats = stats.toJson();
        const err       = jsonStats.errors.length > 0;

        if (err) {
          log.error(stats)
        }

        notifier.notify({
          title: err ? 'Scripts task FAILED' : 'Scripts task',
          message: err ? 'error found' : 'scripts build done',
          wait: false,
          time: 1000,
          icon: err ? config.iconBuild.failed : config.iconBuild.valid
        });
      }
      
      return callback();
    });
  };
};
