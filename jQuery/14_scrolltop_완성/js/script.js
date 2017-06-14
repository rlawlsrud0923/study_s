
$(function(){
	
	//.scrollTop();  .scrollLeft();

	// $('html, body').animate();

	// index();     offset().top  좌표값을 찾는 메서드
	
	/*
		var a = $('.test_box3').offset().top;
		alert(a);
	*/

	/*
		a를 클릭하면    click
		그 a가 몇번째 인지 확인해서   index
		같은 순서의 test_box의 좌표값을 확인한다  eq, offset().top

		animate로 해당 좌표의 위치로 이동한다 animate
	*/
	
	/*
	$('.test_menu a').click(function(){
		var menuIndex = $(this).index();   // 0  1  2
		var boxPosition = $('.test div').eq(menuIndex).offset().top; // 50  950  1850
		// alert(boxPosition);
		
		$('html, body').animate({ 'scrollTop' : boxPosition }); 
	});
	*/

	// a와 연결된 id로 스르륵 이동한다
	
	$('.test_menu a').click(function(){
		event.preventDefault(); // 기본기능 막기

		$('html, body').animate({ 'scrollTop' : $(this.hash).offset().top });
	});





	/*
	$('.test_menu a').eq(0).click(function(){
		$('html, body').animate({ 'scrollTop' : 50 });
	});

	$('.test_menu a').eq(1).click(function(){
		$('html, body').animate({ 'scrollTop' : 950 });
	});

	$('.test_menu a').eq(2).click(function(){
		$('html, body').animate({ 'scrollTop' : 1850 });
	});
	*/
	



	// 스크롤을 500이상 내리면 메뉴가 고정되고 아니면 고정 안된다
	// 스크롤 addClass('fix');
	// scroll()

	$(window).scroll(function(){
		// alert();

		var check = $(this).scrollTop(); // 현재 스크롤의 위치
		//console.log(check);

		if(check>500){
			$('.test_menu').addClass('fix');
		}else{
			$('.test_menu').removeClass('fix');
		}



	});












});





