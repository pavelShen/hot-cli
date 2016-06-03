'use strict';

const program = require('commander');
const Table = require('cli-table');
const Git = require('nodegit');
const spawn = require('child_process').spawn;

let packageJson = require('./package.json');

program
    .version(packageJson.version);


program
    .option('-p, --pepper', 'Add peppers');

program.parse(process.argv);

if (program.pepper) {
    console.log('add a option here');
}


program
    .command('init')
    .description('init a scaffold')
    .action(() => {


        Git.Clone('https://github.com/Roeis/HotFe.git', 'demo', {
                fetchOpts : {
                    callbacks: {
                        certificateCheck: function(){ return 1;}
                    }
                }
            })
            .then(repo => {
                console.log(repo)
            })
            .catch(err => {
                console.log('error:', err);
            });
        console.log('initialize a folder structure', this);
    });

program
    .command('exec')
    .description('exec a command line')
    .action(() => {
        let ls = spawn('ls', ['-lh', '/Users/roei/D/github/hot-cli']);

        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        ls.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    })

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

// program
//     .command('*')
//     .action(function(){
//         console.log('oops, check your command, seems like no-match');
//     });

program
    .command('status')
    .action(options => {
        console.log('do the status job', options);
    });

program.parse(process.argv);
