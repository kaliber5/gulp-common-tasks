/**
 * Migrate and load fixtures
 */
function doctrineSetup(gulp) {
  var runSequence = require('run-sequence').use(gulp);

  gulp.task('__doctrine-migrate', require('./doctrine-migrate')(gulp));
  gulp.task('__doctrine-load-fixtures', require('./doctrine-load-fixtures')(gulp));

  return function(callback) {
    runSequence('__doctrine-migrate',
      '__doctrine-load-fixtures',
      callback);
  };
}

module.exports = doctrineSetup;