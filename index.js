'use strict';

const program = require('commander');
const Table = require('cli-table');
const Git = require('nodegit');

let util = require('./util');
let packageJson = require('./package.json');

program
    .version(packageJson.version);

program
    .option('-p, --pepper', 'Add peppers');

program
    .command('init')
    .description('init a project, folder structure')
    .action(() => {

        let cloneUrl = 'https://github.com/Roeis/HotFe.git',
            targetPath = __dirname,
            opts = {
                fetchOpts: {
                    // offical bug-fix on mac. some authentication issue
                    callbacks: {
                        certificateCheck: function() {
                            return 1;
                        }
                    }
                }
            };
        console.log('initialize a folder structure', this);

        Git.Clone(cloneUrl, targetPath, opts)
            .catch(err => {
                console.log('error:', err);
            });

    });

program
    .command('run [env]')
    .description('start a local server for developping')
    .action((env) => {
        console.log(env);
        util.spawn('npm', ['run', 'dev']);
    });

program
    .command('exec')
    .description('exec a command line')
    .action(() => {

        util.spawn('ls', ['-l', '/Users/roei/D/github/demo']);

    });

program
    .command('build [env]')
    .description('build static resources')
    .action(function(env) {
        env = env || 'dev';
        console.log('building %s env with mode', env);
    });

program
    .command('upload [env]')
    .description('upload static resources')
    .action(function(env) {
        env = env || 'dev';
        console.log('upload resource on environment', env);
    });

program
    .command('status')
    .action(options => {
        console.log('do the status job', options);
    });

program.parse(process.argv);


if (program.pepper) {
    console.log('add a option here');
}
