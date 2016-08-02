function doctrineLoadFixtures(gulp) {
  return require('gulp-shell').task('php app/console -n h:d:f:l');
}

module.exports = doctrineLoadFixtures;