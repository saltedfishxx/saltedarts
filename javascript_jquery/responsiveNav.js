(function ($) {
  $(function () {


    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').toggle();
    });
    // Toggle active CSS class (X - close)
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li > a:not(:only-child)').mouseenter(function (e) {
      $(this).siblings('.nav-dropdown').show();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // moving away from dropdown will remove the dropdown class
    $('.nav-dropdown').mouseleave(function () {
      $('.nav-dropdown').hide();
    });

    $('nav ul li > a:not(:only-child)').click(function () {
      $('.nav-dropdown').toggle();
    });

    //move to links that dont have dropdown will hide the other dropdowns
    $('.tabs').mouseenter(function () {
      $('.nav-dropdown').hide();
    });

  });

  //back to top function
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('#backToTop').fadeIn('slow');
    } else {
      $('#backToTop').fadeOut('slow');
    }
  });
  $('#backToTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

})(jQuery);