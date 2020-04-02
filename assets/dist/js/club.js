$(document).ready(function(){

    if($(window).width() >= 1024) {
        $('.club-item h4').matchHeight({
            byRow: true
        });
        $('.club-item p').matchHeight({
            byRow: true
        });
    }

});

$(window).resize(function(){

    if($(window).width() >= 1024) {
        $('.club-item h4').matchHeight({
            byRow: true
        });
        $('.club-item p').matchHeight({
            byRow: true
        });
    }

});

