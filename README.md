# hot-cli

A tool can generate a complete scaffold for Node.js full-stack developping

includes

- webpack
- hot-reload
- node
- browser-side developping
- server-side developping
- browser-sync

mostly for mac users.

### command line

    hot init [name] *   // initialize a scaffold

    hot build dev       // run webpack package
    hot build yz
    hot build online

    hot upload dev      // upload your static resouces, need config first
    hot upload yz

    hot serve           // start a local server for local developping

    hot status          // check current project info
    hot new [name]
    hot dir [name]



### how to use

start a new project

    hot init demo
    cd demo
    npm install
    hot serve

when finish developping, package your static resources and upload to ftp

    hot build dev
    hot upload dev

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
