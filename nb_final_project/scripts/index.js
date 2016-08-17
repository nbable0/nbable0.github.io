/*parsley validation*/
$(function () {
  $('#registerForm').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
  })
  .on('form:submit', function() {
    return false; 
  });

$(document).on('scroll', showScroll);

$(document).on('scroll', showContact);

});

/*for scroll animation*/

function showScroll(event){
    if ($(window).scrollTop() >= 500){
        $('#fade-in').fadeIn(2000);
    }else{
        $('#fade-in').fadeOut(1000);
    }
    console.log(window.pageYOffset);
}

function showContact(event){
    if ($(window).scrollTop() >= 1300){
        $('#fade-contact').fadeIn(2500);
    }else{
        $('#fade-contact').fadeOut(1000);
    }
}


/*for apple page*/
$(document).ready(function(){
    $('.box-shadow-menu').on('mouseover',function(){
        $('.wrapper #list_a li').toggle(1000);
    });
})