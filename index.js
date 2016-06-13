'use strict';

const path = require('path');
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
            console.log('WARNING:input a folder name');
            return;
        }
        try {
            let pwd = process.cwd();
            let folders = fs.readdirSync(pwd);
            for(let i = 0; i < folders.length; i++){
                if(folders[i] === name){
                    console.log('WARNING: folder has existed');
                    return;
                }
            }
            fs.copySync(__dirname + '/template', name);
            console.log('SUCCESS: initialize a folder structure', name);
        } catch (err) {
            console.log('ERROR: copy template error:', err);
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

        console.log('INFO: building %s env with mode', env);
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

        console.log('INFO: upload resource on environment', env);
    });

program
    .command('new [name]')
    .description('new one front-end workdir')
    .action((name) => {
        let pwd = process.cwd();

        console.log(pwd, name, __dirname);
        if(!name){
            console.log('input a folder name');
            return;
        }else{
            let existedFiles = fs.readdirSync( pwd + '/front');
            for(let i = 0; i < existedFiles.length; i++){
                if(existedFiles[i] === name){
                    console.log('WARNING: folder has existed');
                    return;
                }
            }
            try {
                let clone = __dirname + '/template_fe';
                let target = pwd + '/front/' + name;
                fs.copySync(clone, target);

                let packJson = require(pwd + '/config/pack.json');
                let packJsonPath = path.resolve(pwd + '/config/pack.json');
                packJson.target = name;
                fs.writeJSONSync(packJsonPath, packJson);
                console.log('SUCCESS: initialize one front-end folder - ', name);
            } catch (err) {
                console.log('ERROR: copy template error - ', err);
            }
        }
    });

program
    .command('on [name]')
    .description('check and change the compile target path')
    .action((name) => {
        let pwd = process.cwd();
        let packJson = require(pwd + '/config/pack.json');
        let packJsonPath = path.resolve(pwd + '/config/pack.json');
        if(name){
            packJson.target = name;
            fs.writeJSONSync(packJsonPath, packJson);

        }else{
            console.log('INFO: current front compile at ', packJson.target);
            let files = fs.readdirSync(pwd + '/front');
            for(let i = 0; i < files.length; i++){
                let filePath = path.resolve(pwd, 'front', files[i]);
                let stat = fs.statSync(filePath);
                if(stat.isDirectory()){
                    console.log(i,files[i]);
                }
            }
        }
    });

program.parse(process.argv);
