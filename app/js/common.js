 
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