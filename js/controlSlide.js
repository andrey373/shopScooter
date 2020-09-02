
$(function(){
//   settings for main slide  
    $('.block-slider__slider').slick({
        dots:true,
        arrows:true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        touchMove: true,
        respondTo: 'window',


        prevArrow: '<button class="block-slider__btn-slide block-slider__prev" type="button"><img src="img/logotip/slideleft.svg" alt="arrow-prev"></button>',
        nextArrow: '<button class="block-slider__btn-slide block-slider__next" type="button"><img src="img/logotip/slideright.svg" alt="arrow-next"></button>',
        
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            }
        ]
    });
    

    // settings for slide popular product 
    $('.card-product__slider').slick({
        dots:false,
        arrows:true,
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        touchMove: true,

        prevArrow: '<button class="block-product__btn-slide product-slider__prev-black" type="button"><img src="img/logotip/slider-left-black.svg" alt="arrow-prev"></button>',
        nextArrow: '<button class="block-product__btn-slide product-slider__next-black" type="button"><img src="img/logotip/slider-right-black.svg" alt="arrow-next"></button>',
        
        responsive: [
            {
              breakpoint: 1251,
              settings: {
                slidesToShow: 3
              }
            },

            {
              breakpoint: 951,
              settings: {
                slidesToShow: 2
              }
            },

            {
              breakpoint: 701,
              settings: {
                dots: true,
                slidesToShow: 1,
                arrows:false
              }
            }
        ]
    });
    
});