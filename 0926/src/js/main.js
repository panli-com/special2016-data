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
        console.log(_onNum);
        getDataSP(_onNum);
    });

    PD("#sp-paging").on("click",".paging-go",function(){
        var _input = PD(".paging-input");
        var _onNum = _input.val();
        
        getDataSP(_onNum);
    })

})