function composerInstall(gulp, options) {
  return function() {
    var composer = require("gulp-composer");
    var prod = options && options.production;

    if (prod) {
      // when targeting production environment, run composer install with prod optimized settings..
      return composer('install', {
        'no-dev': true,
        'optimize-autoloader': true,
        'no-scripts': true,
        'prefer-dist': true,
        'ignore-platform-reqs': true
      });
    }
    else {
      return composer('install', {
        'optimize-autoloader': true,
        'prefer-dist': true
      });
    }
  };
}

module.exports = composerInstall;