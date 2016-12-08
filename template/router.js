'use strict';

const router = require('koa-router')();

let auth = require('./middleware/auth');

let home = require('./controller/home');
let vue = require('./controller/vue');


router.get('/', auth(), home.get);
router.get('/vue(/.+)?', vue.get);


let route = function(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = route;
