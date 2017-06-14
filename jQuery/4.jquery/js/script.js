/*
var fruits = ['바나나','수박','딸기','사과','배'];

var drink = ['커피','콜라','사이다','주스','우유',];

//fruits[0]; 0~4

test1(drink);

function test1(a){
	for(i=0; i<5; i++){
		//document.write(fruits[i] + '입니다' + '<br>');
		document.write(a[i] + '입니다' + '<br>'); //호출하면 a가 기능함
	}
}
*/




/*
	jquery.com 에서 uncompressed 다운받기

	//제이쿼리 기본구조

	$(function(){
		
		$('선택자').메서드();

		css("",""); css를 다루는 메서드

		css( { color : 'red', 'font-size' : '20px' } );	문자는 따옴표로 묶어줘야 됨
		'font-size' = fontSize
	})


	div > p
	
	.children('선택자');		자식선택자
	.find();						하위
	.parent();					부모
	.parents();				상위
	.sibrings();				형제
	

*/


//제이쿼리 기본구조
$(function(){
	
	$('body').css({'background-color':'#ddd' , 'text-transform':'uppercase' , 'text-align' : 'center'});
	$('h1.title').css({fontSize: 100 , 'margin-top' : 100 , 'margin-bottom' : 30});
	$('p').css('margin-bottom','30');
	$('img').css({width:100, margin:20});
	
	

})