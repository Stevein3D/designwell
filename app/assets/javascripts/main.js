$(document).ready(function(){

/* ==========================================================================
   Adjust height of sidebar with page resize
   ========================================================================== */

	$(function(){

    var $header = $('#header');
    var $footer = $('#footer');
    var $vertbar = $('#vertbar');
    var $window = $(window).on('resize', function(){
       var height = $(this).height();
       $vertbar.height(height);
    }).trigger('resize'); //on page load

  });

/* ==========================================================================
   Menu and submenu animations
   ========================================================================== */

  $('.nav-button').click(function(){
    var menuSelect = $(this).siblings('.sub-menu');
    $('.sub-menu').not(menuSelect).slideUp(300,'swing');
    $(menuSelect).slideToggle(300,'swing');


    // $('.sub-menu').slideUp(300,'swing');
    
  });
  
  // $('.category').mouseleave(function(){
  //   $(this).children('.sub-menu').delay(300).slideUp(300,'swing');
  // });

  $('h1').mouseenter(function(){
      var color = $( this ).css( "background-color" );
    $( ".bar" ).css( 'background-color','' + color + '');
      });

  


});

