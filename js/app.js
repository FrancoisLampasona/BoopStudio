const swiper = new Swiper("#swiper-2", {
  slidesPerView: 1.5, // Imposta il numero iniziale di slide visibili
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  breakpoints: {
    200: {
      slidesPerView: 1.3,
    },
    400: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.9,
    },
    950: {
      slidesPerView: 2.3,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

const swiperContainer = document.querySelector("#swiper-2");

swiperContainer.addEventListener("mouseover", () => {
  swiper.params.slidesPerView = 1;
  swiper.update();
});

swiperContainer.addEventListener("mouseout", () => {
  swiper.params.slidesPerView = swiper.originalParams.slidesPerView; // Imposta il numero iniziale
  swiper.update();
});

const swiperSlides = document.querySelectorAll(".swiper-slide");

swiperSlides.forEach((slide) => {
  slide.addEventListener("mouseover", () => {
    slide.style.height = "10vw";
  });
});
