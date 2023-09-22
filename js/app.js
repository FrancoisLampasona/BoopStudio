new Swiper("#swiper-2", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ("#swiper-2 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
        return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`;
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
            slidesPerView: 1.2
        },
        400: {
            slidesPerView: 1.3
        },
        450: {
            slidesPerView: 1.4
        },
        500: {
            slidesPerView: 1.5
        },
        550: {
            slidesPerView: 1.6
        },
        600: {
            slidesPerView: 1.7
        },
        650: {
            slidesPerView: 1.8
        },
        700: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 2.2
        },
        950: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 1.5,
            spaceBetween: 5000

        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 150
        }
    }
});