var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var pump = require('pump');

var sass = require('gulp-sass');

var uglifycss = require('gulp-uglifycss');

var watch = require('gulp-watch');




gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js/js_build'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/js_build/main.js'),
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
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/js/js_build/main.js', ['compress']);
  gulp.watch('app/scss/main.scss', ['sass']);
  gulp.watch('app/css/main.css', ['css']);
});

gulp.task('default', ['scripts', 'compress', 'sass', 'css', 'watch']);