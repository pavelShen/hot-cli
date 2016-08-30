# hot-cli

A tool can generate a complete scaffold for Node.js full-stack developping

friendly for newbies to get started

includes

- webpack
- hot-reload
- node
- browser-side developping
- server-side developping
- browser-sync
- template nunjucks

mostly for mac users.

### install

    npm i -g hot-cli


### command line

    hot init [name] *       // initialize a scaffold
    hot pack [env]          // run webpack package
    hot upload [env]        // upload your static resouces
    hot serve               // start a local server for local developping
    hot new [name]          // create a front-end workdir
    hot on [name]           // check or change front compile path

### how to use

start a new project

    hot init [project name]
    cd [project name] && npm install
    hot serve
    hot pack dev

when finish developping, package your static resources and upload to ftp

**upload setting need be configed first**

    hot pack dev
    hot upload dev

**config your ftp account**

in '/config/ftp.js', fill the uploadPath and ftp account

it'll output like {ftpPath}/{uploadPath}/{your packed resources}

### attentions
app restart when modify files those are server-side files

files in 'front' won't cause restart, it will affect browser-side

for windows users, you can change scripts in package.json

especially change 'NODE_ENV=production ...' to 'set NODE_ENV= production && ...'

### structure

    |---  /bin              // node execute file
    |---  /config           // configuration
    |---  /controller
    |---  /front            // front-end files for webpack package
    |---  /middleware       // custom middleware
    |---  /mock
    |---  /public
    |---  /test
    |---  /util             // some utility functions
    |---  /views
    |---  app.js
    |---  router.js

### interaction

    #
               +-------------------+
               |      browser      | ---> js, css, html
               +-------+---^-------+
                       |   |
               +-------v---+-------+
               |    renderServer   | ---> Node.js
               +-------+---^-------+
           ------------|---|------------
               +-------v---+-------+
               |        api        | ---> java, c#, etc
               +-------+---^-------+
                       |   |
               +-------v---+-------+
               |      database     |
               +-------------------+


### about
- author: roei
- Copyright (c) 2016 All rights reserved.
