function symfonyBuild(gulp) {
  return function(cb) {
    var del = require('del');
    var gutil = require('gulp-util');

    del.sync('dist');

    return gulp.src(['app/**/*', 'src/**/*', 'vendor/**/*', 'web/*'], { base: './', dot: true })
      .pipe(gulp.dest('dist'))
      .on('error', gutil.log)
  }
}

module.exports = symfonyBuild;
