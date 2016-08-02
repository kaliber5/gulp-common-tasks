// quick fix for gulp-hub cwd issue...
function getPathPrefix() {
  var path = process.cwd() + '/backend';
  var fs = require('fs');
  try {
    fs.accessSync(path, fs.F_OK);
    return '/backend';
  } catch (e) {
    return '';
  }
}

module.exports = getPathPrefix;