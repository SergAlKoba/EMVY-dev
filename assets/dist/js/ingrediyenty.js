$(document).ready(function(){

    $('.icon-nav-copy').on('click', function(){
        var popupImg = $(this).next().attr('src');
        $('.popup-img img').attr('src', popupImg);
        $('.popup-img').addClass('active');
    });

    $('.img-close').on('click', function(){
        $('.popup-img').removeClass('active');
    });

});

$(window).resize(function(){



});

