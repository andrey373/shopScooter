
$(function(){

    let btnNextMainSlide = (
        `<button class="block-slider__btn-slide block-slider__next" type="button">
        <img src="img/logotip/slideright.svg" alt="arrow-next">
        </button>`
    );
    let btnPrevMainSlide = (
        `<button class="block-slider__btn-slide block-slider__prev" type="button">
        <img src="img/logotip/slideleft.svg" alt="arrow-prev">
        </button>`
    );

    $('.block-slider__slider').slick({
        dots:true,
        arrows:true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        touchMove: true,

        prevArrow: btnPrevMainSlide,
        nextArrow: btnNextMainSlide
    });
    
});