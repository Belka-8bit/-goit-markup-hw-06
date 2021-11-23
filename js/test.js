$(function () {
  let header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_change");
    } else {
      header.removeClass("header_change");
    }
  });
});

$(function () {
  let header = $(".nav__link");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("nav__change");
    } else {
      header.removeClass("nav__change");
    }
  });
});

$(function () {
  let header = $(".current");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("current__change");
    } else {
      header.removeClass("current__change");
    }
  });
});
