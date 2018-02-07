'use strict';

const gulp  = require('gulp');
const concat  = require('gulp-concat');
const maps    = require('gulp-sourcemaps');

// gulp.task();

gulp.task('scripts', function () {
  gulp.src([
    "js/circle/autogrow.js",
    "js/circle/circle.js",
    "js/global.js"])
    .pipe(maps.init())
   .pipe(concat("app.js"))
   .pipe(maps.write('./'))
  .pipe(gulp.dest("dist/scripts"));
});

gulp.task('default', function() {

  console.log("Default Gulp function has run.");
});
