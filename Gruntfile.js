module.exports = function(grunt) {
    
    // Initialize the grunt configuration
    grunt.initConfig({

        // less file compilation and compression
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    './public/assets/css/frontend.css' : './app/assets/less/frontend.less',
                    './public/assets/css/backend.css'  : './app/assets/less/backend.less'
                }
            }
        },

        // JS file concatenation
        concat: {
            options: {
                separator: ';'
            },
            javascript: {
                src: [
                    './app/assets/components/bower/jquery/jquery.min.js',
                    './app/assets/components/bower/bootstrap/dist/js/bootstrap.min.js',
                    './app/assets/js/frontend.js'
                ],
                dest: './public/assets/js/frontend.js'
            },
        },

        // copy ressources such as fonts, files, images, required by assets to the public directory
        copy : {
            fonts: {
                expand: true,
                cwd : './app/assets/components/bower/bootstrap/dist/fonts/',
                src: ['*'],
                dest: './public/assets/fonts/'
            },
            js : {
                expand: true,
                cwd : './app/assets/components/bower/modernizr/',
                src: ['modernizr.js'],
                dest: './public/assets/js/'  
            }
        },

        // JS file obfuscation
        uglify: {
            options: {
                mangle: false  // do not change variable names
            },
            dist: {
                files: {
                  './public/assets/js/frontend.js' : './public/assets/js/frontend.js'
                }
            }
        },

        // run PHP unit tests
        phpunit: {
            classes: {
                dir: 'app/tests/'
            },
            options: {
                bin: 'vendor/bin/phpunit',
                colors: true
            }
        },

        // automatically run tasks when changing JS, LESS or PHP files
        watch: {
            js: {
                files: ['./app/assets/js/*.*'],
                tasks: ['concat','uglify'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['./app/assets/less/*.*'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            tests: {
                files: [
                    'app/controllers/*.php',
                    'app/models/*.php'
                ],
                tasks: ['phpunit']
            }          
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-phpunit');
    
    // Set the default task
    grunt.registerTask('default', ['watch']);

    // Set an additional initialization task to call before running the application the first time
    grunt.registerTask('develop', ['less', 'concat', 'copy', 'watch']);

};