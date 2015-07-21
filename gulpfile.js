// jshint node:true

var Path = require('path');

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('default', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('server:start', function(callback) {
    var server = require(Path.resolve('index.js'));
    server.start(function() {
        callback();
    });
});
