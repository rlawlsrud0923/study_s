$(function(){
	//alert("s");

	/*
		each(funciton(index){	})		: 개수만큼 반복
	*/

	//버튼을 클릭하면 이미지가 배경으로 들어간다
	$('.btn1').click(function(){
		/*
		$('.test1 li').eq(0).addClass('bg0');
		$('.test1 li').eq(1).addClass('bg1');
		$('.test1 li').eq(2).addClass('bg2');
		$('.test1 li').eq(3).addClass('bg3');
		$('.test1 li').eq(4).addClass('bg4');
		*/

		//each문으로 바꿔보기
		$('.test1 li').each(function(index){
			//$('.test1 li').eq(index).addClass('bg'+index);
			
			//class명을 안주고 css로 bg 바꾸고 싶을 때
			$('.test1 li').eq(index).css('background-image','url(aven'+index+'.png)');
		});

	});


	/*
		img 버튼을 클릭하면 이미지 태그로 li에 들어간다
		$('<img>')
		.attr();
		.append();
		<img src="이미지경로">
		$('<img>').attr('src','이미지경로')
	*/
	$('.btn2').click(function(){
		//$('.test2 li').eq(index).prepend($('<img>').attr('src','aven0.png'));

		$('.test2 li').each(function(index){
			
			var newImg= $('<img>').attr('src','aven'+index+'.png');
			
			//$('.test2 li').eq(index).append(newImg);
			$(this).empty().append(newImg); //이미지 empty로 비운 뒤에 넣어줘야 됨
		});
	});





});