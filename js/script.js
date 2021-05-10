//when scroll body..sticky navbar
$(window).scroll(function(){
    var sc=$(this).scrolltop();
    if(sc>100)
    {console.log("window max scroll 100")}
    {
        $('hedar').addClass('sticky');
    }
    else{
        $('hedar').removeclass('sticky');
    }

})