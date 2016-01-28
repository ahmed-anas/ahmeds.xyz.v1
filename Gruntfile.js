'use strict';

var fs = require('fs');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        wiredep: {
            app: {
                src: 'public/index.html'
            }
        },
        less: {
            development:
            {
                options:{
                    paths:  [
                        'public/lib'
                    ]
                },
                files:{
                     'public/dist/css/flipper.css': 'public/less/flipper.less'
                }
            }
            
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'public/app/modules.js',
                    'public/app/controllers/*.js',
                    'public/app/routes.js'
                ],
                dest: 'public/dist/js/angularApp.js',
            },
            
        },
        copy: {
            
        }
    });
    
    grunt.registerTask('build', ['less', 'concat']);
}

