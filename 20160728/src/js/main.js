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


    PD(".sp-nav-wp").on("click", ".golink", function() {
        var _t = PD(this);
        _f = _t.index() + 1;
        console.log(_f);
        var a = PD("#floor" + _f).offset().top;

        PD("body,html").animate({
            scrollTop: a - 80
        }, 300)


    });

})