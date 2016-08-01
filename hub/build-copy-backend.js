/**
 * Copy backend files into dist folder
 */
function buildCopyBackend(gulp) {
  return function() {
    return gulp.src('backend/dist/**/*', { base: './backend/dist/', dot: true })
      .pipe(gulp.dest('dist'));
  };
}

module.exports = buildCopyBackend;