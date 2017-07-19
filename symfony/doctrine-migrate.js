function doctrineMigrate(gulp) {
  return require('gulp-shell').task('php bin/console -n doctrine:migrations:migrate');
}

module.exports = doctrineMigrate;
