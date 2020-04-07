$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    $('.open-menu').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.colse-menu').on('click', function(){
        $('.menu').removeClass('active');
    });

    $('.basket-open').on('click', function(){
        $('.basket-product').addClass('active');
        $('.close-basket').addClass('active');
        $('.personal-content').removeClass('active');
    });

    $('.personal-area').on('click', function(){
        $('.personal-content').addClass('active');
        $('.close-basket').addClass('active');
        $('.basket-product').removeClass('active');
    });

    $('.basket-product .remove').on('click', function(){
        $(this).parent('.product-item').remove();
    });

    $('.close-basket').on('click', function(){
        $('.basket-product').removeClass('active');
        $('.close-basket').removeClass('active');
        $('.personal-content').removeClass('active');
    });

    $('.callback_js').on('click', function(){
        $('.callback').addClass('active');
    });

    $('.close').on('click', function(){
        $('.callback').removeClass('active');
        $('.added-cart').removeClass('active');
    });

    $('.close-popup').on('click', function(){
        $('.callback').removeClass('active');
    });

    jcf.replaceAll();

    $(".basket-product .items").mCustomScrollbar();

    $('.search-open').on('click', function(){
        $('.form .form-content').addClass('active');
        $('header').addClass('search-form');
    });

    $('.search-close').on('click', function(){
        $('.form .form-content').removeClass('active');
        $('header').removeClass('search-form');
    });

});