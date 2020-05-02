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
                breakpoint: 1280,
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
        byRow: true
    });

    $('.complex-item .img').matchHeight({
        byRow: true
    });

    $('.conbiner li').on('click', function(){
        $(this).toggleClass('active');
    });
    
    $('.manual-tabs li').on('click', function(){
        var manual = $(this).data('manual');
        $('.manual-tabs li').removeClass('active');
        $('.manual-content').removeClass('active');
        $(this).addClass('active');
        $('.' + manual).addClass('active');
    });
    
    $('.review').on('click', function(){
        var review = $(this).data('manual');
        $('.manual-content').removeClass('active');
        $('.' + review).addClass('active');
        $('.manual-tabs li').removeClass('active');
        $('.manual-tabs li:last-child').addClass('active');
        event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top -40;
		$('body,html').animate({scrollTop: top}, 1500);
    });

    $('.review-write').on('click', function(){
        event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top -130;
		$('body,html').animate({scrollTop: top}, 1500);
    });

    $('.conbiner-hover li').on('click', function(){
        $(this).toggleClass('active');
    });

    jcf.replaceAll();

});

$(window).resize(function(){

    $('.product-item p').matchHeight({
        byRow: true
    });

});

