'use strict';

const gulp   = require('gulp');
const path   = require('path');
const config = require('./config/gulp.js');

const tasks = {
  stylesheets: require('./tasks/stylesheets')(config.stylesheets),
  scripts: require('./tasks/scripts')(config.scripts),
};

gulp.task('scripts', tasks.scripts);
gulp.task('stylesheets', tasks.stylesheets);

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['scripts', 'stylesheets']);

gulp.task('watch', function() {
  gulp.watch(config.stylesheets.watchPath, ['stylesheets']);
  gulp.watch(config.scripts.watchPath, ['scripts']);
});
