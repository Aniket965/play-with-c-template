
$(window).scroll( function() {
	
	var wscroll= $(this).scrollTop();
	if (wscroll> $('.playbutton').offset().top) {
		$('.as').addClass('fade-in');
	}

});