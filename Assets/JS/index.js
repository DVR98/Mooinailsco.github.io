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
 });


  
  