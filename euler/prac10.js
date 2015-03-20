/*
10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.

이백만(2,000,000) 이하 소수의 합은 얼마입니까?
*/
var divideNumber = new Array();
divideNumber.push(2);

console.log(addPrimeNumber(2000000)+2);

function addPrimeNumber(number){
	var sum = 0;
	for(var index = 2 ; index < number ; index++){
		if(isPrimeNumber(index)){
			sum += index;
		}
	}
	return sum;
}

function isPrimeNumber(value){
	for(var index = 0 ; index < divideNumber.length; index++){
		if(value % divideNumber[index] == 0){
			return false;
		}
	}
	divideNumber.push(value);
	return true;
}