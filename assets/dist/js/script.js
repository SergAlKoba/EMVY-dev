$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    $('.open-menu').on('click', function(){
        $('.menu').addClass('active');
        console.log(1)
    });

    $('.colse-menu').on('click', function(){
        $('.menu').removeClass('active');
        console.log(0)
    });

});