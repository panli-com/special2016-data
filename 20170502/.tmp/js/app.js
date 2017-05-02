PD(function() {
    floorNnav();


    PD(window).resize(function() {
        floorNnav();
    })


    PD(window).scroll(function() {
        var scrollTop = PD(window).scrollTop();
        PD('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    });

    PD(".sp-go-baoliao").on("click", function() {

        var _afloTop = PD(".sp-content-pink").offset().top;
        PD('body,html').animate({
            scrollTop: _afloTop - 110
        }, 300);
        return false;
    });

    PD('#sp-paging').on('keypress',".paging-input",function(event){
            if(event.keyCode == "13")    
            {
                gotoList();
            }
    });

    PD("#sp-paging").on("click",".paging-a",function(){
        var _t = PD(this);
        var _onNum = _t.attr("data-id"); 
        getDataSPost(_onNum);
    });

    PD("#sp-paging").on("click",".paging-go",function(){
        gotoList();
    })

})
// 是数字消息通知
function isNumMsg(msg) {
    var m = msg || '内容不可以是数字哦';
    PL.msg(m, {
        time: 5000,
        icon: 6
    });
}

var spPaging = {
    count: 1,
    on: 1,
    start: 1,
    pageNum: 8,
    maxNum: 1,
    init: function(obj) {
        var vm = this;
        if (obj) {
            obj.count ? vm.count = obj.count : "";
            obj.on ? vm.on = obj.on : "";
            obj.pageNum ? vm.pageNum = obj.pageNum : "";
        }
        vm.reader();
    },
    reader: function() {
        var vm = this;
        var pageCount = Math.ceil(vm.count / vm.pageNum);
        var onPage = Number(vm.on);
        var netxPage = onPage + 1;
        var prevPage = onPage - 1;
        vm.maxNum = pageCount;
        vm.start = vm.start + 1;
        var listn = '';

        var newObj = '';
        if (pageCount < 2) {
            return false;
        }

        //上一页sdf
        if (onPage > 1) {
            newObj += '<a href="javascript:void(0);" data-id="' + prevPage + '" class="paging-a" >上一页</a>';
        }


        //中间页码
        if (onPage != 1 && onPage >= 4 && pageCount != 4) {

            newObj += '<a href="javascript:void(0);" data-id="1"  class="paging-a">' + 1 + '</a>';

        }
        if (onPage - 2 > 2 && onPage <= pageCount && pageCount > 5) {
            newObj += '<span>...</span>';
        }
        var start = onPage - 2,
            end = onPage + 2;

        if ((start > 1 && onPage < 4) || onPage == 1) {
            end++;
        }
        if (onPage > pageCount - 4 && onPage >= pageCount) {
            start--;
        }
        for (; start <= end; start++) {
            if (start <= pageCount && start >= 1) {
                if (start != onPage) {

                    newObj += '<a href="javascript:void(0);" data-id="' + start + '"  class="paging-a">' + start + '</a>';

                } else {
                    newObj += '<a href="javascript:void(0);" data-id="' + start + '" class="paging-on">' + start + '</a>';
                }
            }
        }
        if (onPage + 2 < pageCount - 1 && onPage >= 1 && pageCount > 5) {
            newObj += '<span>...</span>';
        }
        if (onPage != pageCount && onPage < pageCount - 2 && pageCount != 4) {

            newObj += '<a href="javascript:void(0);" data-id="' + pageCount + '" class="paging-a">' + pageCount + '</a>';

        };


        //下一页
        if (onPage < pageCount) {
            newObj += '<a href="javascript:void(0);" data-id="' + netxPage + '" class="paging-a">下一页</a>';
        }

        var goS = '<span class="paging-txt">到第</span>' +
            '<input type="text" class="paging-input" data-max="' + pageCount + '" >' +
            '<span class="paging-txt">页</span>' +
            '<a href="javascript:void(0);" class="paging-go">GO</a>';


        PD("#sp-paging").html(newObj + goS);

    }
}


function floorNnav() {
    var winW = PD(window).width(),
        mainOfL = PD(".sp-content-w").offset().left;
    var navW = PD('.floor-nav-wrap').width();
    if (winW >= 1444) {
        var oFright = mainOfL - navW - 15;

        PD('.floor-nav-wrap').css("left", oFright)
    } else {
        PD('.floor-nav-wrap').css({
            "left": '10px',
            right: ''
        });
    }
}

function postList(data) {
    if (!data.length) {
        errorDataInfo("数据返回错误");
        return false;
    }

    try {
        loadingSwif(false);
        var leng = data.length;
        var a1 = '';
        var a2 = '';
        var a3 = '';
        var a4 = '';

        for (var i = 0; i < leng; i++) {
            var ind = i % 4;
            if (ind == 0) {
                a1 += listHtmlReader(data[i]);
            } else if (ind == 1) {
                a2 += listHtmlReader(data[i]);
            } else if (ind == 2) {
                a3 += listHtmlReader(data[i]);
            } else if (ind == 3) {
                a4 += listHtmlReader(data[i]);
            }
        };

        PD("#sp-list-1").html(a1);
        PD("#sp-list-2").html(a2);
        PD("#sp-list-3").html(a3);
        PD("#sp-list-4").html(a4);

    } catch (error) {
        errorDataInfo("数据返回错误");
    }


}

function listHtmlReader(obj) {
    var thumb = obj.thumb ? encodeURI(obj.thumb) : '//sf.panli.com/Ued/Special/2016/0927/build/imgs/thumb-no.png',
        title = obj.title ? obj.title :"不想写",
        userName = obj.userName,
        desction = obj.desction,
        shopUrl = obj.shopUrl ? encodeURI(obj.shopUrl) : "javascript:void(0);",
        panliUrl = obj.shopUrl ? 'http://www.panli.com/Crawler.aspx?purl=' + encodeURIComponent(shopUrl) : "javascript:void(0);";

    var gobuySDf = '<div class="pro-go-btn">' +
        '<a href="' + panliUrl + '" target="_blank">' +
        '我要代购</a>';

    var gobuyS = obj.shopUrl ? gobuySDf :"";

    var str = '<div class="sp-list-grid">' +
        '<div class="thumb">' +
        '<a  rel="nofollow" href="' + shopUrl + '" target="_blank">' +
        '<img src="' + thumb + '" alt="">' +
        '</a>' +
        '</div>' +
        '<div class="sp-pro-content">' +
        '<a target="_blank"  rel="nofollow" href="' + shopUrl + '" class="pro-title" title="' + title + '" >' + title +
        '</a>' +
        '<div class="pro-line"></div>' +
        '<div class="pro-user-name">爆料人：' + userName + '</div>' +
        '<div class="pro-desction">' +
        '<p>' + desction +
        '</p>' +
        '</div>' + gobuyS +
        '</div>' +
        '</div>' +
        '</div>';

    return str;
}

function loadingSwif(sta) {
    if (sta == false) {
        PD(".data-loading").hide();
        PD("#sp-list-u").fadeIn("600");
    } else {
        PD("#sp-list-u").hide();
        PD(".data-loading").show();
    }
}


function offsetTopList() {

    if (spPaging.start > 1) {
        var _afloTop = PD(".sp-content-purple").offset().top;
        PD('body,html').animate({
            scrollTop: _afloTop - 80
        }, 800);
    }


    return false;
}

function isNumber(num) {
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(num) || num < 1) {
        return false;
    }
    return num;
}

function gotoList() {
    var _input = PD(".paging-input");
    var _onNum = PD.trim(_input.val());
    var maxnum = _input.attr("data-max") - 0;
    if (!isNumber(_onNum) || _onNum >= maxnum + 1) {
        _input.val("");
        return false;
    };
    getDataSPost(_onNum);
    offsetTopList();
}

function errorDataInfo(info) {
    var msg = info ? info : "好可惜,数据去哪儿了 ┭┮﹏┭┮";
    loadingSwif(false);
    PD("#sp-list-u li").html("");
    var str = '<div class="error-info">' + msg + '</div>';
    PD("#sp-list-1").html(str);
}