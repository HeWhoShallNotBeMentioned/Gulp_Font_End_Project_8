'use strict';

const gulp    = require('gulp');
const concat  = require('gulp-concat');
const maps    = require('gulp-sourcemaps');
const sass    = require('gulp-sass');
const uglify  = require('gulp-uglify');
const rename  = require('gulp-rename');
const minCSS  = require('gulp-clean-css');
const del     = require('del');
const image   = require('gulp-image');
const runSeq  = require('run-sequence');
const connect = require('gulp-connect');
const brwSync = require("browser-sync").create();

gulp.task('scripts', function () {
  gulp.src([
    "js/circle/autogrow.js",
    "js/circle/circle.js",
    "js/global.js"])
    .pipe(maps.init())
   .pipe(concat("all.min.js"))
   .pipe(uglify())
   .pipe(maps.write("./"))
  .pipe(gulp.dest("dist/scripts"));
});

gulp.task("styles", function(){
  return gulp.src("sass/global.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(minCSS({compatibility: 'ie8'}))
  .pipe(rename('app.min.css'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('dist/styles'))
  .pipe(brwSync.stream());
});

gulp.task('images', function () {
  return gulp.src('./images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/content'));
});

gulp.task('moveIndex', function(){
  return gulp.src('./index.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('moveIcons', function(){
  return gulp.src('./icons/**/')
  .pipe(gulp.dest('dist/icons'));
});

gulp.task('browser-sync', function() {
    brwSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('clean', function (){
  return del(['dist']);
});

gulp.task('build', function() {
  return runSeq('clean', ['scripts', 'styles', 'images', 'moveIndex', 'moveIcons'],'browser-sync');
    });

gulp.task('default', function() {
  gulp.start('build');
  gulp.watch('./sass/**/*.scss', ['styles']).on('change', brwSync.reload);
  connect.server({port: 3000});
  console.log("Default Gulp function has run.");
});
