'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const notifier     = require('node-notifier');
const path         = require('path');
const autoprefixer = require('gulp-autoprefixer');
const minify       = require('gulp-minify-css');
const DEV          = process.argv.indexOf('--dev') != -1;

module.exports = function(config) {
  return function() {
    var error = false;

    let stream = gulp.src(config.inputPath)
      .pipe(sass().on('error', sass.logError).on('error', () => {
        error = true;
      }))
      .pipe(autoprefixer());

    if (!DEV) {
      stream.pipe(minify());
    }

    return stream.pipe(gulp.dest(config.outputPath))
      .on('end', () => {
        notifier.notify({
          title: error ? 'ERROR task stylesheets' : 'Gulp task',
          message: error ? 'stylesheet build failed' : 'stylesheet build done',
          wait: false,
          time: 1000,
          icon: error ? config.iconBuild.failed : config.iconBuild.valid 
        });

        error = false;
      })
  }
}