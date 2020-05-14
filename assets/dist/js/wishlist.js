$(document).ready(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

    var product1 = $('.wishlist .product-items .product-item').outerHeight();
    var productHover1 = $('.wishlist .product-items .product-item .product-hover').outerHeight();
    $('.wishlist .product-items .product-item .bg').css({
        height: product1 - productHover1 - 2
    });

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

    var product1 = $('.wishlist .product-items .product-item').outerHeight();
    var productHover1 = $('.wishlist .product-items .product-item .product-hover').outerHeight();
    $('.wishlist .product-items .product-item .bg').css({
        height: product1 - productHover1 - 2
    });

});

