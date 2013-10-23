$(document).ready(function(){

	$( "h1" ).mouseenter(function() {
			var color = $( this ).css( "background-color" );
		$( ".bar" ).css( 'background-color','' + color + '');
			});

	$(function(){

    var $header = $('#header');
    var $footer = $('#footer');
    var $vertbar = $('#vertbar');
    var $window = $(window).on('resize', function(){
       var height = $(this).height();
       $vertbar.height(height);
    }).trigger('resize'); //on page load

});

});