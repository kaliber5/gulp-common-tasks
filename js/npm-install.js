function npmInstall(gulp) {
  return function() {
    var install = require("gulp-install");

    return gulp.src(['./package.json'])
      .pipe(install());
  };
}

module.exports = npmInstall;