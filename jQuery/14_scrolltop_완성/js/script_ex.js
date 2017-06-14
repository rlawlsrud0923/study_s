
$(function(){

	// 메뉴 클릭했을때 스크롤 이동
	
	$('.gnb li a').click(function(){
		
		event.preventDefault(); 

		$('html, body').animate({ 'scrollTop' : $(this.hash).offset().top }, 400);

	});

	
	// offset().top; 
	// position().top;
	/*
		var a = $('.nav').offset().top;
		alert(a);
	*/


	// 메뉴가 상단에 고정된다
	// background-attachment : fixed;

	$(window).scroll(function(){

		var check = $(this).scrollTop();

		if(check >= 300){
			$('.nav').addClass('fix');
		}else{
			$('.nav').removeClass('fix');
		}

	});

	//맨위로 부드럽게 스크롤 이동
	$('.gotop').click(function(){
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	})



});





