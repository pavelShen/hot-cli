'use strict';

const path = require('path');
const webpack = require('webpack');
const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const fs = require('fs-extra');
const ftp = require('vinyl-ftp');

// ============================
// config
// ============================

let util = require('./util');
let config = require('./config/pack.json');
let ftpAccount = require('./config/ftp.js');
let base = path.resolve(config.base, config.target);
let dest = path.resolve(config.dest, config.target);

gulp.task('clean', () => {

    dest += util.isRelease || util.isPRE ? '/build' : util.isQA ? '/qa' : '/dev';

    let dir = path.resolve(dest);

    fs.emptyDir(dir, function(err) {
        if (!err) {
            console.log('clean success!');
        }
    });
});

let dependTask = util.isLocal ? [] : ['clean'];

const bundle = type => {
    let configPath = './' + config.base + '/' + config.target + '/config.js';
    let pack = require(configPath);

    let packConfig = type === 'node' ? pack.serverPack : pack.clientPack;

    webpack(packConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('webpack', stats.toString({
            colors: true
        }));
    });
}
gulp.task('webpack', dependTask, () => {
    bundle('client');
});

gulp.task('ssr', ()=>{
    bundle('node');
})

gulp.task('front', ['webpack'], () => {
    console.log('frontend resource packaging...');
});

function startNodemon(env) {
    let config = {
        script: './bin/server.js',
        ext: 'js html',
        env: {
            NODE_ENV: env,
            DEBUG: 'hot'
        },
        execMap: {
            js: 'node --debug=5801'
        },
        ignore: [
            '.git',
            'front',
            'views',
            'node_modules/**'
        ],
        tasks: []
    };

    nodemon(config).on('restart', () => {
        console.log('node app restarted!');
    });
}

gulp.task('dev', () => {
    startNodemon('local');
});

// ============================
// ftp 上传
// ============================

// devres, yzres


function upload(env){

    let localEnv = env === 'qa' ? 'dev' : env;

    let server = ftp.create({
        host: ftpAccount[localEnv].host,
        user: ftpAccount[localEnv].user,
        password: ftpAccount[localEnv].password,
        parallel: 10,
        log: gutil.log
    });

    let sourceDir = dest;

    sourceDir += env === 'dev' ? '/dev' : env === 'qa' ? '/qa' : '/build';

    let globs = [sourceDir + '/**'],
        files = fs.readdirSync(sourceDir),
        uploadUrl = ftpAccount.uploadPath,
        target = config.target;

    let destDir = uploadUrl + '/' + target;
    let publicPath = util.getPublicPath(target);

    destDir += env === 'dev' ? '/dev' : env === 'qa' ? '/qa' : '/build';

    console.log('upload resource:');
    for (let i = 0; i < files.length; i++) {
        console.log(`${publicPath}/${files[i]}`);
    }

    return gulp.src(globs, {buffer: false})
        .pipe(server.newer(destDir))
        .pipe(server.dest(destDir));
}

gulp.task('ftp:dev', () => {
    upload('dev');
});

gulp.task('ftp:qa', () => {
    upload('qa');
});

gulp.task('ftp:yz', function(){
    upload('yz');
});
