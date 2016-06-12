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
let dest = path.resolve(config.dest, config.target);

gulp.task('clean', () => {

    dest += util.isRelease ? '/build' : '/dev';

    let dir = path.resolve(dest);

    fs.emptyDir(dir, function(err) {
        if (!err) {
            console.log('clean success!');
        }
    });
});

let dependTask = util.isRelease ? ['clean'] : [];

gulp.task('webpack', dependTask, () => {

    let configPath = './' + config.base + '/' + config.target + '/config.js';
    let fig = require(configPath);

    webpack(fig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('webpack', stats.toString({
            colors: true
        }));
    });
});

gulp.task('front', ['webpack'], () => {
    console.log('frontend resource packaging...');
});

function startNodemon(env) {
    let config = {
        script: './bin/server.js',
        ext: 'js html',
        env: {
            NODE_ENV: env,
            DEBUG: 'lm'
        },
        ignore: [
            '.git',
            'front',
            'node_modules/**'
        ],
        tasks: []
    };
    if (env === 'development') {
        config.ignore.push('views');
    }
    nodemon(config).on('restart', () => {
        console.log('node app restarted!');
    });
}

gulp.task('dev', () => {
    startNodemon('development');
});

// DEPRECATED
gulp.task('qa', ['front'], () => {
    startNodemon('qa');
});


// ============================
// ftp 上传
// ============================

let ftpAccount = {
    dev : {
        host: '10.10.50.66',
        user: 'hjdev_pt',
        password: 'pX8YR4',
    },
    yz: {
        host: '10.10.30.122',
        user: 'hjdev_pt',
        password: 'pX8YR4'
    }
};


function upload(env){

    let server = ftp.create({
        host: ftpAccount[env].host,
        user: ftpAccount[env].user,
        password: ftpAccount[env].password,
        parallel: 10,
        log: gutil.log
    });

    let sourceDir = dest;

    sourceDir += env === 'dev' ? '/dev' : '/build';

    let globs = [sourceDir + '/**'],
        files = fs.readdirSync(sourceDir),
        uploadUrl = config.uploadPath,
        target = config.target;

    let destDir = uploadUrl + '/' + target;
    let publicPath = util.getPublicPath(target);

    destDir += env === 'dev' ? '/dev' : '/build';

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

gulp.task('ftp:yz', function(){
    upload('yz');
});
