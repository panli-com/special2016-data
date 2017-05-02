// 是数字消息通知
function isNumMsg(msg) {
    var m = msg || '内容不可以是数字哦';
    PL.msg(m, {
        time: 5000,
        icon: 6
    });
}
