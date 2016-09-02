
function noCheckEl(el) {
  
    if(el.prev().length>0){
         PD("body,html").animate({
        scrollTop: el.prev().offset().top - 90
    }, 300)
    }
}


function formVerifText() {

    var tx = PD(".j-readonly");
    for (var i = 0; i < tx.length; i++) {

        var _ttx = tx.eq(i);

        var _v = _ttx.val().trim();

        if (_v.length < 2) {
            _ttx.focus();
            noCheckEl(_ttx.parents("table"));
            msgRedInfo(_ttx.parents("table"),'（请补充您的答案）');
           
            return false
        }

    }

    return true;
}

function formAll() {


    if (formMsgRedInfo()) {

        if (formVerifText()) {

            return true;
        }

    }

    return false;
}

// 消息提示文字
function msgRedInfo(tb,msg){
    var _t = tb;
    var _p = _t.prev();
    var tip = _p.find(".wrongtip");
    var txt = tip.attr("data-msg");
    if(typeof(txt)=="undefined"){
        tip.text(msg);
    }else{
        tip.text(txt);
    }
    
}

function msgRedInfoVa(tb,msg){
    var _t = tb;
    var _p = _t.prev();


     var inp = _t.find(":radio,:checkbox");
     var inpLens = inp.length;


        if (inpLens > 0) {

            if (_t.find(':checked').length < 1) {
                _p.find(".wrongtip").text(msg);
            }else{
                _p.find(".wrongtip").text("");
            }

     }
}

function formMsgRedInfo(){

    var tb = PD(".m_table:not(.isshow-que-hide)");
    var n = 0;
    var indexT = [];

    for (var i = 0; i < tb.length; i++) {
        var _ttb = tb.eq(i);
        var inp = _ttb.find(":radio,:checkbox");
        var inpLens = inp.length;


        if (inpLens > 0) {

            if (_ttb.find(':checked').length < 1) {
                indexT.push(i);
                msgRedInfo(_ttb,'（请选择您的答案）');
                n ++;
            }

        }

    }
     noCheckEl(tb.eq(indexT[0]));
    if(n > 0){

        return false;
    }
   

    return true;
}