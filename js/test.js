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

$(function () {
  let header = $(".header__inner");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header__inner__change");
    } else {
      header.removeClass("header__inner__change");
    }
  });
});

$(function () {
  let header = $(".header__address");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header__address__change");
    } else {
      header.removeClass("header__address__change");
    }
  });
});
