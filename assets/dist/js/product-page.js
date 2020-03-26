$(document).ready(function(){

    $('.product-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,        
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
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
        byRow: true
    });

    $('.conbiner a').on('click', function(){
        $(this).toggleClass('active');
    });

    jcf.replaceAll();

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

});

