define([], function () {
    'use strict';

    return {
        start() {
            if (!window.console) {
                return;
            }

            window.console.warn('Ooops');
            window.console.log('My first tao code');

            window.addEventListener('error', function (err) {
                window.console.error('oops error', err);
            });
        },

        stop() {
            window.console.log(`stop it`);
        }
    };
});
