'use strict';

const path = require('path');
const koa = require('koa');
const validator = require('koa-validate');
const session = require('koa-session');
const favicon = require('koa-favicon');
const serve = require('koa-static');
const helmet = require('koa-helmet');
const etag = require('koa-etag');
const compress = require('koa-compress');
const compose = require('koa-compose');
const error = require('koa-error');
const conditional = require('koa-conditional-get');
const koaNunjucks = require('koa-nunjucks-2');


/**
 * local frontend hot module development
 */
const logger = require('koa-logger');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

// const ratelimit = require('koa-ratelimit');
// const session = require('koa-generic-session');
// const redisStore = require('koa-redis');
//

let util = require('./util');
let router = require('./router');

let app = koa();

app.name = 'hot application';

app.keys = ['black code'];

// local development environment using hot-reload, Very HOT!
if(util.isDEV){
    let pack = require('./config/pack.json');
    let configPath = `./${pack.base}/${pack.target}/config.js`;
    let packfig = require(configPath);
    let complier = webpack(packfig);

    app.use(webpackDevMiddleware(complier, {
        publicPath: packfig.output.publicPath,
        noInfo: false,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(complier));

    app.use(logger());
}

app.context.render = koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        autoescape: true,
        noCache: util.isDEV
    }
});

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(serve(__dirname + '/public'));

let middlewares = compose([
    compress(),
    conditional(),
    etag(),
    helmet(),
    validator()
]);

app.use(middlewares);

app.use(error({
    template: path.resolve(__dirname, 'views/error.html')
}));

router(app);

app.use(function*() {
    this.status = 404;
    yield this.render('404');
});

app.on('error', function(err) {
    console.error('server error', err);
});

module.exports = app;
