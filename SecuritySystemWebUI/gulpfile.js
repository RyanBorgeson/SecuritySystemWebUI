/**
 * Gulp file used for developmental purposes and compiling
 * sass files.
 **/
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var mini = require('gulp-clean-css');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');

// Move required angular dependency to assets/js.
gulp.task('angular', function () {
    return gulp.src('node_modules/angular/angular.js')
        .pipe(uglify())
        .pipe(rename('angular.min.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('bootstrap', function () {
    return gulp.src('node_modules/bootstrap-sass/assets/stylesheets/bootstrap/*')
        .pipe(gulp.dest('assets/css/bootstrap/*'));
});

gulp.task('compile:app', function () {
    return gulp.src('assets/js/app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('compile:typescript', function () {
    return gulp.src('assets/js/typescript/**/*.ts')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('compile:sass', function () {
    return gulp.src('assets/css/app.scss')
		.pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(rename('app.min.css'))
        .pipe(mini())
        .pipe(gulp.dest('assets/css'));
});


// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('assets/css/app/**/*.scss', ['compile:sass']);
    gulp.watch('assets/css/*.scss', ['compile:sass']);
    gulp.watch('assets/css/app/*.scss', ['compile:sass']);
    gulp.watch('assets/typescript/**/*.ts', ['compile:typescript']);
});