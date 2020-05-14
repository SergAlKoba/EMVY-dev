$(document).ready(function(){

    $('.product-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,        
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.product-item p').matchHeight({
        byRow: false
    });

    $('.conbiner-hover li').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.filter-link').on('click', function(){
        $('.filter-content').addClass('active');
    });

    $('.close-filter').on('click', function(){
        $('.filter-content').removeClass('active');
    });


    var product1 = $('.catalog .product-items .product-item').outerHeight();
    var productHover1 = $('.catalog .product-items .product-item .product-hover').outerHeight();
    $('.catalog .product-items .product-item .bg').css({
        height: product1 - productHover1 - 2
    });

    var product2 = $('.catalog .product .product-item').outerHeight();
    var productHover2 = $('.catalog .product .product-item .product-hover').outerHeight();
    $('.catalog .product .product-item .bg').css({
        height: product2 - productHover2 - 2
    });

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

    var product1 = $('.catalog .product-items .product-item').outerHeight();
    var productHover1 = $('.catalog .product-items .product-item .product-hover').outerHeight();
    $('.catalog .product-items .product-item .bg').css({
        height: product1 - productHover1 - 2
    });

    var product2 = $('.catalog .product .product-item').outerHeight();
    var productHover2 = $('.catalog .product .product-item .product-hover').outerHeight();
    $('.catalog .product .product-item .bg').css({
        height: product2 - productHover2 - 2
    });

});

