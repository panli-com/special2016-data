// 排行榜渲染
function TopListReader(array) {

    var str = '<li class="li0">' +
        '<span class="sp1"></span>' +
        '<span class="sp2">用户名</span>' +
        '<span class="sp3">消费金额</span>' +
        '</li>';

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var num = Number(i)+1;
        str += '<li class="li' + num + '">' +
            '<span class="sp1"></span>' +
            '<span class="sp2">' + element.name + '</span>' +
            '<span class="sp3">' + element.prices + '元</span>' +
            '</li>';

    }

    PD("#top-list-u").html(str);

}


window.Panli.LoginPanel = {
    d: {},
    t: {},
    f: {},
    url: {},
    init: function() {
        window.Panli.LoginPanel.d = $('<div style="width:555px;height:454px;position:fixed;margin:-227px 0 0 -227px;background:#ffa500;top:50%;left:50%;overflow:hidden;z-index:1000000;display:none;"></div>'),
        window.Panli.LoginPanel.t = $('<div style="background:url(http://sf.panli.com/FrontEnd/images20090801/AddItemPanel/yj.gif) no-repeat left top;margin -2px 0 0;position:relative;height:32px;"><h2 style="color:#FFF;font-size:14px;font-weight:100;float:left;line-height:32px;margin:0 0 0 10px;display:inline;">登录</h2><a onclick="window.Panli.LoginPanel.toggle()" title="关闭" style="margin:10px 10px 0px 0px;display:inline;width:21px;background:url(http://sf.panli.com/FrontEnd/images20090801/AddItemPanel/close.gif) no-repeat 0px -14px;float:right;height:14px;cursor:pointer;"></a></div>'),
        window.Panli.LoginPanel.f = $('<iframe style="width:535px;height:411px;margin:0 0 0 10px" border="0" allowtransparency="true" scrolling="no" frameBorder="0" src="http://passport.panli.com/UI/QuickLogin.aspx?ReturnUrl=' + encodeURI(window.Panli.LoginPanel.url) + '"></iframe>'),
        window.Panli.LoginPanel.d.append(window.Panli.LoginPanel.t),
        window.Panli.LoginPanel.d.append(window.Panli.LoginPanel.f),
        $("body").append(window.Panli.LoginPanel.d),
        "undefined" == typeof document.body.style.maxHeight && (window.Panli.LoginPanel.d.css("position", "absolute"),
        window.Panli.LoginPanel.d.css("margin-top", "0px"),
        window.Panli.LoginPanel.d.css("top", (divY + document.documentElement.scrollTop).toString()),
        $(window).scroll(function() {
            window.Panli.LoginPanel.d.css("top", divY + document.documentElement.scrollTop + "")
        }))
    },
    open: function() {
        Panli.Overlay.open(),
        $("div", window.Panli.LoginPanel.d).length <= 0 && window.Panli.LoginPanel.init();
        try {
            window.Panli.LoginPanel.f.src = "http://passport.panli.com/UI/QuickLogin.aspx?ReturnUrl=" + encodeURI(window.Panli.LoginPanel.url)
        } catch (n) {}
        window.Panli.LoginPanel.d.show()
    },
    close: function() {
        window.Panli.LoginPanel.d.hide(),
        Panli.Overlay.close()
    },
    toggle: function() {
        $(":visible", window.Panli.LoginPanel.d).length > 0 ? window.Panli.LoginPanel.close() : window.Panli.LoginPanel.open()
    }
},
window.Panli.Login = function(n) {
    window.Panli.LoginPanel.url = document.location.href;
    try {
        "undefined" != typeof n && null != n && "" != n && n.length > 0 && (window.Panli.LoginPanel.url = n)
    } catch (i) {
        window.Panli.LoginPanel.url = document.location.href
    }
    window.Panli.LoginPanel.toggle()
}
;
(function($, win) {

    'use strict';

    var throttle = function(fn, delay) {

        if (!delay) {

            return fn;

        }

        var timer;

        return function() {

            clearTimeout(timer);

            timer = setTimeout(function() {

                fn();

            }, delay);

        }

    };

    $.fn.imgLazyLoad = function(options) {

        var elements = this,
            settings = $.extend({

                container: win,
                effect: 'fadeIn',
                speed: 600,
                delay: 400,
                callback: function() {}

            }, options),

            container = $(settings.container),

            loading = function() {

                //当所有的图片都加载完，移除滚动事件
                if (!elements.length) {

                    return container.off('scroll.lazyLoad');

                }

                var containerHeight = container.outerHeight(),
                    containerTop = container.scrollTop();

                if (settings.container !== win) {

                    containerTop = container.offset().top;

                }

                elements.each(function() {

                    var $this = $(this),
                        top = $this.offset().top;

                    if (containerTop + containerHeight > top &&
                        top + $this.outerHeight() > containerTop) {

                        //删除jQuery选择好的元素集合中已经被加载的图片元素
                        elements = elements.not($this);

                        var loadingSrc = $this.attr('data-src');

                        $(new Image()).prop('src', loadingSrc).load(function() {

                            //替换图片路径并执行特效
                            $this.hide()
                                .attr('src', loadingSrc)[settings.effect](settings.speed, function() {

                                    settings.callback.call(this);

                                })
                                .removeAttr('data-src');

                        });

                    }

                });
            };

        if (!container.length) {

            throw settings.container + ' is not defined';

        }

        //开始便加载已经出现在可视区的图片
        loading();

        //滚动监听，显示图片
        container.on('scroll.imgLazyLoad', throttle(loading, settings.delay));

        return this;
    };

})(jQuery, window);
PD(function() {

    $('img').imgLazyLoad({
        //触发滚动事件的容器，默认为window，
        container: window,
        //默认'fadeIn(淡入)',如show，slideDown等
        effect: 'fadeIn',
        //动画运行时间，默认600ms，
        speed: 200,
        //当用户看到图片时，是否立即加载图片，默认延迟400ms(即滚动延迟400ms)，参数类型为number
        delay: 40,
        //每次图片显示完毕后的回调函数
        callback: function() {

        }
    });


})