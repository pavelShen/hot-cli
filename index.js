'use strict';

const program = require('commander');
const fs = require('fs-extra');
let util = require('./util');
let packageJson = require('./package.json');

program
    .version(packageJson.version);

program
    .command('init [name]')
    .description('init a project, folder structure')
    .action((name) => {

        if(!name) {
            console.log('input a folder name');
            return;
        }
        try {
            fs.copySync(__dirname + '/template', name);
            console.log('initialize a folder structure', name);
        } catch (err) {
            console.log('copy template error:', err);
        }
    });

program
    .command('serve')
    .description('start a local server for developping')
    .action(() => {
        util.spawn('npm', ['run', 'dev']);
    });

program
    .command('pack [env]')
    .description('build static resources')
    .action(function(env) {

        env = util.getEnv(env);
        if (env === 'dev') {
            util.spawn('npm', ['run', 'fedev']);
        } else {
            util.spawn('npm', ['run', 'febuild']);
        }

        console.log('building %s env with mode', env);
    });

program
    .command('upload [env]')
    .description('upload static resources')
    .action((env) => {
        env = util.getEnv(env);

        if (env === 'dev') {
            util.spawn('npm', ['run', 'ftpdev']);
        } else {
            util.spawn('npm', ['run', 'ftpbuild']);
        }

        console.log('upload resource on environment', env);
    });

program
    .command('new [name]')
    .description('new one front-end workdir')
    .action((name) => {
        try {
            fs.copySync(__dirname + '/template_fe', name + '/front');
            console.log('initialize a folder structure', name);
            util.spawn('cd', [name]);
        } catch (err) {
            console.log('copy template error:', err);
        }
    });

program
    .command('target [name]')
    .description('check and change the compile target path')
    .action((name) => {

    });

program
    .command('status')
    .action(() => {
        util.spawn('npm', ['run', 'status']);
    });

program.parse(process.argv);
