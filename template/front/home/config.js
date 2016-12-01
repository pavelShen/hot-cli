'use strict';

let pack = require('../../webpack.config.js');

let config = pack.config;

/**
    ## U can use field below ##
    config.entry [object]
    config.output [object]
    config.module.loaders [array]
    config.plugins [array]
    config.watch
    config.debug
    config.devtool

    pack.addEntry('name', 'filename')
    eg:
        pack.addEntry('detail', 'detail.js');
 */

pack.addEntry('main', 'main.js');

// config.entry.vendor = ['vue'];
// config.plugins.push(pack.plugins.vendor);

config.module.loaders.push(pack.modules.babel);


module.exports = config;
