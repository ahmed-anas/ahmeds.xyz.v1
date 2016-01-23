'use strict';

var fs = require('fs');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-less');

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
                     'public/css/compiled/flipper.css': 'public/less/flipper.less'
                }
            }
            
        }
    });
    
}

