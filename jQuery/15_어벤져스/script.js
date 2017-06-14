$(function(){
	//$('ul.char li').animate({'top':0, 'opacity':1});

	/*
		.delay() .each()
		easing		각각 다른 속도감 주기		ui연결해줘야 easing기능 사용가능
		
		jquery-ui.min.js 연결 - 자주 사용하는 기능 - view source 보면 사용방법 나와있음
	*/

	//각각의 li는 다른 delay값을 가지고 animate + easing
	$('ul.char li').each(function(index){
		$(this).delay(index*200).animate({'top':0, 'opacity':1}, 500, 'easeOutBounce');
	});

	



	$('ul.char li').mouseenter(function(){
		$(this).children('h2').stop().fadeIn();
	});

	$('ul.char li').mouseleave(function(){
		$(this).children('h2').stop().fadeOut();
	});



	//.text();
	//클릭했을 때 제목 나타나게 하기
	$('ul.char li').click(function(){
		var txt = $(this).children('h2').text();
		$('h1').text(txt);

		//클릭하면 배경색이 바뀐다
		//클릭한 li의 순서를 찾아서 동일한 순서의 배열색 넣기
		var bgColor = ['red','yellow','green','blue','black'];
		var bgIndex = bgColor[index]
		$(bgColor).each(function(index){
			$(ul.char li).css('background-color',bgIndex);
		});
	});
});