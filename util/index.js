'use strict';

// const spawn = require('child_process').spawn;
const spawn = require('cross-spawn')

let core = {
    spawn: function(cli, para){

        let cmd = spawn(cli, para, {
            stdio: 'inherit'
        })
        console.log('info: using cross-spawn')
        // console.log(cmd.stdout);
        try{
            cmd.stdout.on('data', (data) => {

                console.log(`${data}`)
            });

            cmd.stderr.on('data', (data) => {
                console.log(`ERROR: stderr > ${data}`)
            });

            cmd.on('close', (code) => {
                console.log(`INFO: exited with code ${code}`)
            });

        }catch(err){
            // Attention:
            // can't read property 'on' of cmd.stdout, cmd.stdout equal null
            // some like the node process mechanism
        }
    },
    getEnv: function(env){
        return env === 'pre' ||  env === 'online' ? env : 'dev'
    }

};

module.exports = core;
