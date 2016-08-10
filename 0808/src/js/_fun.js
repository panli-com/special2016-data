function formVerif() {

    var tb = PD(".m_table:not(.isshow-que-hide)");

    for (var i = 0; i < tb.length; i++) {
        var _ttb = tb.eq(i);
        var inp = _ttb.find(":radio,:checkbox");
        var inpLens = inp.length;


        if (inpLens > 0) {

            if (_ttb.find(':checked').length < 1) {
                noCheckEl(_ttb);
                toastr.error('填写完整才有机会哦', '发现您还没选择哦!');
                return false;

            }

        }

    }
    return true;
}

function noCheckEl(el) {

    PD("body,html").animate({
        scrollTop: el.prev().offset().top - 90
    }, 300)
}


function formVerifText() {

    var tx = PD(".j-readonly");


    for (var i = 0; i < tx.length; i++) {

        var _ttx = tx.eq(i);

        var _v = _ttx.val().trim();

        if (_v.length < 2) {
            _ttx.focus();
            noCheckEl(_ttx.parents("table"))
            toastr.error('填写完整才有机会哦', '好像还没有输入!')
            return false
        }


    }

    return true;

}

function formAll() {


    if (formVerif()) {

        if (formVerifText()) {

            return true;
        }

    }



    return false;
}