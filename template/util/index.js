'use strict';

let env = process.env.NODE_ENV;

let config = require('../config/ftp.js');

let core = {
    env: env,
    isDEV : env === 'development',
    isQA : env === 'qa',
    isPRE : env === 'pre',
    isRelease : env === 'production',
    getPublicPath(target){
        let pathStr = this.isDEV ? `/${target}/`
                    : this.isQA ? `http://devres.hjfile.cn/pt/${config.uploadPath}/${target}/dev/`
                    : this.isPRE ? `http://yzres.hjfile.cn/pt/${config.uploadPath}/${target}/build/`
                    : this.isRelease ?  `http://res.hjfile.cn/pt/${config.uploadPath}/${target}/build/`
                    : `/page/${target}/`;
        return pathStr;
    },
    getManifest(target){
        let dir = this.isRelease ? '/build' : '/dev',
            manifest = require(`../public/page/${target}/${dir}/manifest.json`);
        return manifest;
    }
};

module.exports = core;
