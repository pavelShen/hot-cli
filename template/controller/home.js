'use strict';

let util = require('../util');

let core = {

    * get() {

        let data = util.getRenderData('home');

        data.user = {
            id: 122343,
            name: 'Kuro',
            avatar: 'http://i2.hjfile.cn/f200/82/35/13568235.jpg',
        };

        data.locals = {
            banner:{
                src: 'http://img.zcool.cn/community/01bdf7572a19db6ac725381256a469.jpg@900w_1l_2o',
                title: 'zcool'
            }
        };

        

        yield this.render('home', data);
    }
};

module.exports = core;
