function phpTestSetup() {
  return function(cb) {
    var mkdirp = require('mkdirp');
    mkdirp('build', cb);
  };
}

module.exports = phpTestSetup;