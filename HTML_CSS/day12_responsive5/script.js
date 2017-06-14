$( document ).ready( function() {
	$('#menu').click( function() {
		$('#content').slideDown();
	});
	$('#home').click( function() {
		$('#content').slideUp();
	});
});