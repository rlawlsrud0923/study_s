$(function(){
	/*
		attr();						속성을 다루는 메서드
		attr('속성명' , '값');		속성 변경할 때


		append	: after
		prepend	: before

		empty();					내용을 비우는 메서드

		replace();
		replace('1','2');			1을 2로 바꾼다
	*/
	var a = $('.test').attr('alt','carol');	//alt값을 carol로 변경
	console.log(a);
	


	
	
	//버튼을 클릭하면 박스에 이미지가 나타난다
	/*
	$('.btn1').click(function(){
		var b = $('<img>').attr('src','images/image01.jpg'); //<img src="images/image01.jpg">	

		$('.box').empty(); //이미지 계속 쌓이지 않게 비워주기
		$('.box').append(b);
	});
	*/






	/*
		버튼을 클릭하면 .test의 이미지가 상자 안으로 들어간다
		1. test의 이미지가 무엇인지 알아낸다
		2. 이미지 태그를 만들어서 1과 동일하게 적용한다
		3. append
	*/
	$('.btn1').click(function(){
		var test = $('.test').attr('src');	//test의 src(이미지 경로)를 알아내기
		var newImg = $('<img>').attr('src' , test);	//이미지태그 만들고 test경로 넣어주기

		$('.box').empty().append(newImg);
	});





	/*
		탭 이름을 클릭했을 때, 해당 리스트가 나타난다

		1.	클릭한 애의 클래스명을 알아낸다.
			attr();		hasClass();
		2.	그 클래스명이 menu01인지 02인지 구분한다
		3.	menu01이면 침구류, 02이면 주방용품리스트가 나타난다
	*/
	$('.bar a').click(function(){
		var tab = $(this).attr('class');
		//console.log(tab);

		if(tab == 'menu01'){
			$('.bed').show();
			$('.kitchen').hide();
		}else{
			$('.bed').hide();
			$('.kitchen').show();
		}
	});



	//리스트의 이미지를 클릭하면 크게 보인다.
	$('ul li').click(function(){
		//bed_01.jpg			->		bed_01_zoom.jpg
		var imgRoot = $(this).children('img').attr('src').replace('.jpg','._zoom.jpg');
		var newImg = $('<img>').attr('src', imgRoot);

		$('.zoom').empty().append(newImg);
	});





});