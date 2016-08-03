function testPhpCs(gulp, options) {
  return function() {
    var phpcs = require('gulp-phpcs');
    var through = require('through2');
    var path = require('path');
    var gutil = require('gulp-util');
    options = options || {};

    if (!options.standard) {
      throw new Error('No phpcs standard specified');
    }

    var phpcsOptions = {
      bin: 'bin/phpcs',
      standard: options.standard,
      warningServerity: 0
    };
    var Writer = require('junitwriter'),
      junitwriter = new Writer(),
      suites = junitwriter.getTestsuites(),
      suite = suites.addTestsuite('phpcs');

    return gulp.src(options.src || '**/*.php')
      .pipe(phpcs(phpcsOptions))
      .pipe(through.obj(function(file, enc, callback) {
        var report = file.phpcsReport || {};
        if (report.error) {
          var testCase = suite.addTestcase('phpcs', file.path);
          testCase.addError(report.output, 'phpcserror');
        }
        this.push(file);
        callback();
      }))
      .on('error', gutil.log)
      .on('end', function() {
        junitwriter.save(path.resolve('build/phpcs.xml'));
      });
  }
}

module.exports = testPhpCs;