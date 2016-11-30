# hot-cli

基于Koa的全栈开发脚手架命令行

    #
     __    __    ______   .___________.        ______  __       __
    |  |  |  |  /  __  \  |           |       /      ||  |     |  |
    |  |__|  | |  |  |  | `---|  |----`______|  ,----'|  |     |  |
    |   __   | |  |  |  |     |  |    |______|  |     |  |     |  |
    |  |  |  | |  `--'  |     |  |           |  `----.|  `----.|  |
    |__|  |__|  \______/      |__|            \______||_______||__|


开发体验友好，对前端伙伴友好

对mac用户友好一点

### 安装

    npm i -g hot-cli

### 快速上手

    1.hot init [project name]
    => 初始化项目目录结构 | 注：project name不传，即在当前目录下初始化

    2.npm i
    => 安装npm包

    3.hot serve
    => 启用本地开发服务, 就可以看到一个demo页面了

### 包含

    - koa
    - browser-side developping
    - server-side developping
    - browser-sync
    - template nunjucks
    - webpack
    - hot-reload

### 命令行

    hot init [name] *       // 初始化目录结构
    hot serve               // 启用本地开发服务
    hot pack [env]          // 打包浏览器端静态资源
    hot upload [env]        // 上传浏览器端静态资源
    hot new [name]          // 新建一个浏览器端源编译目录
    hot on [name]           // 检查或更改浏览器端编译目录

### 目录结构

    |---  /bin              // node起进程
    |---  /config           // 一些配置文件
    |---  /controller
    |---  /front            // 前端编译文件夹
    |---  /middleware       // 自定义中间件
    |---  /mock
    |---  /public           // static
    |---  /test
    |---  /util             // 工具集合
    |---  /views            // 视图
    |---  app.js
    |---  router.js

### 开发后续

1. 开发完/新建浏览端编译目录时

    hot pack dev

    PS: 当hot new 后，必执行下 hot pack, 将生成一个manifest文件用作mapping。碰到‘manifest.json not found’问题，执行下hot pack



2. 打包完，上传静态资源服务器

    hot upload dev

    注： 这里需要先配置ftp的账号，密码等，在config文件中
        这里的上传流程没有必要性，可自行解决

3.注意
    windows伙伴需要改一些设置
    初始化完可以在package.json 修改一些参数
    比如 NODE_ENV=qa ... 改成 set NODE_ENV=qa && ...
    （不保证正常运行）

### 交互模式

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

### 更新

   2016/11/30 新增“code-split”多入口前端模板demo。具体看生成的前端项目文件夹中的config.js

### 关于
- author: roei
- Copyright (c) 2016 All rights reserved.
