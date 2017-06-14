$(document).ready(function(){
	console.log('확인용');

	$("#fullDownMenu").css("display","none");

	/*
	//방법1
	$('main_gnb ul.left').mouseover(function(){
		$('#fullDownMenu').stop().slideDown('slow');
	});

	$("#main_gnb ul.left").mouseleave(function(){
		$("#fullDownMenu").stop().slideUp("fast");
		//.stop() 이벤트 반복실행되는 에러 막아줌
	});
	*/



	//방법2  .hover() 사용하기
	$("#main_gnb ul.left, #fullDownMenu").hover(function(){
		$("#fullDownMenu").css("display","block");
	},function(){
		//$("#fullDownMenu").css("display","none");
		$("#fullDownMenu").stop().slideUp("slow"); //부드럽게 내리기
	});

});