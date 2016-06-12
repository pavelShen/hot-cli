# hot-cli

**program still in beta~**

A tool can generate a complete scaffold for Node.js full-stack developping

friendly for newbies to get started

includes

- webpack
- hot-reload
- node
- browser-side developping
- server-side developping
- browser-sync

mostly for mac users.

### command line

    hot init [name] *       // initialize a scaffold

    hot pack dev            // run webpack package
    hot pack pre
    hot pack online

    hot upload dev          // upload your static resouces
    hot upload pre

    hot serve               // start a local server for local developping

    hot new [name]          // create a front-end workdir
    hot on [name]           // check or change front compile path

### how to use

start a new project

    hot init [project name]
    cd [project name] && npm install
    hot serve

when finish developping, package your static resources and upload to ftp

**upload need config first**

    hot pack dev
    hot upload dev

### attentions
app restart when modify files those are server-side files
files in 'front' won't cause restart, it will affect browser-side

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
