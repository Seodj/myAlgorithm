/*
숫자 145에는 신기한 성질이 있습니다. 각 자릿수의 팩토리얼(계승)을 더하면  
1! + 4! + 5! = 1 + 24 + 120 = 145 처럼 자기 자신이 됩니다.

이렇게 각 자릿수의 팩토리얼을 더하면 자기 자신이 되는 모든 수의 합을 구하세요.

단, 1! = 1 과 2! = 2 의 경우는 덧셈이 아니므로 제외합니다.
*/

console.log(entryPoint());

function entryPoint(){
	var sum = 0;
	for(var number = 1; number <= 999999; number++){
		if(number == 1 || number == 2){
			continue;
		}
		if(factorial(number)){
			sum += number;
		}
	}

	return sum;
}

function factorial(number){
	var number = "" + number;
	var sum = 0;
	for(var index = 0; index < number.length; index++){
		var result = 1;
		for(var index2 = 1; index2 <= number[index]; index2++){
			result *= index2;
		}
		sum += result;
	}
	if(sum == number){
		return true;
	}

	return false;
}