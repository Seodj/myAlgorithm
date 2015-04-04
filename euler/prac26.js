/*
분자가 1인 분수를 단위분수라고 합니다. 
분모가 2에서 10까지의 단위분수는 아래와 같습니다.

1/2 = 0.5
1/3 = 0.33333... = 0.3*
1/4 = 0.25
1/5 = 0.2
1/6 = 0.16666... = 0.16*
1/7 = 0.142857142857... = 0.1*42857*
1/8 = 0.125
1/9 = 0.11111.. = 0.1*
1/10 = 0.1
 

숫자 위에 찍힌 점은 순환마디를 나타내는데, 
1/6의 경우 순환마디는 "6"으로 0.166666...처럼 6이 무한히 반복됨을 뜻합니다. 
같은 식으로 1/7은 6자리의 순환마디(142857)를 가집니다.

d 를 1000 이하의 정수라고 할 때, 
단위분수 1/d 의 순환마디가 가장 긴 수는 무엇입니까?
*/

console.log(isRotationNumber(7));

function countRotation(number){
	var result = 1/number;
	console.log(result);
}

function isRotationNumber(number){
	var temp = 1 / number;
	
	console.log((""+temp).length);

	return true;
}