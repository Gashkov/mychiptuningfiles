$(document).ready(function() {
    //fancybox init
    $('.microblog-video a').fancybox({
     	caption: function(instance, item) {
     		return $(this).parent().find('.card-text').html();
     	}
     });


    //tooltip init
    $(function() {
     	$('[data-toggle="tooltip"]').tooltip()
     })

    //mobile menu
    $('.menu-btn').on('click', function() {
     	$('.menu').addClass('is-active');
    });

    $('.menu__close').on('click', function() {
     	$('.menu, .sub-nav').removeClass('is-active');
    });

     

    //resize function
    $(window).on("resize", function(e) {
     	checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
     	var newWindowWidth = $(window).width();
     	if (newWindowWidth < 481) {
     		$('.logo').on('click', function() {
		     	function stopDefAction(evt) {
		     		evt.preventDefault();
		     	}
		     	$('.sub-nav').addClass('is-active');
		    });
     	} 
    }

     //account lift-up
    $('.lift-up__btn').on('click', function() {
     	$('.lift-up').toggleClass('lift-up_active');
    });

});