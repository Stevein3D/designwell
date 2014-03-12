$(document).ready(function(){

/* ==========================================================================
   Page Resize
   ========================================================================== */

	$(function(){

    var $sideBar = $('.sidebar');
    var $stage = $('#stage');
    var $slide = $('#slideshow');
    var $container = $('#container')

    var $window = $(window).on('resize', function(){
       var winHeight = $(this).height();
       var sideWidth = $('.sidebar').width();
       var winWidth = $(this).width();
       $container.height(winHeight);
       $sideBar.height(winHeight);
       $stage.height(winHeight);

    }).trigger('resize'); //on page load

  });

$('.splash').click(function(){
  $('#slideshow').cycle('toggle');
});

/* ==========================================================================
   Menu and submenu animations
   ========================================================================== */

  $('.nav-button').click(function(){
    var menuSelect = $(this).siblings('.sub-menu');
    $('.nav-button').removeClass('focusbutton');
    $(this).addClass('focusbutton');
    $('.sub-menu').not(menuSelect).slideUp(300,'swing');
    $(menuSelect).delay(300).slideToggle(300,'swing');
  });

  $('.sub-cat').click(function(){
    $('.sample-bar').slideDown(300,'swing');
  });

  $('.sub-cat').click(function(){
    $('.sub-cat').removeClass('focusbutton');
    $(this).addClass('focusbutton');
  });

/* ==========================================================================
   Play selected video
   ========================================================================== */

  $('.thumbnail').click(function(){
      var $url = $(this).attr('id');
      var $brief = $(this).attr('description');
      var $title = $(this).attr('title');

      $('iframe').attr('src',"http://player.vimeo.com/video/" + $url + "?autoplay=1");
      $('div.words p').text($brief);
      $('h3').text($title);
  });

  $('#print').click(function(){
    $('#motion-container').fadeOut(300);
    $('#print-container').delay(300).fadeIn(600);
  });

  $('#motion').click(function(){
    $('#print-container').fadeOut(300);
    $('#motion-container').delay(300).fadeIn(600);
  });

});
