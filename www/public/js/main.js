(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      $(".logo").addClass("scrolled");
    } else {
      $(".logo").removeClass("scrolled");
    }
  });
}());
