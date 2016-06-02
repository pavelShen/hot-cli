'use strict';

var program = require('commander');
var packageJson = require('./package.json');

program
    .version(packageJson.version)
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble');


program
    .command('init')
    .description('init a scaffold')
    .action(function(){
        console.log('initialize a folder structure');
    });

program
    .command('build [env]')
    .description('build static resources')
    .action(function(env){
        env = env || 'dev';
        console.log('building %s env with mode', env);
    });

program
    .command('upload [env]')
    .description('upload static resources')
    .action(function(env){
        env = env || 'dev';
        console.log('upload resource on environment', env);
    });

program
    .command('*')
    .action(function(){
        console.log('oops, check your command, seems like no-match');
    });


if (program.peppers) {
    console.log('  - peppers');
}
if (program.pineapple) {
    console.log('  - pineapple');
}
if (program.bbqSauce) {
    console.log('  - bbq');
}
if (program.cheese) {
    console.log('cheese');
}


program.parse(process.argv);
