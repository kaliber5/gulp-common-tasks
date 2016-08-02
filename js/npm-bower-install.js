function npmBowerInstall(gulp) {
  return function() {
    var install = require("gulp-install");

    return gulp.src(['./bower.json', './package.json'])
      .pipe(install());
  };
}

module.exports = npmBowerInstall;