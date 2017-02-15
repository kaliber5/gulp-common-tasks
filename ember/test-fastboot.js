function emberTestAll(gulp, options) {
  return function(cb) {
    var exec = require('child_process').exec,
      fs = require('fs'),
      path = require('path'),
      outFile = path.join(process.cwd(), 'build/test-fastboot.xml');

    exec('ember fastboot:test --silent --reporter xunit', { maxBuffer: 1024 * 1024 }, function(err, stdout) {
      fs.writeFile(outFile, stdout, function(fileErr) {
        if (fileErr) {
          cb(fileErr);
          return;
        }
        if (!err) {
          cb();
          return;
        }
        if (err.code === 1) {
          console.error('Running ember fastboot:test finished with failed tests!');
          console.log(stdout);
          // still return exit code of 0 to continue task processing in CI server
          cb();
          return;
        }
        cb(err);
      });
    });
  }
}

module.exports = emberTestAll;

