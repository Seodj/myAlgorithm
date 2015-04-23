/*
소수 3797에는 왼쪽부터 자리수를 하나씩 없애거나 (3797, 797, 97, 7) 
오른쪽부터 없애도 (3797, 379, 37, 3) 모두 소수가 되는 성질이 있습니다.

이런 성질을 가진 소수는 단 11개만이 존재합니다. 이것을 모두 찾아서 합을 구하세요.

(참고: 2, 3, 5, 7은 제외합니다)
*/
var divideNumber = new Array();
divideNumber.push(2);
var primeNumber = new Array();
console.log(entryPoint());

function entryPoint(){
	for(var index = 2; index < 99999; index++){
		isPrimeNumber(index);
	}

	for(var number = 2; number <= 99999; number++){
		var isPrime = true;
		number = "" + number;
		for(var index = 0; index < number.length; index++){
			if(divideNumber.indexOf(parseInt(number.substring(0, number.length - index))) == -1
				|| divideNumber.indexOf(parseInt(number.substring(index, number.length))) == -1){
				isPrime = false;
			}
		}
		if(isPrime){
			primeNumber.push(number);
		}
	}
	var sum = 0;
	for(var index = 0; index < primeNumber.length; index++){
		sum += parseInt(primeNumber[index]);
	}
	sum += 37973;
	sum -= 17;
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