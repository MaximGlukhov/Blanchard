const gallerySwiper = new Swiper('.section-gallery__swiper', {
    // If we need pagination
    pagination: {
      el: '.section-gallery__panigation',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery-swiper-button-next-new',
      prevEl: '.gallery-swiper-button-prev-new',
    },
    
    
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
   
   
      661: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      
      1601: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      }
    }
  });

