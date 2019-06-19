 
//fancybox init
 $('.microblog-video a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});


//tooltip init
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//mobile menu
$('.menu-btn').on('click', function() {
	$('.menu').addClass('is-active');
});

$('.menu__close').on('click', function() {
	$('.menu').removeClass('is-active');
});