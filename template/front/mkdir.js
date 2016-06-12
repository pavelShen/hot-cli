'use strict';

const fs = require('fs-extra');
const path = require('path');

let config = require('../config/pack.json');

let argvs = process.argv.slice(2);
let dir = argvs[0];
let base = path.resolve(__dirname, '../', config.base);
let files = fs.readdirSync(base);
let origin = '_template';

if (dir) {
    for (let i = 0; i < files.length; i++) {
        if (files[i] === dir) {
            console.log('error: the folder has existed.');
            return;
        }
    }
    let clone = path.resolve(base, origin);
    let targetDir = path.resolve(base, dir);
    // fs.mkdirsSync(targetDir);
    fs.copySync(clone, targetDir);

    let configFile = path.resolve(__dirname, '../config/pack.json');
    config.target = dir;
    fs.writeJSONSync(configFile, config);

    console.log('mkdir success. and change compile dir to ', dir);
} else {
    let info = `use this command to create an new project\nplus a folder name`;
    console.log(info);
}
