/*
2^15 = 32768 의 각 자리수를 더하면 3 + 2 + 7 + 6 + 8 = 26 입니다.

2^1000의 각 자리수를 모두 더하면 얼마입니까?
*/

var squareResult = ['1'];

console.log(addResult(1000, 2));

// js에 존재하는 자료형으로 결과를 담을 수 없으므로, 배열로 한 요소씩 2를 곱하였습니다.
function square(squareResult, squareNumber){
	var result = [];
	var carry = 0;
	for(var index = squareResult.length-1 ; index >= 0 ; index--){
		
		var temp = squareResult[index] * squareNumber + carry;
		var digit = temp % 10;

		carry = temp / 10 >= 1 ? 1 : 0;
		result.unshift(digit);
	}

	if(carry == 1){
		result.unshift(carry);
	}

	return result;
}

function addResult(squareIndex, squareNumber){
	var sum = 0;
	for(var index = 1; index <= squareIndex ; index++){
		squareResult = square(squareResult, squareNumber);
	}

	for(var index = 0; index < squareResult.length; index++){
		sum += squareResult[index];
	}

	return sum;
}