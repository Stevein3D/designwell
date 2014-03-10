$(document).ready(function(){

/* ==========================================================================
   Page Resize
   ========================================================================== */

	$(function(){

    var $sideBar = $('.sidebar');
    var $stage = $('#stage');
    var $sampleBar = $('.sample-bar');
    var $slide = $('#slideshow');

    var $window = $(window).on('resize', function(){
       var height = $(this).height();
       var sideWidth = $('.sidebar').width();
       var winWidth = $(window).width();
       $sideBar.height(height);
       // $slide.width((winWidth - 2) - sideWidth);
       // $stage.width((winWidth - 2) - sideWidth);
       $stage.height(height);
       $sampleBar.width((winWidth - 2) - sideWidth);

    }).trigger('resize'); //on page load

  });
//    var $splashSet = $(".splash-set");
// $splashSet.find("img:gt(0)").hide();
// setTimeout(Rotate, 3000);

// function Rotate() {
//     var $current = $splashSet.find("img:visible");
//     var $next = $current.next();
//     if ($next.length == 0) $next = $splashSet.find("img:eq(0)");
//     $current.hide();
//     $next.slideDown(600);
//     setTimeout(Rotate, 3000);
// }
$('.splash').click(function(){
  $('#slideshow').cycle('toggle');
});

// $('#pixels').click(function() {
//     $('.action-zone').cycle(0);
//     return false;
// });
 
// $('#paper').click(function() {
//     $('.action-zone').cycle(1);
//     return false;
// });
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
