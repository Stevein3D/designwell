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

$('.splash').click(function(){
  $('#slideshow').cycle('toggle');
});

//Add Title to images with only "alt"

$(function() {
  $('img').each( function() {
    var o = $(this);
    if( ! o.attr('title') && o.attr('alt') ) o.attr('title', o.attr('alt') );
  });
});

//Resizes images to fit their container

$(function OnImageLoad(evt) {

    var img = evt.currentTarget;

    // what's the size of this image and it's parent
    var w = $(img).width();
    var h = $(img).height();
    var tw = $(img).parent().width();
    var th = $(img).parent().height();

    // compute the new size and offsets
    var result = ScaleImage(w, h, tw, th, true);

    // adjust the image coordinates and size
    img.width = result.width;
    img.height = result.height;
    $(img).css("left", result.targetleft);
    $(img).css("top", result.targettop);
});

$(function ScaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {

    var result = { width: 0, height: 0, fScaleToTargetWidth: true };

    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
        return result;
    }

    // scale to the target width
    var scaleX1 = targetwidth;
    var scaleY1 = (srcheight * targetwidth) / srcwidth;

    // scale to the target height
    var scaleX2 = (srcwidth * targetheight) / srcheight;
    var scaleY2 = targetheight;

    // now figure out which one we should use
    var fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
        fScaleOnWidth = fLetterBox;
    }
    else {
       fScaleOnWidth = !fLetterBox;
    }

    if (fScaleOnWidth) {
        result.width = Math.floor(scaleX1);
        result.height = Math.floor(scaleY1);
        result.fScaleToTargetWidth = true;
    }
    else {
        result.width = Math.floor(scaleX2);
        result.height = Math.floor(scaleY2);
        result.fScaleToTargetWidth = false;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);

    return result;
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
   Update thumbnails for selected subcategory
   ========================================================================== */

$('#titles-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#titles').delay(300).fadeIn(600);
  });
  $('#animation-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#animation').delay(300).fadeIn(600);
  });
  $('#montage-button').click(function(){
    $('#titles, #animation, #montage').fadeOut(300);
    $('#montage').delay(300).fadeIn(600);
  });

  $('#posters-button').click(function(){
    $('#posters, #packaging, #collateral').fadeOut(300);
    $('#posters').delay(300).fadeIn(600);
  });  
  $('#collateral-button').click(function(){
    $('#posters, #packaging, #collateral').fadeOut(300);
    $('#collateral').delay(300).fadeIn(600);
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
      $('div.shadow-box h3').text($title);
  });

  $('.thumb-box').click(function(){
      var $url = $(this).children('img').attr('src');
      var $brief = $(this).children('img').attr('description');
      var $title = $(this).children('img').attr('title');

      $('.dark-box img').attr('src',$url);
      $('div.photo-brief p').text($brief);
      $('div.shadow-box h3').text($title);
  });


/* ==========================================================================
   Change category view
   ========================================================================== */

  // $('#print').click(function(){
  //   $('#motion-container, #about-container').fadeOut(300);
  //   $('#print-container').delay(300).fadeIn(600);
  // });

  // $('#motion').click(function(){
  //   $('#print-container, #about-container').fadeOut(300);
  //   $('#motion-container').delay(300).fadeIn(600);
  // });

  // $('#about').click(function(){
  //   $('#print-container, #motion-container').fadeOut(300);
  //   $('#about-container').delay(300).fadeIn(600);
  // });

});
