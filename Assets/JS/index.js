var winWidth;

$(window).resize(function() {
    winWidth = $(window).width();
    });

//On ready
$(document).ready(function () {
    document.getElementById("introduction").style.opacity = "1";

     winWidth = $(window).width(); 
     $("#nails-gallery").click(function(){
         window.location.href= "Assets/Pages/Nails_Gallery.html";
     })  
 });


  
  