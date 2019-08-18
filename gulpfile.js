const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

gulp.task('sass', function() {
  return gulp.src('src/alit.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        postcssImport(),
        // cssnano()
      ]))
      .pipe(gulp.dest('dist'));
});
