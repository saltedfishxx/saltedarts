(function($) {
    "use strict";
    var $navbar = $(".navigation")
        $(window).scroll(function (e) { //when user scrolls
          var fadein = $('#page');
          fadein.removeClass("fade-in");
          if ($(window).scrollTop() >= $("header").height() -100) { //if the nav moves to top nav is sticked
            $navbar.addClass("sticky").animate({
                top: 0
            });
            $(".wrapper").addClass("margin");
      
          } else {
            $navbar.removeClass("sticky").clearQueue().animate({
                top: "-48px"
            }, 0);
            $(".wrapper").removeClass("margin");
          }
        e.stopPropagation();
        
        });
  })(jQuery, undefined);