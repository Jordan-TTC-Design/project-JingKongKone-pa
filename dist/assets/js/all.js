"use strict";

$(document).ready(function () {
  // console.log('Hello Bootstrap4');
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.header').addClass('stickey');
    } else {
      $('.header').removeClass('stickey');
    }
  }); //aos套件

  AOS.init(); //menu 移動
  //主要的

  $(".header__nav li a,.this").click(function (event) {
    var scrollPoint = 0; // console.log('ok');

    var sectionTitle = this.title;
    var id = "#home__" + sectionTitle;
    scrollPoint = $(id).offset().top;
    var lastScrollPoint = scrollPoint - 180; // console.log(scrollPoint);
    // console.log(lastScrollPoint);

    $("html,body").animate({
      scrollTop: lastScrollPoint
    }, 800);
  });
  $(".header__nav--sm li a,.this").click(function (event) {
    $(".navbar-collapse").removeClass('show'); //collapse is not a function
    // $('.collapse').collapse('hide');
  });
});
//# sourceMappingURL=all.js.map
