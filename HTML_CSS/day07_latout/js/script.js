$(document).ready(function(){

	//경고창 띄우기
	alert("ㅋㅋㅋ");

	//윈도우 안에 있는 타이머 이벤트를 이용해서 롤링시키기
	var time = 0 ; //변수 선언
	window.setInterval(function(){
		time = time - 1;
		$('#moviescroll').css("background-position",time);
	},3); //0.003s에 한번씩 position이 이동


	//click 이벤트
	$('#logo').click(function(){
		$('#logo').css('color','magenta');
	});

});