// Scroll-Toggle

$(function() {
    $('#menu-trigger').click(function(){
        $('.menu').slideToggle(100);
    });
    $('#social-trigger').click(function(){
        $('.social-links').slideToggle(100);
    });
});

// Moment 

var update = function () {
    $('#day').html(moment().format('MMM. DD, YYYY'));
    $('#time').html(moment().format('HH:mm:ss'));
}

$(document).ready(function(){
    update();
    setInterval(update, 1000);
});

// Lettering.js

$(document).ready(function() {
  $(".product-title").lettering('words');
});