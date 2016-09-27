/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var currentModal;
$('div.modal').on('show.bs.modal', function() {
	var modal = this;
  currentModal = modal;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$(document).ready(function($) {
  var minHeight = 0;
  $('.portfolio-item .portfolio-caption').each(function(i, item) {
    if ( $(item).innerHeight() > minHeight ) {
      minHeight = $(item).innerHeight();
      $('.portfolio-item .portfolio-caption').innerHeight(minHeight);
      $('.portfolio-item .portfolio-caption').outerHeight(minHeight);
    }
  });

  $(document).on('keyup', $('body'), function(e) {
    if (e.keyCode == 27 && $(currentModal).length) {
      $(currentModal).modal('hide');
    }
  })
});
