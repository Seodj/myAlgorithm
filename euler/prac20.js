/*
n! 이라는 표기법은 n × (n − 1) × ... × 3 × 2 × 1을 뜻합니다.

예를 들자면 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800 이 되는데,
여기서 10!의 각 자리수를 더해 보면 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27 입니다.

100! 의 자리수를 모두 더하면 얼마입니까?
*/

var factorialResult = ['1'];

console.log(addNumber(entryPoint(100)));

function entryPoint(maxIndex){
	for(var index = 2 ; index <= maxIndex; index++){
		factorialResult = factorial(factorialResult, index);
	}
	return factorialResult;
}

function factorial(factorialResult, gob){
	var result = [];
	var carry = 0;
	var temp;
	for(var index = factorialResult.length-1; index >= 0 ; index--){
		var temp = factorialResult[index] * gob + carry;
		var digit = temp % 10;

		carry = temp / 10 >= 1 ? parseInt(temp / 10) : 0;
		result.unshift(digit);
	}

	carryNumber(result,carry);

	return result;
}

function carryNumber(result,carry){
	while(carry / 10 >= 1){
		result.unshift(carry % 10);
		carry = parseInt(carry / 10);
	}
	result.unshift(carry);
}

function addNumber(result){
	var sum = 0;
	for(var index = 0; index < result.length ; index++){
		sum += result[index];
	}
	return sum;
}