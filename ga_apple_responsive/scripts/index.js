$(document).ready(function(){
    $('.box-shadow-menu').on('mouseover',function(){
        $('.wrapper #list li').toggle(1000);
    });
})

$(window).resize(function() {
    if($(window).width() > 650) // or 768
        $('.wrapper #list').show();
});