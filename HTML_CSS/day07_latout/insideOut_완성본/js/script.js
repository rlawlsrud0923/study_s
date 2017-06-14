$(document).ready( function(){ //DOM가 인코딩 단계까지 랜더링된 상태에서 우선적으로 ready 함수를 먼저 실행
	alert('WOW!'); //경고창, 알림창
}); 

//변수=variable
var time=0;
var timeId=0;
timeId = window.setInterval('timerSlide()',3); // milliseconds = 1초 = 1000

function timerSlide() {
		time = time - 1;
		$('#movie-scroll').css('background-position',time);
}

$('#movie-scroll').click(function(){
		clearInterval(timeId);
});

$('h1 > a').click(function(){
		$('body').css('background-color','purple');
		$(this).css('font-size','24px');
});