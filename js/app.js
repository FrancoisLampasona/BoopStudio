new Swiper("#swiper-2", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-custom-pagination", // Selettore dell'elemento in cui verranno creati i pallini
        clickable: true, // Consente di fare clic sui pallini per navigare tra le slide
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`; // Creazione dei pallini
        }
      },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    breakpoints: {
        200: {
            slidesPerView: 1.3
        },
        400: {
            slidesPerView: 1.3
        },
        450: {
            slidesPerView: 1.3
        },
        768:{
            slidesPerView: 1.9
        },
        950: {
            slidesPerView: 2.3,
        },
        1200: {
            slidesPerView: 2.7,
        }
    }
});