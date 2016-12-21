
$(window).scroll( function() {
	
	var wscroll= $(this).scrollTop();
	if (wscroll> $('.playbutton').offset().top) {
		$('.as').addClass('fade-in');
	}
   if(wscroll>$('.box').offset().top) {
		$('.as1').addClass('fade-up');
	} 
	 if(wscroll>$('.as1').offset().top) {
		$('.as2').addClass('fade-up');
	} 
	 if(wscroll-100>$('.as1').offset().top) {
		$('.as3').addClass('fade-up');
	} 
	
});