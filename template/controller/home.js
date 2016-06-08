'use strict';

const debug = require('debug')('lm');

let util = require('../util');


let core = {

    get: function*() {

        // let user = this.session.user;

        let target = 'mobile';
        let manifest = util.getManifest(target);
        let publicPath = util.getPublicPath(target);

        let data = {
            isDEV: util.isDEV,
            user: {
                id: 122343,
                name: 'Kuro',
                avatar: 'http://i2.hjfile.cn/f200/82/35/13568235.jpg',
            },
            css: publicPath + manifest['main.css'],
            js: publicPath + manifest['main.js'],
            locals:{
                banner:{
                    src: 'http://img.zcool.cn/community/01bdf7572a19db6ac725381256a469.jpg@900w_1l_2o',
                    title: 'zcool'
                },
                list1: {
                    data:[
                            {title: 'test demo link 1', href:'http://m.hujiang.com'},
                            {title: 'test demo link 2', href:'http://m.hujiang.com'},
                            {title: 'test demo link 3', href:'http://m.hujiang.com'}
                        ]
                },
                list2: {
                    data: [
                            {title: 'test demo link 4', href:'http://m.hujiang.com'},
                            {title: 'test demo link 5', href:'http://m.hujiang.com'},
                            {title: 'test demo link 6', href:'http://m.hujiang.com'},
                            {title: 'test demo link 7', href:'http://m.hujiang.com'}
                        ]
                },
                list3: {
                    data: [
                            {title: 'test demo link 8', href:'http://m.hujiang.com'},
                            {title: 'test demo link 9', href:'http://m.hujiang.com'}
                        ]
                }
            }
        };
        yield this.render('home', data);
    }
};

module.exports = core;
