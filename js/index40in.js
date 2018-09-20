$(document).ready(function(){
    PopUpHideTry();
    PopUpHideYes();
    PopUpHideNo();
    PopUpHide1();
    PopUpHide2();
    PopUpHide3();
    PopUpHide4();
    PopUpHide5();
});
function PopUpShowTry(){  
    $("#popup_try").css("display", "flex");
}
function PopUpHideTry(){
    $("#popup_try").hide();
}
function PopUpShowYes(){  
    $("#popup_yes").css("display", "flex");    
}
function PopUpHideYes(){
    $("#popup_yes").hide();
}
function PopUpShowNo(){  
    $("#popup_no").css("display", "flex");    
}
function PopUpHideNo(){
    $("#popup_no").hide();
}
function PopUpShow1(){	
    $("#tariff_popup1").css("display", "flex");
    document.location.href = "#tar";
}
function PopUpHide1(){
    $("#tariff_popup1").hide();
}
function PopUpShow2(){
    $("#tariff_popup2").css("display", "flex");
    document.location.href = "#tar";
}
function PopUpHide2(){
    $("#tariff_popup2").hide();
}
function PopUpShow3(){
    $("#tariff_popup3").css("display", "flex");
    document.location.href = "#tar";
}
function PopUpHide3(){
    $("#tariff_popup3").hide();
}
function PopUpShow4(){
    $("#tariff_popup4").css("display", "flex");
    document.location.href = "#tar";
}
function PopUpHide4(){
    $("#tariff_popup4").hide();
}
function PopUpShow5(){	
    $("#tariff_popup5").css("display", "flex");    
    document.location.href = "#tar";
}
function PopUpHide5(){
    $("#tariff_popup5").hide();
}
