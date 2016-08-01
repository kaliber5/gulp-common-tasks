/**
 * Merge backend and frontend dist folders
 */
function buildSymfonyEmber(gulp) {
  var runSequence = require('run-sequence').use(gulp);

  gulp.task('__build-clean', require('./build-clean')(gulp));
  gulp.task('__build-copy-backend', require('./build-copy-backend')(gulp));
  gulp.task('__build-copy-frontend', require('./build-copy-frontend')(gulp));

  return function(callback) {
    runSequence('__build-clean',
      '__build-copy-backend',
      '__build-copy-frontend',
      callback);
  };
}

module.exports = buildSymfonyEmber;