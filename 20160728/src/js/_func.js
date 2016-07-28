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