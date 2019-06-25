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
     	$('.menu').addClass('is-active').animate({width:'left'}, 300);;
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

    //dynamic placeholder for search field
     	if ($(window).width() < 768 ) {
		    $(".search__field").attr("placeholder","Begin hier met zoeken");
		}
		else { $(".search__field").attr("placeholder","U kunt hier zoeken naar alle voertuigen, nieuws en dealer pakketten");}

    }

     //account lift-up
    $('.lift-up__btn').on('click', function() {
     	$('.lift-up').toggleClass('lift-up_active');
    });

});