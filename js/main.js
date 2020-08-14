$(function(){
    // script for button tabs 
    $('.press-tab').on('click', function(evt){
        evt.preventDefault();

        $('.press-tab').removeClass('press-tab--active');
        $('.search-block__content-item').removeClass('press-tab-content--active');
        $(this).addClass('press-tab--active');
        
        $($(this).attr('href')).addClass('press-tab-content--active');
    })
    
    //  script for button heart in card product

    $('.card-product__slider-favorites').on('click', function(){
        $(this).toggleClass('card-product__slider-favorites--active');
    });
});



