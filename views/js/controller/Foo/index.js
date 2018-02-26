define([], function(){
    'use strict';

    return {
        start : function start(){
            //foo starts
            window.console.log('foobar baz noz', arguments);
            window.console.warn('Ooops');
            window.console.log('That is a cool new feature');
            window.console.log('Now the feature is complete');

            window.console.log('Never use alerts, they block the event loop');
            window.console.log('that was really nasty :-O');
        }
    };
});
