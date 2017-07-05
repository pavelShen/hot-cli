'use strict';


module.exports = () => {
    return function *(next){

        let ua = this.request.header['User-Agent'];

        let flag = /bot|spider|scan|crawler/i.test(ua);

        this.state.isSpider = flag;

        yield * next;
    };
}
