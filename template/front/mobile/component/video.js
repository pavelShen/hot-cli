'use strict';

var util = {
    getScript: function(url, success, error) {
        var head = document.getElementsByTagName('head');
        var script = document.createElement('script');
        head = head.length ? head[0] : document.documentElement;

        script.async = 'async';
        script.src = url;

        head.appendChild(script);

        script.addEventListener('load', success, false);
        script.addEventListener('error', error, false);
    }
};

var HJVideoObject = function() {

    this.videoData = {
        type: -1, //来源类型
        width: 400, //高度
        height: 300, //宽度
        videoURLorID: '', //视频ID
        containerID: '', //容器ID
        autoPlay: 0, //是否自动播放
        failure: null,
        getVideoUrl: null,
        apiHost: '3rdshare.yeshj.com'
    };

    // iqiyi: 0,
    // youku: 1,
    // tudou: 2

    this.init = function(data) {
        if (!$.isEmptyObject(data)) {
            $.extend(this.videoData, data);
        }
        this.getVideoData();
    };

    this.createYoukuVideo = function(videoID) {
        var self = this;
        util.getScript('http://player.youku.com/jsapi', function() {
            var container = $('#' + self.videoData.containerID);
            if (container) {
                new YKU.Player(self.videoData.containerID, {
                    client_id: '07b68fe2e243ab6d',
                    vid: videoID,
                    autoplay: (self.videoData.autoPlay === 1),
                    show_related: false
                });
                container.css({
                    width: self.videoData.width,
                    height: self.videoData.height
                });
            }
        }, function() {
            alert('error');
        });
    };

    this.createSohuVideo = function(videoID) {
        var self = this;

        var container = $('#' + self.videoData.containerID);
        if (container) {
            createSHPlayer({
                bid: videoID, //自媒体视频vid，可通过搜狐视频播放页面或OpenAPI接口获取
                width: self.videoData.width, //播放器宽度，像素值
                height: self.videoData.height, //播放器高度，像素值
                lqd: 18072, //开放平台渠道号，配置正确，才会有数据统计
                lcode: '0810c434145c7d682b42c50d002e21c2', //加密字符串，正式上线后在开放平台上获取
                autoplay: false, //是否自动播放，默认false
                enforceHTML5: false, //是否使用h5播放器, 默认true；
                getHTML: false, //是否返回字符串，默认false; true时此方法返回播放器html，由使用者将html insert到合适位置， false时使用docuselfnt.write输出html
                src: 11510001 //搜狐视频播放来源，固定值
            });
            container.width(self.videoData.width);
            container.height(self.videoData.height);
        }
    }

    this.getVideoData = function() {
        var self = this;
        $.ajax({
            type: 'get',
            async: false,
            url: 'http://' + self.videoData.apiHost + '/VideoInfo?s=' + self.videoData.videoURLorID + '&t=' + self.videoData.type + '&autoplay=' + self.videoData.autoPlay,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(data) {

                switch (data.type) {
                    case -2:
                    case -1:
                        if (self.videoData.failure !== null) {
                            self.videoData.failure(data);
                        }
                        break;
                    case 0:
                    case 2:
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                        var container = $('#' + self.videoData.containerID);
                        if (data.videoUrl && self.videoData.getVideoUrl) {
                            self.videoData.getVideoUrl(data.videoUrl);
                        }
                        if (container) {
                            container.html(data.result);
                            container.width(self.videoData.width);
                            container.height(self.videoData.height);
                        }
                        break;
                    case 4:
                        if (data.videoUrl && self.videoData.getVideoUrl) {
                            self.videoData.getVideoUrl(data.videoUrl);
                        }
                        self.createSohuVideo(data.result);
                        break;
                    case 1:
                        if (data.videoUrl && self.videoData.getVideoUrl) {
                            self.videoData.getVideoUrl(data.videoUrl);
                        }
                        self.createYoukuVideo(data.result);
                        break;
                }
            },
            error: function(error) {
                if (self.videoData.failure !== null) {
                    self.videoData.failure(error);
                }

                var container = $('#' + self.videoData.containerID);
                if (container) {
                    container.html('');
                    container.width(self.videoData.width);
                    container.height(self.videoData.height);
                }

            }
        });
    };

};

var HJVideo = {
    showVideo: function(data) {
        if (!$.isEmptyObject(data)) {
            new HJVideoObject().init(data);
        }
    }
};

module.exports = HJVideo;
