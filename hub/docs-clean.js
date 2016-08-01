/**
 * Clean docs folder
 */
function docsClean(gulp, options) {
  options = options || {};
  var folders = options.folders || ['backend', 'frontend'];
  return function() {
    var del   = require('del');
    // Clear the docs folders
    return del(folders.map(function(name) { return 'docs/' + name + '/**/*'; }));
  };
}

module.exports = docsClean;