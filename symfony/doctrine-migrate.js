function doctrineMigrate(gulp) {
  return require('gulp-shell').task('php app/console -n doctrine:migrations:migrate');
}

module.exports = doctrineMigrate;