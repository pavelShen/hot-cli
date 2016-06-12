'use strict';

require('./main.scss');
require('./vendor/mu/mu.scss');

import mu from './vendor/mu/mu.latest.js';
import video from './component/video.js';

console.log(mu);
var core = {
    init: function(){
        this._create();
        this._bind();
        this.initSlider();
        this.initVideo();
    },
    _create: function(){
        console.log('mobile develop');
    },
    _bind: function(){
        console.log('bind event');
    },
    /**
     * initialize the slider module using mu
     */
    initSlider: function(){
        this.slider = new MuSlider('.module-slider ul', {
            afterSlide: function($ou, $in, index){

            }
        });
    },
    /**
     * initialize the video module using HJVideo
     */
    initVideo: function(){
        var $obj = $('.module-video'),
            id = 'video-third',
            value = $obj.attr('data-video'),
            width = '100%' || $obj.width(),
            height = 240 || $obj.height();

        $obj.html('<div id="'+id+'"></div>');
        video.showVideo({
            videoURLorID: value,
            containerID: id,
            width: width,
            height: height,
        });
    },
    subscribe: function(){

        // 获取订阅
    }
};

core.init();
