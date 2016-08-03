function testPhpSpec(gulp) {
  return function(cb) {
    var phpspec = require('gulp-phpspec');
    var options = { quiet: true, notify: true, noInteraction: true, noAnsi: false };
    var Writer = require('junitwriter'),
      junitwriter = new Writer(),
      suites = junitwriter.getTestsuites(),
      suite = suites.addTestsuite('phpspec');
    
    gulp.src('phpspec.yml')
      .pipe(phpspec('bin/phpspec', options))
      .on('error', function() {
        var testCase = suite.addTestcase('phpspec', 'phpspec');

        // @todo we should really have each test in the junit file, not just this faked one for any failure
        testCase.addError('The Spec Tests do not pass all tests', 'specerror');
        junitwriter.save('build/phpspec.xml');
        cb();
      })
      .on('end', cb)
    ;
  }
}

module.exports = testPhpSpec;