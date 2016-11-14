function yarnInstall(gulp) {
  return function() {
    var yarn = require("gulp-yarn");

    return gulp.src(['./package.json'])
      .pipe(yarn());
  };
}

module.exports = yarnInstall;