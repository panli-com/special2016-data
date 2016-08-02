// 排行榜渲染
function TopListReader(array) {

    var str = '<li class="li0">' +
        '<span class="sp1"></span>' +
        '<span class="sp2">用户名</span>' +
        '<span class="sp3">消费金额</span>' +
        '</li>';

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var num = Number(i) + 1;
        str += '<li class="li' + num + '">' +
            '<span class="sp1">&nbsp;</span>' +
            '<span class="sp2">' + element.szCustomerName + '</span>' +
            '<span class="sp3">' + element.mPrice + '元</span>' +
            '</li>';

    }

    PD("#top-list-u").html(str);

}
//获取服务端数据
function getSeverData(n, i, e) {
    var o = new Date().getTime();
    PD.ajax({
        type: "POST",
        url: n + "?time=" + o,
        dataType: "json",
        data: i,
        contentType: "application/json;utf-8",
        timeout: 1e4,
        error: function() {
            alert("请求错误")
        },
        success: function(n) {
            e(n)
        }
    })
}

//用户登录排行榜信息

function userLoginInfo(userinfo) {

    var price = Number(userinfo.price);

    var msg = '您还未购买任何商品，<a href="' + userinfo.url + '" class="red">赶紧去血拼~</a>';
    if (price > 0) {
        msg = '截止当前，您的消费金额为<span class="red">' + price + '元</span>.'; 
    }


    var stc = '' +
        '<div class="user-top-msg-1" >' +
        '<div class="hello-use">亲爱的 <span class="red">' + userinfo.name + '</span>,</div>' +
        '<p class="p1">' + msg +
        '</p>' +
        '</div>';

    PD("#user-info").html(stc);
}