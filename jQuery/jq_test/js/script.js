$(function(){
	$('.banner li').mouseenter(function(){
		var a = $(this).index(); //0 1 2
		//alert(a);

		$('.full_bg div').eq(a).addClass('show');
		$('.full_bg div').eq(a).siblings('div').removeClass('show');

		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');


		
	});
});