$(document).ready(function(){ 
$( "#list" ).animate({
  height: 205,
  width: 350,
  opacity: 1
}, 1000, "linear", function() {
});
$( "h1" ).animate({
  height: 150,
  width: 400,
  opacity: 1
}, 1000, "linear", function() {
});
});

// experiment
$(window).scroll(function() {
  if ($(this).scrollTop()> 800) {
    $('nav').fadeIn();
   } else {
    $('nav').fadeOut();
   }
});

/// Scroll back to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


