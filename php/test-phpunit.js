function testPhpUnit(gulp, options) {
  return function() {
    var phpunit = require('gulp-phpunit');

    options = options || {};
    return gulp.src('app/phpunit.xml')
      .pipe(phpunit('./bin/phpunit', {
        configurationFile: options.config || 'phpunit.xml'
      }));
  }
}

module.exports = testPhpUnit;