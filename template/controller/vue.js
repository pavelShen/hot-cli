'use strict';

let util = require('../util');

let core = {

    *get() {

        let data = util.getRenderData('vue');

        let bundleRenderer = util.getVueServerBundler('vue');
        let vueString;

        // Attention, if router has a base field, it need to be removed in server's url;
        let url = this.url.replace(/\/vue/, '');

        if(bundleRenderer){
            vueString = yield new Promise((resolve, reject) => {
                bundleRenderer.renderToString({
                    url: url
                },(err, html) => {
                    console.log(html, err);
                    resolve(err ? '' : html);
                });
            })
        }

        data.vueString = vueString ? vueString : '<div class="wrapper"></div>';
        // data.vueString = '<div class="wrapper"></div>';

        yield this.render('vue', data);
    }
};

module.exports = core;
