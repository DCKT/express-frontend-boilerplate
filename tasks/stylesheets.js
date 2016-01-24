'use strict';

const gulp     = require('gulp');
const sass     = require('gulp-sass');
const notifier = require('node-notifier');
const path     = require('path');

module.exports = function(config) {
  return function() {
    var error = false;

    return gulp.src(config.inputPath)
      .pipe(sass().on('error', sass.logError).on('error', () => {
        error = true;
      }))
      .pipe(gulp.dest(config.outputPath))
      .on('end', () => {
        notifier.notify({
          title: error ? 'ERROR task stylesheets' : 'Gulp task',
          message: error ? 'stylesheet build failed' : 'stylesheet build done',
          wait: false,
          time: 1500,
          icon: error ? config.iconBuild.error : config.iconBuild.valid 
        });

        error = false;
      })
  }
}