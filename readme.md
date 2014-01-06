#Laravel Boilerplate

##Introduction

The Laravel Boilerplate repository provides a simple [Laravel 4 PHP framework](http://laravel.com) setup including [Bower](http://bower.io) and [Grunt](http://gruntjs.org).

###Requirements

* Composer, http://getcomposer.org
* Bower, http://bower.io
* Grunt, http://gruntjs.org

###Installation

1. Download or <code>git clone</code> this repository
2. Run
 * <code>composer install</code>
 * <code>php artisan key:generate</code>
 * <code>bower install</code>
 * <code>npm install</code>
 
For further information on Laravel setup ( database configuration, ... ) please take a look at http://laravel.com.

##Usage

You can start developing immediately after installing the boilerplate.

1. Run <code>grunt develop</code> on your command line
2. Open http://your-url-to-laravel.local
3. Modify some CSS or JS files located within your <i>app/assets/</i> directory and watch the frontend change automatically due to <b>livereload</b>
 
###How it works

Described in a nutshell, the approach of this laravel development setup is, that all resources ( *.css, *.js, *.less, ... ) from third party libraries as well as your own resources are stored within the restricted non-public <i>app/</i> directory. 

All files available or required within the web application are compiled, built or just copied to the public directory using tools such as <i>Grunt</i>.

This allows you as a developer, working on your source files without the need to care about modifying JavaScript or CSS file inclusions, when deploying your application.

####An example

Let's assume you as a developer would like to add an additional library to work with. In order to show how easy you can do so, here's an example of how to integrate [UnderscoreJS](http://underscorejs.org) within your laravel project.

1. Install the package and add it to the <i>bower.json</i> file: 

  <code>bower install --save underscore</code>
  
2. Add the <i>underscore.js</i> source file to the target task within the <i>Gruntfile.js</i> configuration file:

        // JS file concatenation
        concat: {
            options: {
                separator: ';'
            },
            javascript: {
                src: [
                    './app/assets/components/bower/underscore/underscore.js',
                    './app/assets/components/bower/jquery/jquery.min.js',
                    './app/assets/components/bower/bootstrap/dist/js/bootstrap.min.js',
                    './app/assets/js/frontend.js'
                ],
                dest: './public/assets/js/frontend.js'
            },
        },

3. Run the <code>grunt develop</code> task to start developing with the new package installed.

##Thanks to

Special thanks to [Elena Kolevska](https://github.com/elena-kolevska), who inspired me with her [Laravel Grunt](https://github.com/elena-kolevska/grunt-laravel) implementation and her excellent [blog article](http://blog.elenakolevska.com/using-grunt-with-laravel-and-bootstrap).


