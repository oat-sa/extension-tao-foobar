define([], function(){
    'use strict';

    return {
        start(){
            //foo starts

            // if developer tool is not open in ie, console is not available on window
            if (!window.console) {
                return;
            }



            window.console.log('foobar baz noz', arguments);
            window.console.warn('Ooops');
            window.console.log('That is a cool new feature');
            window.console.log('Now the feature is complete');
            window.console.log('yet another console log...');

            window.console.log('Never use alerts, they block the event loop');
            window.console.log('that was really nasty :-O');
            window.console.log('Are you sure, alert are pretty convenient');
            window.console.log('document.write is actually convenient');
            window.console.log('or just write in document.body.innerHTML');
            window.console.log('May the force be with you');
            window.console.log('I prefer the dark side');

            window.addEventListener('error', function(err){
                window.console.error(err);
            });
        }
    };
});
