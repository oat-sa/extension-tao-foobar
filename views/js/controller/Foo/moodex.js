define([], function(){
    'use strict';

    return {
        start(){

            //foo starts
            window.console.warn('Ooops');
            window.console.log('That is a cool new feature');
            window.console.log('Now the feature is complete');

            window.console.log('Never use alerts, they block the event loop');
            window.console.log('that was really nasty :-O');
            window.console.log('Look, Ma, opensource!')

            window.addEventListener('error', function(err){
                window.console.error(err);
            });
        }
    };
});
