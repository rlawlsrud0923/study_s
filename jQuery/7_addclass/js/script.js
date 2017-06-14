$(function(){

/*
	addClass();		클래스를 넣는다
	removeClass();	클래스를 없앤다
	hasClass();		클래스 가지고 있는지 확인 true/false
	toggleClass();	클래스의 추가/제거를 한번에 처리

	:before			=			.prepend();
	:after				=			.append();
	.prependTo();
	.appendTo();

	$().eq();				index 선택자 / 0부터 시작
*/

	$('.btn3').click(function(){

		var a = $('.box1').hasClass('add');
		//alert(a);		true/false

		
		//if(조건)(동작)else(동작)
				
		if(a==true){
			$('.box1').removeClass('add');
		}else{
			$('.box1').addClass('add');
		}
	});



	//이미지 바꾸기 - img에 hide클래스 add했다가 remove했다가
	$('.btn4').click(function(){
		/*
		var b = $('.box2 img').hasClass('hide');

		if(b==true){
			$('.box2 img').removeClass('hide');
		}else{
			$('.box2 img').addClass('hide');
		}
		*/
		$('.box2 img').toggleClass('hide');
	});

	/*
	$('.test').prepend('☆');				//before 위치에 별박힘
	$('.test').append('☆');				//after 위치에 별박힘

	
	$('li.color').prependTo('.test');	//앞으로 보낸다
	$('li.color').appendTo('.test');		//뒤로 보낸다

	*/

	$('.btn5').click(function(){
		$('.test li').eq(0).appendTo('.test'); //첫번째 li를 뒤로 보낸다
	});




	$('.prev').click(function(){
		$('.slide img').eq(0).appendTo('.slide');
	});

	$('.next').click(function(){
		$('.slide img').eq(4).prependTo('.slide');
	});
});