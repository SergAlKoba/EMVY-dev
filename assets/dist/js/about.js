$(document).ready(function(){

    $('.certificates-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.video-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-down"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-down"></i></button>',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.video-item').height($('.video-item').width()/1.5);

});

$(window).resize(function(){

    $('.video-item').height($('.video-item').width()/1.5);

});

