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

  AOS.init();
});
//# sourceMappingURL=all.js.map
