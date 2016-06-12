'use strict';

import demo from './component/compone.js';
import './main.scss';

var core = {
    init(){
        this._create();
    },
    _create(){
        console.log('create');
    },
    data(){
        return {
            msg: 'test',
        };
    }
};

demo.logTime();
core.init();
