function emberTestAll(gulp, options) {
  return function(cb) {
    var exec = require('child_process').exec,
      fs = require('fs'),
      path = require('path'),
      outFile = path.join(process.cwd(), 'build/test-all.xml'),
      scriptErrorFile = path.join(process.cwd(), 'build/test-all-script.xml');

    exec('ember test --silent --reporter xunit --test-port 0', { maxBuffer: 1024 * 1024 }, function(err, stdout) {
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
          console.error('Running ember test finished with failed tests!');
          console.log(stdout);
          // still return exit code of 0 to continue task processing in CI server

          //BUT save an error in an junit file
          return errorWriter('ember', 'ember-tests', 'unknown', 'Running ember test failed!', 'script-error', scriptErrorFile, cb);
        }
        cb(err);
      });
    });
  }
}

module.exports = emberTestAll;

