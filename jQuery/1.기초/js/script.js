

//한 줄 주석

/*
	여러줄 주석

	alert('알림창 띄우기');
	document.write('문서에 텍스트로 들어감')
	console.log('콘솔로 확인하기')
*/

/*
	1.	'문자'와 숫자 '<br>'

	2.	문자와 숫자 모두 연산이 가능하다

	3.	연산자 + - * / %(나머지 연산자)
		% 홀짝 구할 때 사용

	4.	변수 선언
		var 변수명 = 값;
		영문 소문자, 숫자 먼저 X, 예약어X, 띄어쓰기X, 카멜케이스(userName), - , _

	5.	복합 연산자 += -= *= /=

	6.	조건문
		if(조건){동작}else{동작}
		> < >= <= == &&그리고 ||또는

	7.	형변환
		parseInt(); 문자를 숫자로
		String(); 숫자를 문자로
*/

document.write('여러개의'+'문자를'+'연결할 수 있다'+'<br>');
document.write(10+5+'<br>'); //숫자 + 문자 = 숫자연산 후 문자 출력
document.write('<br>'+10+5); //문자 + 숫자 = 문자 출력
document.write(10%3);

//변수선언
var a = 10;
var b = 20;
var c = 30;
console.log(a);

var a = 100; //변수선언위치
console.log(a);

//복합 연산자
var d=1;
console.log(d+=5); //d = d+5

//조건문
var num1 = 100;
var num2 = 200;

if(num1>num2){
	console.log('조건문');
}else{
	console.log('if문이 성립되지 않았을 경우 출력됨');
}


/*
	x,y 이름의 변수를 만들고 두 값을 비교해서 x가 크면 x가 크다 / y가 크면 y가 크다 라고 출력해보기
*/
var x = 10;
var y = 100;

if(x>y){
	console.log('x가 크다');
}else{
	console.log('y가 크거나 같다');
}


//입력받은 값을 변수로 저장


var test1 = prompt('숫자를 입력하세요'); //prompt로 입력받은 값은 모두 문자로 인식함
var test2 = prompt('숫자를 입력하세요');
test1 = parseInt(test1); //만들어놓은 변수를 쓰는 거니까 var붙여도 되고 안붙여도 됨
test2 = parseInt(test2);

/*
alert(test1+test2); //변수를 출력

console.log( parseInt(test1) + parseInt(test2) ); //형변환 문자->숫자
console.log( String(test1) + String(test2) ); //형변환 숫자->문자
*/
console.log(test1+test2);



/*
	사용자가 입력한 값이 100보다 크면 '크다'/ 아니면 '작거나 같다' 라고 알려주기
	1. 값을 입력받는다. prompt();
	2. 값을 비교한다. var, if()
	3. alert();
*/
var q = prompt('숫자를 입력하세요');
var e = 100;

if(q>100){
	console.log('크다');
}else{
	console.log('작거나 같다');
}

/*입력받은 두개의 숫자를 더한 값이 100보다 크면 '크다' / 아니면 '작거나 같다'*/
var q1 = prompt('q1 숫자를 입력하세요');
var q2 = prompt('q2 숫자를 입력하세요');
var result = parseInt(q1)+parseInt(q2);
var ee = 100;

if(result>100){
	console.log('100보다 크다');
}else{
	console.log('100보다 작거나 같다');
}


/*이름과 나이를 입력 받은 후 xx의 나이는 xx살 입니다 라고 출력해보기*/
var name = prompt('이름을 입력해주세요');
var age = prompt('나이를 입력해주세요');
alert(name+"의 나이는"+age+"살 입니다");
