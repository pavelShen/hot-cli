'use strict';

let env = process.env.NODE_ENV;

let config = require('../config/ftp.js');
let pack = require('../config/pack.json');

let core = {
    env: env,
    isLocal: env === 'local',
    isDEV : env === 'development',
    isQA : env === 'qa',
    isPRE : env === 'yz',
    isRelease : env === 'production',
    getPublicPath(target){
        let isCurrent = pack.target === target;
        let pathStr = isCurrent && this.isLocal ? `/${target}/`
                    : this.isDEV ? `http://devres.hjfile.cn/pt/${config.uploadPath}/${target}/dev/`
                    : this.isQA ? `http://qares.hjfile.cn/pt/${config.uploadPath}/${target}/qa/`
                    : this.isPRE ? `http://yzres.hjfile.cn/pt/${config.uploadPath}/${target}/build/`
                    : this.isRelease ?  `http://res.hjfile.cn/pt/${config.uploadPath}/${target}/build/`
                    : `/page/${target}/dev/`;
        return pathStr;
    },
    getManifest(target){
        let dir = this.isRelease || this.isPRE ? '/build' : this.isQA ? '/qa' : '/dev',
            manifest = require(`../public/page/${target}/${dir}/manifest.json`);
        return manifest;
    },
    isOnCompile(target){
        return pack.target === target;
    }
};

module.exports = core;
