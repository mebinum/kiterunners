$(document).ready(function(argument) {

		var onMobile = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			onMobile = true;
		}
		$('.player').mb_YTPlayer();
		$('#home').css({
			'background': 'none'
		});
		$('#video-volume').bind('click', function(e) {
			e.preventDefault();

			$('#YTPlayer').toggleVolume();
		});

		var pageHeight = $(window).height();
		var pageWidth = $(window).width();
		var navigationHeight = $('#navigation').outerHeight();

		// $('#navigation').fixedonlater({
		// 	speedDown: 250,
		// 	speedUp: 100
		// });

		/* Scroll spy and scroll filter */
		$('#main-menu').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollOffset: navigationHeight - 10,
			scrollThreshold: 0.5,
			scrollSpeed: 750,
			filter: '',
			easing: 'swing'
		});

		// Fullscreen Height - keep it here to avoid sticky menu bug!
		function _fullscreen() {
			$('.full-screen, .full-screen ul, .full-screen li').height(pageHeight);
		}
		_fullscreen();

		$(window).resize(function() {
			_fullscreen();
		});

		// } else {
		// 	$('.player , #video-volume').hide();
		// }
});