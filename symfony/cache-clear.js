function cacheClear(gulp) {
  return require('gulp-shell').task('php app/console -n cache:clear');
}

module.exports = cacheClear;