'use strict';

const fs     = require('fs');
const path   = require('path');

let config = require('../config/pack.json');

var argvs    = process.argv.slice(2);
var dir      = argvs[0];
var base     = path.resolve(__dirname, '../', config.base);
var filePath = path.resolve(__dirname, '../config/pack.json');
var file     = fs.readFileSync(filePath, 'utf-8');
var fileJson = JSON.parse(file);

if(dir){
    fileJson.target = dir;
    file = JSON.stringify(fileJson);

    fs.writeFileSync(filePath, file, 'utf-8');
    console.log('change compile directory to: ', dir);
}else{
    let files = fs.readdirSync(base);

    console.log('current compile directory',fileJson.target);
    for(let i = 0; i < files.length; i++){
        let filePath = path.resolve(base, files[i]);
        let stat = fs.statSync(filePath);
        if(stat.isDirectory()){
            console.log(i,files[i]);
        }
    }
}
