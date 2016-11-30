'use strict';

const path = require('path');
let pack = require('../../webpack.config.js');

// config.entry [object]
// config.output [object]
// config.module.loaders [array]
// config.plugins [array]
// config.watch
// config.debug
// config.devtool

let config = pack.config,
    modules = pack.modules,
    plugins = pack.plugins,
    base = pack.base;

/**
 ### code splitting, set multiple entries
 config.entry = {
     login: path.resolve(base, 'login.js'),
     main: path.resolve(base, 'main.js'),
     vendor: ['vue', 'vue-router', 'vue-resource'],
 }
 ### add plugins.vendor in plugins when u set vendor in entry config
 config.plugins.push(plugins.vendor);
 */

config.module.loaders.push(modules.babel);

module.exports = config;
