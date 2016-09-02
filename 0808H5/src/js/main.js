PD(function() {

    PD("#tbl_question_6").on("click", function() {

        if (document.getElementById("option_6_512").checked) {
            PD(".isshow-que").removeClass("isshow-que-hide");
        } else {

            PD(".isshow-que").addClass("isshow-que-hide");
        }

    });


    PD(".many-check").on("click", function() {
        var _t = PD(this),
            _max = _t.attr("max") - 0;

        _t.find('[type="checkbox"]').attr('disabled', true);
        if (_t.find('[type="checkbox"]:checked').length >= _max) {
            _t.find('[type="checkbox"]:checked').attr('disabled', false);
        } else {
            _t.find('[type="checkbox"]').attr('disabled', false);
        }
    });


})