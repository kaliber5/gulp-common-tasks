var composerInstall = require('../php/composer-install');

function symfonyComposerInstall(gulp, options) {
  // check of SYMFONY_ENV env var to enable production install
  var prod = options && options.production || process.env.SYMFONY_ENV === 'prod';
  return composerInstall(gulp, { production: prod });
}

module.exports = symfonyComposerInstall;