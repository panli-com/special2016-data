PD(function() {

    PD('input[type=checkbox]').click(function() {

        var _t = PD(this);
        var _tNamt = _t.attr("name");
        console.log(_tNamt);
        _t.attr('disabled', 'disabled');
        var checkStc = "input[name='" + _tNamt + "']:checked";
        if (PD("input[name='" + _tNamt + "']:checked").length >= 4) {

            PD("input[name='" + _tNamt + "']:checked").attr('disabled', 'disabled');
        }
    });




})


// PD(function() {

//     PD('input[type=checkbox]').click(function() {
//         var _t = PD(this);
//         var _tNamt = _t.attr("name");
//         PD(this).attr('disabled', 'disabled');
//         if (PD("" + _tNamt + ":checked").length >= 4) {

//             PD(this).attr('disabled', 'disabled');
//         }
//     });




// })