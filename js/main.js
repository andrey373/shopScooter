$(function(){

    $('.tabs-btn__link').on('click', function(evt){
        evt.preventDefault();

        $('.tabs-btn__link').removeClass('tabs-btn__link--active');
        $('.search-block__content-item').removeClass('search-block__content-item--active');
        $(this).addClass('tabs-btn__link--active');
        
        $($(this).attr('href')).addClass('search-block__content-item--active');
    })   
});



