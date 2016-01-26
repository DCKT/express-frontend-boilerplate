'use strict';

const path = require('path');

const iconBuild = {
  valid:  path.join(__dirname, '../public/images/gulp/gulp-valid.png'),
  failed: path.join(__dirname, '../public/images/gulp/gulp-error.png'),
};

const config = {
  stylesheets: {
    inputPath: [path.join(__dirname, '../src/frontend/common.scss'), path.join(__dirname, '../src/frontend/pages/**/*.scss')],
    outputPath: path.join(__dirname, '../public/stylesheets'),
    watchPath: './src/frontend/**/*.scss',
    iconBuild,
  },
  scripts: {
    watchPath: './src/frontend/**/*.js',
    iconBuild,
  },
}

module.exports = config;
