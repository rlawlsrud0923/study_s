

$(function(){
	
	// 20 다운받아주세요

	// trasnform : translate() css3    >>  addClass

	/*
		슬라이드 제이쿼리 플러그인
		bxslide
		fullpage

		다운받고 링크 연결시켜서 사용하면 됨. option 이용할 수 있음.
	



		.index()		순서 0부터 시작
		.length		개수 1부터 시작
		.on 이미지의 순서 -1인 이미지한테 클래스가 붙고, 나머지는 떨어짐
	*/

	var nowImg = $('.pic img.on').index();//class on이 붙어있는 애 알아내기
	
	var imgLength = $('.pic img').length;
	imgLength = imgLength-1;	//index가 0부터 시작하니까 현재개수에서 1빼줘야 됨

	//txt에 나올 문자 배열에 넣기
	var title1 = [ '이미지1', '이미지2', '이미지3', '이미지4', '이미지5', '이미지6', '이미지7', '이미지8' ];
	//title1[nowImg]

	



	$('.prev').click(function(){
		if(nowImg > 0){ //nowImg가 0이면 첫번째 index니까
			
			nowImg = nowImg - 1;
			imgSlide(); //중복되는 기능 묶어준 함수 호출하기
		};
	});
	
	


	//다음 버튼을 클릭하면 다음 이미지가 중앙에 온다
	$('.next').click(function(){
	
		if(nowImg < imgLength){	//최대 index값 보다 작을 때
			
			nowImg = nowImg + 1; //index 1씩 커진다
			imgSlide();
		};
	});



	//중복되는 기능 함수로 만들기
	function imgSlide(){
		$('.pic img').removeClass('on');
		$('.pic img').eq(nowImg).addClass('on');
		

		//글자가 변경된다
		$('.title1').text(title1[nowImg]);


		//alt값을 text로 출력 
		//+/-되는 값을 받아야 되니까 글로벌변수로 적용하면 변화 안됨
		var title2 = $('.pic img').eq(nowImg).attr('alt'); //on붙어있는 img의 alt 알아내기
		$('.title2').text(title2);
		
		console.log(nowImg);
	};




	

});

