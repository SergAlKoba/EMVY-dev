$(document).ready(function(){

    if($(window).width() >= 1280){

        $('.location').matchHeight({
            byRow: false
        });

    }

});

$(window).resize(function(){

    if($(window).width() >= 1280){

        $('.location').matchHeight({
            byRow: false
        });
        
    }

});

