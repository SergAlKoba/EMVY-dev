$(document).ready(function(){

    $('.reviews-item article').readmore({
        speed: 175,
        maxHeight: 70,
        moreLink: '<a href="#">Читать полностью</a>',
        lessLink: '<a href="#">Свернуть</a>'
    });

    $('.video-item').height($('.video-item').width()/1.5);

});

$(window).resize(function(){

    $('.video-item').height($('.video-item').width()/1.5);

});

