
window.onload = function () {

  var fullScreenSwiper = new Swiper('.wide-swiper', {
    pagination: '.wide-swiper__pagination',
    paginationClickable: true,

  });

  var mainSwiper = new Swiper('.m-swiper-container', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    nextButton: '.m-swiper__next',
    prevButton: '.m-swiper__prev',
    breakpoints: {
            1200: {
                slidesPerView: 5,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            770: {
                slidesPerView: 3,
                spaceBetween: 20
            }
          }
  });

  var secondary1Swiper = new Swiper('.sec1-swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    nextButton: '.sec1-swiper__next',
    prevButton: '.sec1-swiper__prev'
  });

  var secondary2Swiper = new Swiper('.sec2-swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    nextButton: '.sec2-swiper__prev',
    prevButton: '.sec2-swiper__next'
  });

};
