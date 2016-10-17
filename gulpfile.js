// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compress Images
gulp.task('images', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('final/img'))
});

// Live Reload
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Minify CSS
var minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('dist/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css/min/'))
    .pipe(gulp.dest('./final'))
    .pipe(connect.reload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/!(main)*.js', 'js/main.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Send HTML to final folder
gulp.task('move-final', function() {
    gulp.src(['./*.html', './dist/js/**/*', './dist/css/min/style.css'])
    .pipe(gulp.dest('./final'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('dist/css/*.css', ['minify-css']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'minify-css', 'images', 'scripts', 'watch', 'move-final', 'connect']);
