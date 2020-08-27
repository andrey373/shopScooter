$(function(){
    
    // script for settings filter
    $('.filterStyle').styler();


    // script for input type range
    $(".js-range-slider").ionRangeSlider({
    });

    //  script for filter btn SALE
    $('.sale-item-box').on('click', function(){
        $('.sale-item-box').removeClass('checkedSale');
        $(this).toggleClass('checkedSale');
    });

});