

$(function(){


	/*

		1. 화면이 로딩되면 나타난다 .
		   fadeIn()  slideDown()  animate()

		2. 차례대로 나타난다
		   eq()   delay()

	*/ 
		
	/*
		$('.test li').eq(0).delay(0).animate({ 'opacity' : 1 });
		$('.test li').eq(1).delay(200).animate({ 'opacity' : 1 });
		$('.test li').eq(2).delay(400).animate({ 'opacity' : 1 });
		$('.test li').eq(3).delay(600).animate({ 'opacity' : 1 });
		$('.test li').eq(4).delay(800).animate({ 'opacity' : 1 });
	*/
	

	/*
		.each();   index순서대로 갯수만큼 반복함
	*/
	/*
	$('.btn1').click(function(){
		$('.test li').each(function(index){
			$('.test li').eq(index).delay(index*200).animate({ 'opacity' : 1 });
		});
	});
	*/


	// for(초기값; 범위; 증감){ 동작 }
	/*
	for(i=1; i<7; i++){
		document.write(i);
	}
	*/
	
	for(i=0; i<5; i++){
		// 0 ~ 4
		$('.test li').eq(i).delay(i*200).animate({ 'opacity' : 1 });
	}



	// 화면이 로딩되면 캐릭터 이미지가 차례대로 나타난다

	$('.monster div').each(function(index){
		$('.monster div').eq(index).delay(index*200).fadeIn();
	});



	// mouseenter   mouseleave
	// hover(function(){올리면}, function(){내리면});
	// 마우스 올리면 이미지가 커지고, 내리면 작아진다
	// 마우스 올리면 .big이 붙고, 내리면 떨어진다.


	$('.monster div').hover(function(){

		// 올렸을때
		$(this).children('img').addClass('big');

	}, function(){

		// 내렸을때
		$('.monster div').children('img').removeClass('big');

	});



	/*
		monster2에 마우스를 올리면 이미지가 나타난다
		.wrap2 div에 hover했을 때 이미지 top이 조절된다
		.hover(function(){ 올렸을 때 }, function(){ 내렸을 때 });

		.stop()은 선택자와 메서드 사이에 위치.
	*/
	$('.wrap div').hover(function(){
		//올렸을 때
		$(this).children('img').stop().animate({ 'top' : 0 });
	}, function(){
		//내렸을 때
		$(this).children('img').stop().animate({ 'top' : 280 });
	});


});


