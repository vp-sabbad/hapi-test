// jshint node:true

var Path = require('path');

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon'),
    nodeunit = require('gulp-nodeunit');

gulp.task('jshint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.src('test.js')
        .pipe(nodeunit());
});

gulp.task('watch', function() {
    nodemon({
        script: Path.resolve('index.js'),
        ext: 'js html',
        tasks: ['jshint', 'test'] // doesn't work on Windows
    });
});

