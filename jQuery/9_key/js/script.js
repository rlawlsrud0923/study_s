$(function(){
	//09

	/*
		mouse event
		key event

		adobe ascii
		아스키코드를 이용해서 기능을 넣을 수 있다
	*/

	$('#search').keyup(function(){

		if(event.keyCode == 13){ //event 엔터라면
			//alert('검색이 완료되었습니다.')

			//네모 박스에 글자가 입력된다
			//text();
			$('.result').text('검색이 완료되었습니다');
			
		}
	});



	var left = 0; //초기값 설정해주기
	var top = 0;

	//오른쪽/왼쪽 화살표를 클릭하면 박스가 100px 오른쪽으로 간다.
	$(window).keydown(function(event){

		if(event.keyCode == 39){ //오른쪽 화살표
			left = left + 10; //현재 left에 +10을 한다
			$('.box').css('left',left);
		}
		if(event.keyCode == 37){ //왼쪽 화살표
			left = left - 10;
			$('.box').css('left',left);
		}
		if(event.keyCode == 38){ //위
			top = top - 10;
			$('.box').css('top',top);
		}
		if(event.keyCode == 40){ //아래
			top = top + 10;
			$('.box').css('top',top);
		}
	});





	var basic = 160;

	//위 화살표를 클릭하면 키가 커진다
	//#leg height 160
	$('#top').click(function(){
		basic = basic + 10;
		simpson();
	});
	
	$('#bottom').click(function(){
		basic = basic - 10;
		simpson();
	});

	function simpson(){
		$('#leg').css('height',basic);//키가 조절됨

		$('#height').text(basic);//현재 키가 text로 나타남
		
		//현재 키가 140보다 작으면 운다
		if(basic<140){
			$('#face').css('background-position','right top');
		}else{
			$('#face').css('background-position','left top');
		}
	}
	


});