$(function() {
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  CheckScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    CheckScroll(scrollOffset);
  });

  function CheckScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth Scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockoffset = $(blockId).offset().top;

    $("html, body").animate(
      {
        scrollTop: blockoffset
      },
      500
    );
  });

  /* Menu nav_toggle */
  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    $("#nav").toggleClass("active");
    $(this).toggleClass("active");
  });

  /* Collapse */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("collapse");
    $(blockId).slideToggle();
    $this.toggleClass("active");
  });
});
