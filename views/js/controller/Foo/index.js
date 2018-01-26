define([], function(){
    'use strict';

    return {
        start : function start(){
            //foo starts
            window.console.log('foobar baz noz', arguments);
            window.console.warn('Ooops');
        }
    };
});
