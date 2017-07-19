function assetsInstall(gulp) {
  return require('gulp-shell').task('php bin/console -n assets:install');
}

module.exports = assetsInstall;
