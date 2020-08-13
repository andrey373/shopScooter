
$(function(){

    $('.block-slider__slider').slick({
        dots:true,
        arrows:true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        touchMove: true,

        prevArrow: '<button class="block-slider__btn-slide block-slider__prev" type="button"><img src="img/logotip/slideleft.svg" alt="arrow-prev"></button>',
        nextArrow: '<button class="block-slider__btn-slide block-slider__next" type="button"><img src="img/logotip/slideright.svg" alt="arrow-next"></button>' 
    });
    
});