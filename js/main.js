(function() {
  var scrolled;
  $(window).on("scroll", function() {
    if (scrolled || document.body.scrollHeight - window.innerHeight > 136) {
      if ($(window).scrollTop() > 10) {
        scrolled = true;
        $(".logo").addClass("scrolled");
      } else {
        scrolled = false;
        $(".logo").removeClass("scrolled");
      }
    }
  });
}());
