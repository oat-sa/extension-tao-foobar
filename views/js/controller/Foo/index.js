define([], function(){
    'use strict';

    return {
        start : function start(){
            //foo starts
            window.console.log('foo', arguments, this);
        }
    };
});
