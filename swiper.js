const swiper = new Swiper('.swiper', {
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    
    pagination: {
        el: '.swiper-pagination',

        type: 'bullets',
        bulletClass:'swiper-pagination-bullet',
        bulletActiveClass:'swiper-pagination-bullet-active',

        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 0, 


    breakpoints: {
        768: {
            enabled: false, 
            spaceBetween: 0,
        },
    },
    loop: true,
});

