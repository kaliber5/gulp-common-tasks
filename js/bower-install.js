function bowerInstall(gulp) {
  return function() {
    var install = require("gulp-install");

    return gulp.src(['./bower.json'])
      .pipe(install());
  };
}

module.exports = bowerInstall;