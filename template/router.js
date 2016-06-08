'use strict';

const router = require('koa-router')();

let auth = require('./middleware/auth');

let home = require('./controller/home');


router.get('/', auth(), home.get);


let route = function(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = route;
