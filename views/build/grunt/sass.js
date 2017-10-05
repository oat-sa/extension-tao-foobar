module.exports = function (grunt) {
    'use strict';

    var sass    = grunt.config('sass') || {};
    var watch   = grunt.config('watch') || {};
    var notify  = grunt.config('notify') || {};
    var root    = grunt.option('root') + '/taoFooBar/views/';

    // Override include paths
    sass.taofoobar = {
        options : {},
        files : {}
    };

    //files goes heres
    sass.taofoobar.files[root + 'css/foo.css'] = root + 'scss/foo.scss';


    watch.taofoobarsass = {
        files : [root + 'scss/**/*.scss'],
        tasks : ['sass:taofoobar', 'notify:taofoobarsass'],
        options : {
            debounceDelay : 1000
        }
    };

    notify.taofoobarsass = {
        options: {
            title: 'Grunt SASS',
            message: 'SASS files compiled to CSS'
        }
    };

    grunt.config('sass', sass);
    grunt.config('watch', watch);
    grunt.config('notify', notify);

    //register an alias for main build
    grunt.registerTask('taofoobarsass', ['sass:taofoobar']);
};
