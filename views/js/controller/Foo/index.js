define([], function(){
    'use strict';

    return {
        start : function start(){
            new Promise(function(resolve){
                setTimeout(function(){
                    resolve();
                }, 150);
            })
            .then(function(){
                console.log('Master of the time ?');
            })
            .catch(function(err){
                console.error('Master of the space ', err);
            });
        }
    };
});
