// 是数字消息通知
function isNumMsg(msg) {
    var m = msg || '内容不可以是数字哦';
    PL.msg(m, {
        time: 5000,
        icon: 6
    });
}

function getDataSP(onNumber) {
    loadingSwif();
    offsetTopList();
    PD.ajax({
        type: "GET",
        url: "/src/data/data.json",
        dataType: "json",
        success: function(result) {

            setTimeout(function() {
                postList(result.data);
                var obj = {
                    count: 3318,
                    on: onNumber,
                    pageNum: 8,
                }
                spPaging.init(obj);

            }, 1000)

            // console.log(JSON.stringify(result));
        },
        error: function(result, status) {
            //处理错误
            console.log(result);
        }
    });
}