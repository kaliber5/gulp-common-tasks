/**
 * Copy frontend files into dist folder
 */
function buildCopyFrontend(gulp) {
  return function() {
    return gulp.src('frontend/dist/**/*', { base: './frontend/dist/' })
      .pipe(gulp.dest('dist/web'));
  };
}

module.exports = buildCopyFrontend;