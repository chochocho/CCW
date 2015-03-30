// Scroll-Toggle

$(function() {
    $('#nav-trigger').click(function(){
        $('.nav').slideToggle(100);
    });
    $('#follow-trigger').click(function(){
        $('.follow-links').slideToggle(100);
    });
});

// Skrollr

var s = skrollr.init();

// Moment 

var update = function () {
    $('#day').html(moment().format('MMM. DD, YYYY'));
    $('#time').html(moment().format('HH:mm:ss'));
}

$(document).ready(function(){
    update();
    setInterval(update, 1000);
});
