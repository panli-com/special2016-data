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


    PD("#sp-paging").on("click",".paging-a",function(){
        var _t = PD(this);
        var _onNum = _t.attr("data-id");
      
        getDataSP(_onNum);
    });

    PD("#sp-paging").on("click",".paging-go",function(){
        var _input = PD(".paging-input");
        var _onNum = PD.trim(_input.val());
        var maxnum = _input.attr("data-max") - 0;
        if(!isNumber(_onNum) || _onNum > maxnum){ 
            _input.val("");
            return false;
        };
        getDataSP(_onNum);
        offsetTopList();
    })

})