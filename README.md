# hot-cli

A tool can generate a complete scaffold for Node.js full-stack developping

    #
     __    __    ______   .___________.        ______  __       __
    |  |  |  |  /  __  \  |           |       /      ||  |     |  |
    |  |__|  | |  |  |  | `---|  |----`______|  ,----'|  |     |  |
    |   __   | |  |  |  |     |  |    |______|  |     |  |     |  |
    |  |  |  | |  `--'  |     |  |           |  `----.|  `----.|  |
    |__|  |__|  \______/      |__|            \______||_______||__|

friendly for newbies to get started, also you can use it as a front-end dev server.

### install

    npm i -g hot-cli

### quick start

    1.hot init [project name]
    => initialize the basic structure

    2.npm i
    => install npm modules

    3.hot serve
    => start a local development server, and now is your time

### includes

    - webpack
    - hot-reload
    - node
    - browser-side developping
    - server-side developping
    - browser-sync
    - template nunjucks

    mostly for mac users.

### command line

    hot init [name] *       // initialize a scaffold
    hot serve               // start a local server for local developping
    hot pack [env]          // run webpack package
    hot upload [env]        // upload your static resouces
    hot new [name]          // create a front-end workdir
    hot on [name]           // check or change front compile path

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


### After
1. when finished browser-side developping or 'hot new some project'

    hot pack dev

    PS: when hot new 'some project', it won't generate a manifest that for mapping.

REMEMBER: ** hot pack after hot new ** , or u will got a 'manifest not found' error

2. after pack the resources

    hot upload dev

    PS: here you need modify some settings in config folder
        config your ftp account, password, etc.
        actually, you can just pass this step, make it your own way
    PS2: the static resources path will look like {ftpPath}/{uploadPath}/{your packed resources}

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

### update

    2016/11/30 add front template with 'code-split' setting.

### about
- author: roei
- Copyright (c) 2016 All rights reserved.
