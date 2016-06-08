'use strict';

let core = {


    get: function() {
        return function *(next) {
            console.log('auth pass');
            yield *next;
        };
    }
};

module.exports = core.get;
