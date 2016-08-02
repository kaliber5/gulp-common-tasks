function testPhpSpec(gulp) {
  return function(cb) {
    var phpspec = require('gulp-phpspec');
    var path = require('path');
    
    var options = { quiet: true, notify: true, noInteraction: true, noAnsi: false };
    var Writer = require('junitwriter'),
      junitwriter = new Writer(),
      suites = junitwriter.getTestsuites(),
      suite = suites.addTestsuite('phpspec');
    gulp.src('phpspec.yml')
      .pipe(phpspec(path.join(process.cwd(), './bin/phpspec'), options))
      .on('error', function(error) {
        var testCase = suite.addTestcase('phpspec', 'phpspec');
        testCase.addError('The Spec Tests do not pass all tests', 'specerror');
        junitwriter.save(path.join(process.cwd(), './build/phpspec.xml'));
        cb();
      })
      .on('end', cb)
    ;
  }
}

module.exports = testPhpSpec;