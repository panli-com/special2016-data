PD(function() {
    floorNnav();


    PD(window).resize(function() {
        floorNnav();
    })


    PD(window).scroll(function() {
        var scrollTop = PD(window).scrollTop();
        PD('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    });

    $(".sp-go-baoliao").on("click", function() {

        var _afloTop = $(".sp-content-pink").offset().top;
        $('body,html').animate({
            scrollTop: _afloTop - 110
        }, 300);
        return false;
    });


})