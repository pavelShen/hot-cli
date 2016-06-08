# 基于Node前后端分离工作流

极致开发体验

本地“npm run dev”集成前端热重载构建，后端刷新构建。

敲着代码，静静的看着页面飞吧~

前后端分离：

    基于Node的前后端职责分离
    Node负责"前端", 渲染工作
    .net负责"后端", 提供接口

    前后端角色的职责分离，前后端都包含服务器端

### 结构

    交互模式如下：

            +-------------------+
            |      browser      | ---> js, css, html
            +-------+---^-------+
                    |   |
            +-------v---+-------+
            |    renderServer   | ---> Node.js
            +-------+---^-------+
        ------------|---|------------
            +-------v---+-------+
            |        api        | ---> .net
            +-------+---^-------+
                    |   |
            +-------v---+-------+
            |      database     |
            +-------------------+

            直观的可以看到，即以API层为界限划分前端后端的职责

    Node:

                   request
                      |
            +---------V---------+
            |    application    |
            +---------+---------+
            |     middlewares   |
            +---------+---------+
            |      router       |   --> with custom middleware
            +---------+---------+
            |     controller    |
            +---------+---------+
            |       render      |   --> request API data to assemble template
            +---------+---------+
                      |
                      V
                   response

    前端页面

        layout + modules， 页面组成皆模块
        一个布局信息 + 模块 （树状结构，递归渲染）

        module 包含 DOM结构，自身data

        Nodejs本身的模板优势，天生支持页面端和服务端模板共享，且玩法多样

            +-------------------------+   ---
            |  +-------------------+  |    |
            |  |      module       |  |
            |  +-------------------+  |
            |  +--------+             |
            |  |        |             |
            |  | module |             |    |-----> layout
            |  |        |             |
            |  +--------+             |
            |                         |
            |                         |    |
            +-------------------------+   ---

    运维
        测试：
            istanbul覆盖测试和mocha单元测试

        日志:
            日志将保存守护进程PM2中
            （PM2支撑热重载，自动重启）

        监控:
            备选Onenpm

        缓存:
            前面有一层CDN
            ##希望可以接入redis缓存

        发布:
            方案一：docker打包镜像，多容器部署，静态文件发布静态域
            方案二：原生Node部署方案


#### 后端

脚本

    npm run dev                     // 本地开发环境, 集成前端热替构建(VERY HOT)，后端自动刷新构建
    npm run qa                      // QA环境
    npm run test                    // istanbul 覆盖测试， mocha 单元测试
    npm run online                  // pm2 online

    本地开发:
        npm run dev

    测试环境:
        npm run qa

    静态文件上传:
        -                             // 本地不用上传
        npm run fedev, npm run feftp   // 测试环境

框架和中间件

    FrameWork: koa
    router: koa-router
    session: koa-generic-session koa-redis
    views: koa-views swig/nunjucks/dust
    cache: koa-conditional-get koa-etag
    security: koa-helmet
    log: koa-logger winston
    error: koa-error
    static: koa-static koa-favicon
    validator: koa-validate


#### 前端构建

workflow: webpack构建

    npm run fedev                      // 前端构建（QA）
    npm run feftp                      // 前端上传（QA）
    npm run febuild                    // 前端构建（正式）
    npm run status                     // 查看构建状态信息
    npm run new [name]                 // 创建新项目
    npm run change [name]              // 更换编译目录

    eg: npm run new detail -> 新建一个为detail的文件夹，并指向这目录编译
    this workflow include compile scss, autoprefixer, es6, (easily extend with vue, react) hotreload etc;


#### docker 打包

    docker build . lemon

### TODO

### 准备流程

## about
author: 周周
