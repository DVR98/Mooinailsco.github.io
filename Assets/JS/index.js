var winWidth;

$(window).resize(function() {
    winWidth = $(window).width();
    });

//On ready
$(document).ready(function () {
    $(".flip-card").click(function() {
        if ($('.flip-card-inner').css("transform") == 'none'){
            $('.flip-card-inner').css("transform","rotateY(180deg)");
        } else {
            $('.flip-card-inner').css("transform","");
        }      
     });  

     winWidth = $(window).width();

     var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
        if (ua.indexOf('chrome') > -1) {
            alert("1") // Chrome
        } else {
            alert("2") // Safari
        }
    }
 });


  
  