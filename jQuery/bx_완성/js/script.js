
$(function(){

	$('.bxslider').bxSlider({
	
		captions: true,
		
		// 처음 슬라이드
		onSliderLoad : function(currentIndex){
			$('.inner .txt h2').animate({ 'top' : 0, 'opacity' : 1 });
			$('.inner .txt p').animate({ 'left' : 0,  'opacity' : 1 });

			$('.dog_img li').each(function(index){
				$('.dog_img li').eq(index).delay(index*200).fadeIn();
			});
		},
		
		// 슬라이드 전
		onSlideBefore : function($slideElement, oldIndex, newIndex){
			$('.inner .txt h2').css({ 'top' : -30, 'opacity' : 0 });
			$('.inner .txt p').css({ 'left' : -30, 'opacity' : 0 });

			$('.dog_img li').hide();
		},
			
		// 슬라이드 후
		onSlideAfter : function($slideElement, oldIndex, newIndex){ 
			$slideElement.find('h2').animate({ 'top' : 0, 'opacity' : 1 });
			$slideElement.find('p').animate({ 'left' : 0, 'opacity' : 1 });

			/*
				강아지 이미지가 차례대로 나타난다
				.each() .delay() .fadeIn() .fadeOut() show() hide()

			*/
			$slideElement.find('.dog_img li').each(function(index){
				$slideElement.find('.dog_img li').eq(index).delay(index*200).fadeIn();
			});
		}
	
	});



	
	
	
});