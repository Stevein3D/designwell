$(document).ready(function(){

/* ==========================================================================
   Adjust height of sidebar with page resize
   ========================================================================== */

	$(function(){

    var $sidebar = $('.sidebar');
    var $actionzone = $('.action-zone');
    var $samplebar = $('.sample-bar');

    var $window = $(window).on('resize', function(){
       var height = $(this).height();
       var sidewidth = $('.sidebar').width();
       var winwidth = $(window).width();
       $sidebar.height(height);
       $actionzone.width((winwidth - 2) - sidewidth);
       $actionzone.height(height - ($samplebar.height() + 4));
       $samplebar.width((winwidth - 2) - sidewidth);

    }).trigger('resize'); //on page load

  });

/* ==========================================================================
   Menu and submenu animations
   ========================================================================== */

  $('.nav-button').click(function(){
    var menuSelect = $(this).siblings('.sub-menu');
    $('.sub-menu').not(menuSelect).slideUp(300,'swing');
    $(menuSelect).slideToggle(300,'swing');
  });
  
  $('.sub-menu').mouseenter(function(){
    $('.sample-bar').slideToggle(300,'swing');
  });
  // $('.category').mouseleave(function(){
  //   $(this).children('.sub-menu').delay(300).slideUp(300,'swing');
  // });

  $('h1').mouseenter(function(){
      var color = $( this ).css( "background-color" );
    $( ".sample-bar" ).css( 'background-color','' + color + '');
      });
  


});

