function symfonyBuild(gulp) {
  return function() {
    var del = require('del');

    del.sync('dist');

    return gulp.src(['app/**/*', 'src/**/*', 'vendor/**/*', 'web/*'], { base: process.cwd(), dot: true })
      .pipe(gulp.dest('dist'));
  }
}

module.exports = symfonyBuild;
