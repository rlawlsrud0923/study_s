
var a=3;

if(a==1){
	console.log('a는 1이다');
}else if(a==2){
	console.log('a는 2이다');	
}else if(a==3){
	console.log('a는 3이다');	
}else{
	console.log('a는 1,2,3이 아니다')
}



/*
	switch 조건문
	switch(값){ 조건 : 동작 }
	상단에 있는 조건을 만족하면 하단의 조건들도 모두 출력함
	중간에 조건을 만족한다면 break로 빠져나오게 해줘야 됨

	if문은 값이 명확하거나 범위 안에서 동작해야 할 때
	switch문은 값이 명확할 때에만 사용가능.
*/

var b = 10;

switch(b){ //b가 
	case 10 : console.log('b는 10이다'); //10이면 alert창 띄워
	break; //조건이 맞으면 구문을 벗어나게 해줌

	case 20 : console.log('b는 20이다');
	break;

	case 30 : console.log('b는 30이다');
	break;

	default : console.log('b는 10,20,30이 아님'); //조건들을 모두 만족하지 않았을 경우
}



/*
	Q. 경품 추첨
	당첨번호 1 : 냉장고
	당첨번호 2 : 세탁기
	당첨번호 3 : TV
	꽝
*/

var c = prompt('swithch문 // 당첨번호를 입력하세요');
c = parseInt(c); //입력받은 문자를 숫자로 형변환 시키기

switch(c){
	case 1 : console.log('냉장고 당첨');
	break;
	case 2 : console.log('세탁기 당첨');
	break;
	case 3 : console.log('TV 당첨');
	break;
	default: console.log('꽝');
}

//if문으로 바꿔보기
var d= prompt('if문 // 당첨번호를 입력하세요');
d = parseInt(d); //결과 예측할 수 없으니까 형변환 꼭 해주기

if(d==1){
	console.log('if문 // 1. 냉장고 당첨');
}else if(d==2){
	console.log('if문 // 2. 세탁기 당첨');
}else if(d==3){
	console.log('if문 // 3. TV 당첨');
}else{
	console.log('if문 // 꽝');
}



/*
	Q. 계산기
	숫자 두개와 연산자를 입력받아서 연산한 결과를 출력해주세요
	+ - * / 이외의 연산자를 입력했을 경우 "지원하지 않는 연산자입니다"
	ex) 1 + 2 = 3
*/
var num1 = prompt('연산할 숫자를 입력하세요');
var op = prompt('연산자를 입력하세요');
var num2 = prompt('연산할 숫자를 하나더 입력하세요');

num1=parseInt(num1); //형변환 : 문자>>숫자
num2=parseInt(num2);

if (op == "+"){ //+라는 문자니까 ''로 묶어주기
	document.write( num1 + op + num2 + '=' + (num1+num2) );
	//변수 + '님의 나이는' + 변수 + '입니다'
}else if(op == "-"){
	document.write( num1 + op + num2 + '=' + (num1-num2) );
}else if(op == "*"){
	document.write( num1 + op + num2 + '=' + (num1*num2) );
}else if(op == "/"){
	document.write( num1 + op + num2 + '=' + (num1/num2) );
}else{
	document.write('지원하지 않는 연산자입니다')
}