function emberDeps(gulp) {
  var hasbin = require('hasbin');
  var chalk = require('chalk');

  if (hasbin.sync('yarn')) {
    var runSequence = require('run-sequence').use(gulp);

    gulp.task('__ember-deps-yarn', require('../js/yarn-install')(gulp));
    gulp.task('__ember-deps-bower', require('../js/bower-install')(gulp));

    return function(callback) {
      console.log(chalk.green('Installing node modules using', chalk.underline.green('yarn')));
      runSequence(
        '__ember-deps-yarn',
        '__ember-deps-bower',
        callback);
    };
  } else {
    return function() {
      var npmBowerInstall = require('../js/npm-bower-install')(gulp);
      console.log(chalk.red('Installing node modules using', chalk.underline.red('npm')));
      console.log(chalk.yellow('Consider installing yarn instead!'));
      return npmBowerInstall();
    }
  }
}

module.exports = emberDeps;


