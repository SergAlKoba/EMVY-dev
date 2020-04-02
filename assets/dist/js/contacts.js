$(document).ready(function(){

    if($(window).width() < 1280 ){
        $('.feedback-content').hide();
        $('.feedback h3').on('click', function(){
            $(this).toggleClass('active');
            $('.feedback-content').toggle('show');
        });
    }else{
        $('.feedback-content').show();
    }

});

$(window).resize(function(){

    if($(window).width() < 1280 ){
        $('.feedback-content').hide();
    }else{
        $('.feedback-content').show();
    }

});

