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
                     '.tmp/css/flipper.css': 'public/less/flipper.less'
                }
            }
            
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                files: {
                    'public/dist/js/angularApp.js': 
                        [
                            'public/app/modules.js',
                            'public/app/controllers/*.js',
                            'public/app/routes.js'
                        ],
                    'public/dist/css/flipper.css': ['.tmp/css/flipper.css'],
                    'public/dist/css/main.css': ['public/css/loader1.css']
                }
            },
            
        },
        copy: {
            
        }
    });
    
    grunt.registerTask('build', ['less', 'concat']);
}

