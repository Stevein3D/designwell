$(document).ready(function(){

/* ==========================================================================
   Page Resize
   ========================================================================== */

	$(function(){

    var $sideBar = $('.sidebar');
    var $slide = $('#slideshow');
    var $container = $('#container')

    var $window = $(window).on('resize', function(){
       var winHeight = $(this).height();
       var sideWidth = $('.sidebar').width();
       var winWidth = $(this).width();
       $container.height(winHeight);
       $sideBar.height(winHeight);

    }).trigger('resize'); //on page load

  });

// $('.splash').click(function(){
//   $('#slideshow').cycle('toggle');
// });

//Add Title to images with only "alt"

$(function() {
  $('img').each( function() {
    var o = $(this);
    if( ! o.attr('title') && o.attr('alt') ) o.attr('title', o.attr('alt') );
  });
});

//Resizes images to fit their container


  

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
   Update thumbnails for selected subcategory
   ========================================================================== */

$('.titles-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#titles').delay(300).fadeIn(600);
  });
  $('.animation-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#animation').delay(300).fadeIn(600);
  });
  $('.montage-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#montage').delay(300).fadeIn(600);
  });

  $('.posters-button').click(function(){
    $('#posters, #packaging, #collateral').fadeOut(300);
    $('#posters').delay(300).fadeIn(600);
  });  
  $('.packaging-button').click(function(){
    $('#posters, #packaging, #collateral').fadeOut(300);
    $('#packaging').delay(300).fadeIn(600);
  });
  $('.collateral-button').click(function(){
    $('#posters, #packaging, #collateral').fadeOut(300);
    $('#collateral').delay(300).fadeIn(600);
  });

  $('.staff-button').click(function(){
    $('#blog, #staff, #clients, #affiliations').fadeOut(300);
    $('#staff').delay(300).fadeIn(600);
  });
  $('.clients-button').click(function(){
    $('#blog, #staff, #clients, #affiliations').fadeOut(300);
    $('#clients').delay(300).fadeIn(600);
  });
  $('.affiliations-button').click(function(){
    $('#blog, #staff, #clients, #affiliations').fadeOut(300);
    $('#affiliations').delay(300).fadeIn(600);
  });

/* ==========================================================================
   Update stage with selected video or picture
   ========================================================================== */
  
  $('.thumbnail').click(function(){
      var $url = $(this).children('img').attr('id');
      var $brief = $(this).children('img').attr('description');
      var $title = $(this).children('img').attr('title');

      $('iframe').attr('src',"http://player.vimeo.com/video/" + $url + "?autoplay=1");
      $('div.video-brief p').text($brief);
      $('div.motion-title h3').text($title);
  });



/* ==========================================================================
   Change category view
   ========================================================================== */
  $('.print').click(function(){
    // $('iframe#nowPlaying').attr('src',''); 
    $('#splash-container, #motion-container, #about-container').fadeOut(300);
    $('#print-container').delay(300).fadeIn(600);
  });

  $('.motion').click(function(){
    // $('iframe#nowPlaying').attr('src',''); 
    $('#splash-container, #print-container, #about-container').fadeOut(300);
    $('#motion-container').delay(300).fadeIn(600);
  });

  $('.about').click(function(){
    // $('iframe#nowPlaying').attr('src',''); 
    $('#splash-container, #print-container, #motion-container').fadeOut(300);
    $('#about-container').delay(300).fadeIn(600);
  });
  

});