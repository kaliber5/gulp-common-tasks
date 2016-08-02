function testJshint(gulp, options) {
  return function() {
    var jshint = require('gulp-jshint');
    var checkstyleFileReporter = require('jshint-checkstyle-file-reporter');
    var jsPath = options.jsPath || '**/*.js';

    process.env.JSHINT_CHECKSTYLE_FILE = path.join(process.cwd(), 'build/jshint.xml');

    return gulp.src(jsPath)
      .pipe(jshint())
      .pipe(jshint.reporter(checkstyleFileReporter));
  }
}

module.exports = testJshint;