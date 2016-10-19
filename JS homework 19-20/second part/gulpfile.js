var gulp = require('gulp');

var uglify = require('gulp-uglify');

var pump = require('pump');

var sass = require('gulp-sass');

var uglifycss = require('gulp-uglifycss');

var watch = require('gulp-watch');





gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/script.js'),
        uglify(),
        gulp.dest('build/js')
    ],
    cb
  );
});

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('css', function () {
  gulp.src('app/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function(){
  gulp.watch('app/js/script.js', ['compress']);
  gulp.watch('app/scss/main.scss', ['sass']);
  gulp.watch('app/css/main.css', ['css']);
});

gulp.task('default', ['compress', 'sass', 'css', 'watch']);