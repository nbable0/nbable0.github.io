/*parsley validation*/
$(function () {
  $('#registerForm').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
  })
  .on('form:submit', function() {
    return false; 
  });

$(document).on('scroll', showScroll);

});


/*for scroll animation*/

function showScroll(event){
    if ($(window).scrollTop() >= 150){
        $('#fade-in').fadeIn(2000);
    }else{
        $('#fade-in').fadeOut(2000);
    }
    console.log(window.pageYOffset);
}



/*for apple page*/
$(document).ready(function(){
    $('.box-shadow-menu').on('mouseover',function(){
        $('.wrapper #list_a li').toggle(1000);
    });
})