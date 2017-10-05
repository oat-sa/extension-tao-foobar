odule.exports = function(grunt) {
    'use strict';

    var root        = grunt.option('root');
    var libs        = grunt.option('mainlibs');
    var ext         = require(root + '/tao/views/build/tasks/helpers/extensions')(grunt, root);
    var out         = 'output';

    grunt.config.merge({
        clean : {
            taofoobarbundle : [out]
        },

        requirejs : {
            taofoobarbundle : {
                options: {
                    baseUrl : '../js',
                    dir : out,
                    mainConfigFile : './config/requirejs.build.js',
                    paths : {
                        taoFooBar : root + '/taoFooBar/views/js',
                        taoFooBarCss: root + '/taoFooBar/views/css'
                    },
                    modules : [{
                        name: 'taoFooBar/controller/routes',
                        include : ext.getExtensionsControllers(['taoFooBar']),
                        exclude : ['mathJax'].concat(libs)
                    }]
                }
            }
        },

        copy : {
            taofoobarbundle : {
                files: [
                    { src: [out + '/taoFooBar/controller/routes.js'],  dest: root + '/taoFooBar/views/js/controllers.min.js' },
                    { src: [out + '/taoFooBar/controller/routes.js.map'],  dest: root + '/taoFooBar/views/js/controllers.min.js.map' }
                ]
            }
        }
    });

    // bundle task
    grunt.registerTask('taofoobarbundle', ['clean:taofoobarbundle', 'requirejs:taofoobarbundle', 'copy:taofoobarbundle']);
};
