const swiper = new Swiper('.inst-slider', {
  // slidesPerView: 5,
  loop: true,

  freeMode: true,

  autoplay: {
    delay: 1000,

  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    420: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
    1366: {
      slidesPerView: 5,
    }
  },


});
