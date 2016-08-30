'use strict';

let core = {


    get() {
        return function *(next) {
            console.log('auth pass');
            yield *next;
        };
    }
};

module.exports = core.get;
