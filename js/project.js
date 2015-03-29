$(function() {
    $('#nav-trigger').click(function(){
        $('.nav').slideToggle(100);
    });
    $('#follow-trigger').click(function(){
        $('.follow').slideToggle(100);
    });
});

var s = skrollr.init();