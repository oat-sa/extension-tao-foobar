define([], function(){
    'use strict';

    return {
        start : function start(){
            //foo starts
            window.console.log('foobar baz noz', arguments);
            window.console.warn('Ooops');
            window.console.log('that is a cool new feature');
            window.console.log('now the feature is complete');
        }
    };
});
