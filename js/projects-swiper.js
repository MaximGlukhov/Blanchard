const projectsSwiper = new Swiper('.section-projects__swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.section-projects-button-next',
        prevEl: '.section-projects-button-prev',
    },


    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    }
});