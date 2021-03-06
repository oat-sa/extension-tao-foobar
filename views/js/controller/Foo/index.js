define([], function(){
    'use strict';

    return {
        start : function restart(){

            console.log('A some new features.');

            new Promise(function(resolve){
                setTimeout(function(){
                    resolve();
                }, 150);
            })
            .then(function(){
                console.log('Master of the time ?');
                console.log('Master of puppets...');
                console.log('Master of BBQ');
            })
            .catch(function(err){
                window.console.error('Master of the space ', err);
            });
        }
    };
});
