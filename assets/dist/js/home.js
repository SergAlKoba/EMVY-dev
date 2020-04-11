$(document).ready(function(){

    $('.banner-slider').slick({
        dots: true,
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(slider, i) { 
            return '<button class="tab"><span></span><i class="fa fa-sort-asc"></i></button>';
        },
    });

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

    $(".top-slroll").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    // nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
    // prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',

    $('.product-item p').matchHeight({
        byRow: true
    });

    $('.reviews-item article').readmore({
        speed: 175,
        maxHeight: 146,
        moreLink: '<a href="#">Читать полностью</a>',
        lessLink: '<a href="#">Свернуть</a>'
    });

    if($(window).width() >= 768){

        $('.reviews-item article').readmore({
            maxHeight: 80,
            moreLink: '<a href="#">Читать полностью</a>',
            lessLink: '<a href="#">Свернуть</a>'
        });

    }

    if($(window).width() >= 1024){

        $('.reviews-item article').readmore({
            maxHeight: 64,
            moreLink: '<a href="#">Читать полностью</a>',
            lessLink: '<a href="#">Свернуть</a>'
        });

    }

    $('.video-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.conbiner-hover li').on('click', function(){
        $(this).toggleClass('active');
    });

    if($(window).scrollTop() >= 10){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

});

$(window).scroll(function(){

    if($(window).scrollTop() >= 10){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }

});
