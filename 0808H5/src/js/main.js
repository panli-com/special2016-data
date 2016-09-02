PD(function() {

    PD("#tbl_question_6").on("click", function() {

        if (document.getElementById("option_6_512").checked) {
            PD(".isshow-que").removeClass("isshow-que-hide");
        } else {

            PD(".isshow-que").addClass("isshow-que-hide");

            PD(".isshow-que-hide").find('[type="text"]').removeClass("j-readonly");
        }

    });

    PD(".wrongtip").text("");
    PD(".many-check").on("click", function() {
        var _t = PD(this),
            _max = _t.attr("max") - 0;

        _t.find('[type="checkbox"]').attr('disabled', true);
        if (_t.find('[type="checkbox"]:checked').length >= _max) {
            _t.find('[type="checkbox"]:checked').attr('disabled', false);
             msgRedInfo(_t,'（多选，最多'+_max+'项）');
           
        } else {
            _t.find('[type="checkbox"]').attr('disabled', false);
           
           
        }
    });

     PD(".m_table").on("click",":radio,:checkbox", function() {
         var _t = PD(this);
         var _tb = _t.parents("table");
         var dt = _tb.find('[data-text="1"]:checked');
         var text =  _tb.find('[type="text"]');
         if(_tb.hasClass("isshow-que-hide")){
             text.removeClass("j-readonly");
         }else{
             if(dt.length>0){
                text.addClass("j-readonly");
             }else{
                text.removeClass("j-readonly");
             }
         }
         
    
         var tb = _t.parents("table");
         var msg = "（请选择您的答案）";
         msgRedInfoVa(tb,msg)

     })

    



})