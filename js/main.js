$(function(){
    // script for button tabs 
    $('.press-tab').on('click', function(evt){
        evt.preventDefault();

        $($(this).siblings()).removeClass('press-tab--active');
        $($(this).closest('.search-block__tabs-btn-wraper').siblings().find('div')).removeClass('press-tab-content--active');
        $(this).addClass('press-tab--active');
        
        $($(this).attr('href')).addClass('press-tab-content--active');

        $('.card-product__slider').slick('setPosition');
    })
    
    //  script for button heart in card product

    $('.card-product__slider-favorites').on('click', function(){
        $(this).toggleClass('card-product__slider-favorites--active');
    });

    // script for btn filter tabs
    
    $('.catalog__form-title-arrow').on('click', function(){
        $(this).toggleClass('catalog__form-title-arrow--active');
        $(this).next().slideToggle(200);
    });

    $('.additionally-filter__title-arrow').on('click', function(){
        $(this).toggleClass('additionally-filter__title-arrow--active');
        $(this).next().slideToggle(200);
    });


    // script for mobile btn

    $('.mobile-menu-btn').click(function(){
        $('.menu-mobile-list').toggleClass('menu-mobile-list--active');
    });

    // script for list item footer

    $('.page-footer__top-item-closed').click(function(){
        $(this).toggleClass('page-footer__top-item-open');
        $(this).children('.footer__list').toggleClass('footer__list--active');
    });
});



