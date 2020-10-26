var winWidth = $(window).width();

$(window).resize(function() {
  winWidth = $(window).width();
  if(winWidth > 985){
    $('.navbar-nav>li>a').addClass("text-white");
  }
  else {
    $('.navbar-nav>li>a').removeClass("text-white");
  };
});

//On ready
$(document).ready(function () {
    var nav = document.getElementById("navbar");

    document.getElementById("introduction").style.opacity = "1";

    // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
    var prevScrollpos = window.pageYOffset;
    winWidth = $(window).width();
    if(winWidth > 990){
      $('.navbar-nav>li>a').addClass("text-white");
      document.getElementById("nav").classList.add("bg-transparent");
    }
    else {
      document.getElementById("nav").classList.remove("bg-transparent");
      $('.navbar-nav>li>a').removeClass("text-white");
    }

    window.onscroll = function () {
        if (window.scrollY == 0) {
          if((winWidth > 985) || (window.ScreenX > 985)){
            document.getElementById("nav").classList.add("bg-transparent");
            $('.navbar-nav>li>a').addClass("text-white");
          }            
        }
        else {
            document.getElementById("nav").classList.remove("bg-transparent");
            $('.navbar-nav>li>a').removeClass("text-white");
        }

        nav.style.transitionTimingFunction = "ease-in-out";

        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos >= currentScrollPos) {
            nav.style.top = "0";
        } else {
            nav.style.top = "-120px";
        }
        prevScrollpos = currentScrollPos;
    }

    //Hides nav if anchor element clicked
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-toggler').css("transform","");
      $('.navbar-collapse').collapse('hide');    
    });

    $('.nav-leftside>li>a').on('click', function(){
      nav.style.top = "-120px";
    });

    // Select all links with hashes
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      //Hamburger button
      $(".navbar-toggler").click(function() {
        if ($(this).css("transform") == 'none'){
            $(this).css("transform","rotate(90deg)");
        } else {
            $(this).css("transform","");
        }
      });
});