function emberBuild() {
  return require('gulp-shell').task('ember build --environment production');
}

module.exports = emberBuild;