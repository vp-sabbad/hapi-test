// jshint node:true

var Path = require('path');

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon'),
    nodeunit = require('gulp-nodeunit');

gulp.task('jshint', function() {
    return gulp.src('index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.src('test/test.js')
    .pipe(nodeunit());
});

gulp.task('watch:server', function() {
    nodemon({
        script: Path.resolve('index.js'),
        ext: 'js html',
        tasks: ['jshint'],
        delay: 1.0 
    });
});

gulp.task('watch:test', function() {
    nodemon({
        exec: "nodeunit test/test.js",
        ext: 'js html',
        tasks: ['jshint', 'test'],
        delay: 1.0 
    });
});

