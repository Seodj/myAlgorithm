/*
소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.

이 때 10,001번째의 소수를 구하세요.
*/

console.log(insertNumber(10001));

function isPrime(value){
	for(var index = 2 ; index < value; index++){
		if(value % index == 0){
			return false;
		}
	}
	return true;
}

function insertNumber(number){
	var count = 1;
	for(var index = 2 ; count <= number ; index++){
		if(isPrime(index)){
			if(count == number){
				return index;
			}
			count++;
		}
	}
}