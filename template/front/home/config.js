'use strict';

let pack = require('../../webpack.config.js');

let clientPack = pack.clientPack,
    serverPack = pack.serverPack;

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

 // pack.addSSR('server', 'server.js');

// config.entry.vendor = ['vue'];
// config.plugins.push(pack.plugins.vendor);

clientPack.module.loaders.push(pack.modules.babel);


module.exports = {
    clientPack,
    serverPack
};
