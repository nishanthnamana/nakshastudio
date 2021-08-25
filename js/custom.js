$(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    autoplaySpeed: 900,
    dots: true,
    responsive: {
      // breakpoint from 480 up
      480: {
        items: 2,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      },
      // breakpoint from 768 up
      991: {
        items: 5,
      },
    },
  });
});
