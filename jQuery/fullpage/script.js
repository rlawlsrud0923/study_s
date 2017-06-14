
$(function(){

	$('#fullpage').fullpage({

		sectionsColor : ['#ffc0cb', '#e9f40b', '#8ca1d4','#3f6e8c'],
		navigation: true,
		navigationTooltips: ['page1', 'page2','page2','page4'],
		anchors:['p1', 'p2', 'p3', 'p4'], //href="#a" = id="a"			.html#p2		하나의 페이지이지만 그 영역으로 넘어갈 수 있게 해줌

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//index로 이용하기
			if(index == 3){
				//alert("3번째 페이지 로딩됨");
			
				//화면이 로딩되면 가방이 밑에서 위로 애니메이트된다
				$('.product li').animate({'top' : 0, 'opacity' : 1},300);
			}else{
				//제품정보가 사라진다
				$('.product li').css({'top' : 100, 'opacity' : 0});
			}

			//anchorLink로 이용하기
			if(anchorLink == 'p2'){
				alert("p2 로딩됨");
			}
		}

	});



	
});