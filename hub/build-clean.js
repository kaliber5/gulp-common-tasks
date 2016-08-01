/**
 * Clean dist folder
 */
function buildClean() {
  return function() {
    var del   = require('del');
    // Clear the destination folder
    return del('dist');
  };
}

module.exports = buildClean;