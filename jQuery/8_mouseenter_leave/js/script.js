$(function(){

	/*
		마우스이벤트
		mouseenter 마우스 올렸을 때
		mouseleave 마우스 내렸을 때
	*/
	/*
	$('.box').click(function(){
		console.log('클릭');
	});

	$('.box').mouseenter(function(){
		console.log('올림');
	});
	$('.box').mouseleave(function(){
		console.log('내림');
	});
	
	//height가 줄어들다가 display: none되는 원리
	$('.box').mouseenter(function(){
		$(this).slideUp();
	});
	*/

	$('h2').click(function(){
		//$(this).siblings('p').slideDown();
		//$(this).parent('li').siblings('li').children('p').slideUp();
	});
	//아코디언메뉴
	$('.accor h2').click(function(){
		$('p').stop().slideUp();
		$(this).siblings('p').stop().slideDown();
	});

	//대메뉴 서브메뉴 열리게 하기
	$('.gnb').children('li').mouseenter(function(){
		$(this).children('.sub').stop().slideDown();
	});
	$('.gnb').children('li').mouseleave(function(){
		$(this).children('.sub').stop().slideUp();
	});

});