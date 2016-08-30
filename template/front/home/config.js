'use strict';

let pack = require('../../webpack.config.js');

// config.entry [object]
// config.output [object]
// config.module.loaders [array]
// config.plugins [array]
// config.watch
// config.debug
// config.devtool

let config = pack.config,
    modules = pack.modules;

config.module.loaders.push(modules.babel);

module.exports = config;
