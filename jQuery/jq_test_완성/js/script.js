$(function(){
	
	//  작은 이미지에 마우스를 올리면 큰 이미지가 나타난다
	// li에 hover하면, .bg에 .show가 붙는다(마우스떼면 show도 없어진다)
	
	// 마우스를 올리면 show가 붙고, 
	// 다른애한테 마우스 올리면 이전show가 없어진다




	/*
		마우스를 올리면   mouseenter
		그 li가 몇번째인지 찾아서  index()
		동일한 순서의 bg를 보이게 한다  eq()
		나머지는 안보이게 한다  siblings()
	*/ 

	$('.banner li').mouseenter(function(){
		
		var a = $(this).index(); // 0 1 2
		// alert(a);

		$('.full_bg div').eq(a).addClass('show');
		$('.full_bg div').eq(a).siblings('div').removeClass('show');

		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');

	});









	/*
	// index();    순서를 찾는 메서드

	$('.banner li').click(function(){
		var a = $(this).index();
		alert(a);
	});
	*/




	
	/*
	$('.banner li').eq(0).mouseenter(function(){
		$('.full_bg div').eq(0).addClass('show');
		$('.full_bg div').eq(0).siblings('div').removeClass('show');
	});

	$('.banner li').eq(1).mouseenter(function(){
		$('.full_bg div').eq(1).addClass('show');
		$('.full_bg div').eq(1).siblings('div').removeClass('show');
	});

	$('.banner li').eq(2).mouseenter(function(){
		$('.full_bg div').eq(2).addClass('show');
		$('.full_bg div').eq(2).siblings('div').removeClass('show');
	});
	*/


	/*
	$('.banner li').eq(0).hover(function(){
		$('.full_bg div').eq(0).addClass('show');
	}, function(){
		$('.full_bg div').eq(0).removeClass('show');
	});
	*/

});