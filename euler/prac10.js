/*
10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.

이백만(2,000,000) 이하 소수의 합은 얼마입니까?
*/

console.log(addPrimeNumber(2000000));

function addPrimeNumber(number){
	var sum = 17;
	for(var index = 2 ; index < number ; index++){
		if(index%2==0 || index%3==0 || index%5==0 || index%7==0){ 
			console.log('pass');
			 continue;
		}
		else if(isPrimeNumber(index)){
			sum += index;
		}
	}
	return sum;
}

function isPrimeNumber(value){
	var divideNumber = 2;
	while(value % divideNumber != 0){ 
		console.log(value);
		divideNumber++;
	}
	if(divideNumber == value){
		return true;
	}
	return false;
}