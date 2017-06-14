$(function(){

	//변수 이용하기
	var item = $('.sunban li')
	var cart = $('.cart')

	//제품 클릭하면 사라지게
	item.click(function(){
		$(this).children('img').fadeOut();

		//카트 채워주기
		buy('cart_on');
		/*
			cart.css({ 'background-image' : 'url(images/cart_on.png)' });
			css기준이 아닌 html기준으로 경로 찾아주기
			style=""로 들어가니까
		*/
	});


	//카트 클릭시 제품 원래대로 돌아가게
	cart.click(function(){
		item.children('img').fadeIn();

		//카트 채워주기
		buy('cart');
	});

	function buy(on){
		cart.css({ 'background-image' : 'url(images/' +on+ '.png)' });
	}

});