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
     	
     	if (newWindowWidth < 767) {
     		$('.logo').on('click', function() {
		     	function stopDefAction(evt) {
		     		evt.preventDefault();
		     	}
		     	$('.sub-nav').addClass('is-active');
		    });

		    //merken dropdown
		    $('.dropdown-title').on('click', function() {
		    	$(this).toggleClass('dropdown-title_active');
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

    //dealer modal steps
    var dealerStepFirst = $('.first-step');
    var dealerStepSecond = $('.second-step');
    var dealerStepThird = $('.third-step');

    $('li.dealer-item').on('click', function() {
    	dealerStepFirst.css('display', 'none');
    	$('.second-step').css('display', 'block');
    })
    $('.dealer-mail').on('click', function(e) {
    	e.preventDefault();
    	dealerStepSecond.css('display', 'none');
    	dealerStepThird.css('display', 'block');
    });
    $('#back-first').on('click', function() {
    	$(this).parent().parent('.dropdown-list').css('display', 'none');
    	dealerStepFirst.css('display', 'block');
    	dealerStepSecond.css('display', 'none');
    });
    $('#back-second').on('click', function() {
    	dealerStepSecond.css('display', 'block');
    	dealerStepThird.css('display', 'none');
    });

    //choose-model dropdown
    $('.choose-model__btn').on('click', function() {
    	$(this).siblings('.dropdown-list').css('display', 'block');
    });
    $('#all-models').on('click', function() {
    	$('.second-step').css('display', 'none');
    	$('.third-step').css('display', 'block');
    });
    $('.second-step .back-click').on('click', function() {
    	$('.second-step').css('display', 'none');
    	$('.first-step').css('display', 'block');
    });
    $('.third-step .back-click').on('click', function() {
    	$('.third-step').css('display', 'none');
    	$('.second-step').css('display', 'block');
    });
    $(document).mouseup(function (e) {
	    var container = $(".dropdown-list");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});

    //check active select
	$('.custom-select option:eq(0)').prop('selected', true)
	$(".custom-select").addClass("custom-select_active").on('change', function() {
		var optionIndex = $(this).find('option:selected').index();
		$(this).toggleClass('custom-select_active', optionIndex == 0);
	});


});