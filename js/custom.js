//Custom Cursor
// CURSOR
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
// yellow circle
$(".link").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});
$(".link").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

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

$(function () {
  // This will initiate the WOW plugin.
  new WOW().init();
});

//Smooth Scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get / return id likes #home, #work... etc
    var section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 150,
      },
      0,
      "easeInOut"
    );
  });
});

//Smooth Scrolling
$(function () {
  $("a.scroll").click(function (event) {
    event.preventDefault();
    //get / return id likes #home, #work... etc
    var section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 150,
      },
      0,
      "easeInOut"
    );
  });
});

//Navbar closing on clicking menu options
$(function () {
  $("nav ul li a").on("click touch", function () {
    $(".icon-burger").click();
  });
});
