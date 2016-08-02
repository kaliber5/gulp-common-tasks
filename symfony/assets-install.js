function assetsInstall(gulp) {
  return require('gulp-shell').task('php app/console -n assets:install');
}

module.exports = assetsInstall;