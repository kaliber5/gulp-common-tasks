function cacheClear(gulp) {
  return require('gulp-shell').task('php bin/console -n cache:clear');
}

module.exports = cacheClear;
