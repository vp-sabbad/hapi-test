var Path = require('path');

module.exports = function(grunt) {
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['*.js']
        },
        hapi: {
            custom_options: {
                options: {
                    server: Path.resolve('index.js')
                },
            },
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'hapi'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-hapi');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
};
