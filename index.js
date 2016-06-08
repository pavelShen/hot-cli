'use strict';

const program = require('commander');
const fs = require('fs-extra');
let util = require('./util');
let packageJson = require('./package.json');

program
    .version(packageJson.version);

program
    .option('-p, --pepper', 'Add peppers');

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
            util.spawn('cd', [name]);
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
    .command('test [env]')
    .description('exec a command line')
    .action((env) => {
        env = util.getEnv(env);
        console.log(env);
        util.spawn('ls', ['-l', '/Users/roei/D/github']);
    });

program
    .command('build [env]')
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
    .action(function(env) {
        env = util.getEnv(env);

        if (env === 'dev') {
            util.spawn('npm', ['run', 'ftpdev']);
        } else {
            util.spawn('npm', ['run', 'ftpbuild']);
        }

        console.log('upload resource on environment', env);
    });

program
    .command('status')
    .action(() => {
        util.spawn('npm', ['run', 'status']);
    });

program.parse(process.argv);

if (program.pepper) {
    console.log('add a option here');
}
