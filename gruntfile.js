module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    '_/js/script.js': ['_/components/js/*.js'] //takes every .js file in the folder
                } //files
            } //my_target
        }, //uglify

        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass

        watch: {
            options: {
                livereload: true
            }, //options
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            }, //scripts
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            }, //sass
            html: {
                files: ['*.html']
            } //html
        } //watch

    }); //initConfig
    grunt.registerTask('default', 'watch'); //default action to run on "grunt"
}; //exports
