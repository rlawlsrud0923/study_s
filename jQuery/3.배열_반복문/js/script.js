/*
	배열 : 하나의 변수명에 여러개의 값을 넣을 수 있다

	var 변수명 = [ 값, 값, 값, 값, 값 ];
	
	0~ index 순서를 따른다

	.length 개수를 알 수 있음
*/

var array = [10,20,30,40,50];

array[8] = 100; //배열에 추가		array = [10,20,30,40,50 ,,,,, 100]; 중간은 값이 비어있음

console.log(array[1]+array[4]); //연산 가능하다

console.log(array.length); //배열의 개수 확인하기 0~8 = 9개





/*
	객체
	
	이름을 정해주고 값을 넣는다

	var obj = { 이름 : 값, 이름 : 값, 이름 : 값 };
	
	obj.이름 
	
	이름(=키)으로 구분지음
*/

var obj = {a:100, b:200, c:300};

console.log(obj.c);

console.log(obj.a + obj.b); //연산 가능






// 배열+객체

var q = [ {a:10, b:20}, {a:30, b:40, c:50} ];

console.log( q[0].b );

console.log( q[0].b + q[1].b );

console.log( q[1].c - q[0].a ); //40







/*
	반복문 for
	
	for ( 초기값; 범위; 증감 ){ 동작 }

	+= -= *= /=

	a += 5		a = a+5
*/

for(i=0; i<=5; i++){
	document.write(i + '. 김진경' + '<br>')
}

for(i=0; i<=10; i+=2){ //2씩 증가 : 짝수만 나옴
	document.write(i + '. 짝수' + '<br>')
}

for(i=1; i<=10; i+=2){ //홀수 나오게
	document.write(i + '. 홀수' + '<br>')
}





// Q. 구구단 만들기
for(i=2; i<=9; i++){
	for(j=1; j<=9; j++){
		document.write( i + 'X' + j + '=' + i*j + '<br>');
	}
}





// Q. 제이름은 000 입니다 X5

var name1 = ['바나나', '딸기', '수박', '사과', '배']; //변수 예약어 사용하지 않게 주의
//alert(name1[0]);

for (q=0; q<5; q++)
{
	document.write( '제 이름은' + name1[q] + '입니다' + '<br>');
}






// for + if

for(i=1; i<=10; i++){
	if(i==5){ //i가 5라면
		document.write(i); //i를 출력해
	}
}




/*
	Q.	패스워드를 입력하세요 5번 물어보기
		패스워드가 1234면 '환영합니다'
		아니면 '다시 입력하세요'

*/
for (i=0; i<5; i++)
{
	var pw = prompt('패스워드를 입력하세요');
	if(pw==1234){
		alert('환영합니다');
		break; //제대로 입력했을 경우 반복문 멈춰주기
	}else{
		alert('다시 입력해주세요');
	}
}