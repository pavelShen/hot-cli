'use strict';

const spawn = require('child_process').spawn;

let core = {
    spawn: function(cli, para){

        let sli = spawn(cli, para);

        sli.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        sli.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        sli.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

        // return sli;
    }

};

module.exports = core;
