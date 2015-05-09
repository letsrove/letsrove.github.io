/*
	Directive by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: 'css/style.css', containers: '51em', grid: { gutters: 30 } },
			wide:		{ range: '-1680', href: 'css/style-wide.css' },
			normal:		{ range: '-1280', href: 'css/style-normal.css', containers: '48em' },
			narrow:		{ range: '-980', href: 'css/style-narrow.css', containers: '95%', grid: { gutters: 30 } },
			narrower:	{ range: '-840', href: 'css/style-narrower.css', containers: '95%!', grid: { gutters: 20 } },
			mobile:		{ range: '-736', href: 'css/style-mobile.css', containers: '90%!', grid: { gutters: 20 }, viewport: { scalable: false } },
			mobilep:	{ range: '-480', href: 'css/style-mobilep.css', containers: '100%!' }
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

    function submitForm(){
      $.ajax({
        type: "POST",
        dataType: 'jsonp',
        url: 'https://docs.google.com/forms/d/1_Ypa2PeHPajh3jqdftKjdqETKsAWyJFt2wEY7pvpte8/formResponse',
        data: $("form").serialize()
      }).always(function(){
        showSuccess();
      });
    }

    function showSuccess(){
      $('.form').fadeOut(300, function(){
        $('.form-success').fadeIn(300);
      });
    }

    $('form input[type="submit"]').on('click', function(e) {
      e.preventDefault();
      submitForm();
    });
	});

})(jQuery);
