function testPhpLint(gulp) {
  return function() {
    var phplint = require('gulp-phplint');
    var path = require('path');
    var gutil = require('gulp-util');

    var options = { skipPassedFiles: true, notify: false };
    var Writer = require('junitwriter'),
      junitwriter = new Writer(),
      suites = junitwriter.getTestsuites(),
      suite = suites.addTestsuite('phplint');

    return gulp.src(['./src/**/*.php'])
      .pipe(phplint('', options))
      .on('error', gutil.log)
      .pipe(phplint.reporter(function(file) {
        var report = file.phplintReport || {};
        if (report.error) {
          var testCase = suite.addTestcase('phplint', report.filename);
          testCase.addError(report.message + ' on line ' + report.line + ' of ' + report.filename, 'syntaxerror');
        }
      }))
      .on('end', function() {
        junitwriter.save(path.resolve('/build/phplint.xml'));
      })
      ;
  }
}

module.exports = testPhpLint;