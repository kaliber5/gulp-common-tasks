/**
 * Copy docs from sub folders into root docs folder
 */
function docsCopy(gulp) {
  return function() {
    var rename = require('gulp-rename');
    return gulp.src('*/docs/**/*')
      .pipe(rename(function (path) {
        path.dirname = path.dirname.replace(/^(\w+)\/docs/, '$1');
      }))
      .pipe(gulp.dest('docs'));
  };
}

module.exports = docsCopy;