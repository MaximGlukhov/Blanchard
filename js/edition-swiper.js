const editionSwiper = new Swiper('.section-editions__swiper-container', {
    // If we need pagination
    pagination: {
      el: '.section-editions__swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section-editions__swiper-button-next',
      prevEl: '.section-editions__swiper-button-prev',
    },
    // autoHeight: false,
    
    breakpoints: {
     
      320: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      
      1024: {
        slidesPerView: 2,
        spaceBetween: 49,
        slidesPerGroup: 2,
      },

      1801: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },

    }
  });