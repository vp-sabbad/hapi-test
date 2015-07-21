// jshint node:true

var Path = require('path');

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon');

gulp.task('jshint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    nodemon({
        script: Path.resolve('index.js'),
        ext: 'js html',
        tasks: ['jshint'] // doesn't work on Windows
    });
});
