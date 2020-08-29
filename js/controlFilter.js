$(function(){
    
    // script for settings filter
    // https://github.com/Dimox/jQueryFormStyler
    $('.filterStyle').styler();


    // script for input type range 
    // https://github.com/IonDen/ion.rangeSlider 
    $(".js-range-slider").ionRangeSlider({
    });

    //  script for filter btn SALE
    $('.sale-item-box').on('click', function(){
        $('.sale-item-box').removeClass('checkedSale');
        $(this).toggleClass('checkedSale');
    });

    // script for settings pluging rate-yo
    // https://github.com/prrashi/rateYo
    $("#rateYo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#c4c4c4",
        starWidth: "23px",
        spacing: "7px",
        readOnly: true
    });

});