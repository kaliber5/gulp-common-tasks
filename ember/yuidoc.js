function emberYuidoc() {
  return require('gulp-shell').task('ember ember-cli-yuidoc');
}

module.exports = emberYuidoc;