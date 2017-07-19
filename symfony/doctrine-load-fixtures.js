function doctrineLoadFixtures(gulp) {
  return require('gulp-shell').task('php bin/console -n h:d:f:l --purge-with-truncate');
}

module.exports = doctrineLoadFixtures;
