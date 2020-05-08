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

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

});

