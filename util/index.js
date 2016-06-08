'use strict';

const spawn = require('child_process').spawn;

let core = {
    spawn: function(cli, para){

        let sli = spawn(cli, para);

        sli.stdout.on('data', (data) => {
            console.log(`${data}`);
        });

        sli.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        sli.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

        // return sli;
    },
    getEnv: function(env){

        return env === 'yz' ||  env === 'online' ? env : 'dev';
    }

};

module.exports = core;
