"use strict";

$(document).ready(function () {
  // console.log('Hello Bootstrap4');
  var swiperGod = new Swiper('.home__introGod__godListBox .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true
    }
  });
  var swiperVideo = new Swiper('.videoContainer--swiper .swiper-container', {
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.video-button-next',
      prevEl: '.video-button-prev'
    },
    loop: true
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.header').addClass('stickey');
    } else {
      $('.header').removeClass('stickey');
    }
  }); //aos套件

  AOS.init({
    once: true
  }); // $(window).resize(function () {
  //   var wdth = $(window).width(996);
  //   $(".header__nav--sm").slideUp(3000);
  // });
  //menu 移動
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
    $(".header__nav--sm").slideToggle(300); // $(".navbar-collapse").removeClass('show');
  });
  $(".header__nav--hamburger").click(function (event) {
    $(".header__nav--sm").slideToggle(300);
  });
});
//# sourceMappingURL=all.js.map
