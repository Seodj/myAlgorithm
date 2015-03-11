/*
	어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.
	예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.

	600851475143의 소인수 중에서 가장 큰 수를 구하세요.
*/

console.log(getPrimeFactor(600851475143));

function getPrimeFactor(number){
	var maxValue = 0;
	if(number <= 2){
		return number;
	}

	for(var index = 2; index <= number ; index++){
		if( index == number ) {
			maxValue = findMaxValue(index, maxValue);
			return maxValue;
		}
		if( (number%index) == 0 ) {
			number = number/index;
			maxValue = findMaxValue(index, maxValue);
			index = 2;
			continue;
		}
	}
}

function findMaxValue(index, maxValue){
	if(index > maxValue ) {
		maxValue = index;
	}
	return maxValue;
}