(function($) {
  function scrollNow() {
    if ($(".scroll").length > 0) {
      if ($(this).scrollTop() > 300) {
        $(".scroll-back")
          .fadeIn()
          .css({
            left:
              $(".scroll-container").offset().left +
              $(".scroll-container").width() -
              $(".scroll-back").width()
          });
      } else {
        $(".scroll-back").fadeOut();
      }
    }
  }

  $(window).on("scroll resize", scrollNow);
  $(window).on("load", function() {
    if ($(".scroll").length > 0) {
      scrollNow();
      $(".scroll-backBox")
        .find(".scroll-back")
        .on("click", function(event) {
          event.preventDefault();
          $("html,body").animate({ scrollTop: 0 }, 600);
        });
    }
  });
})(jQuery);
