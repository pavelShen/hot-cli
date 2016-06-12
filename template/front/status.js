'use strict';

let config = require('../config/pack.json');

for(let key in config){
    if(config.hasOwnProperty(key)){
        let keyName;
        if(key.length < 10){
            keyName = key + new Array(10 - key.length).join(' ');
        }
        console.log(keyName, ' :    ', config[key]);
    }
}
