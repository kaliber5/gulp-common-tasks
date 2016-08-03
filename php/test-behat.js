function phpTestBehat(gulp) {
  return function(cb) {
    var behat = require('gulp-behat');
    var gutil = require('gulp-util');
    
    var options = { format: 'junit', out: 'build', notify: true };
    gulp.src('behat.yml')
      .pipe(behat('bin/behat', options))
      .on('error', gutil.log)
      .on('end', cb);
  }
}

module.exports = phpTestBehat;