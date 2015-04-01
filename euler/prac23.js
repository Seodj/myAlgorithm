/*
자신을 제외한 약수(진약수)를 모두 더하면 자기 자신이 되는 수를 완전수라고 합니다.
예를 들어 28은 1 + 2 + 4 + 7 + 14 = 28 이므로 완전수입니다.
또, 진약수의 합이 자신보다 작으면 부족수, 자신보다 클 때는 초과수라고 합니다.

12는 1 + 2 + 3 + 4 + 6 = 16 > 12 로서 초과수 중에서는 가장 작습니다.
따라서 초과수 두 개의 합으로 나타낼 수 있는 수 중 가장 작은 수는 24 (= 12 + 12) 입니다.

해석학적인 방법을 사용하면, 28123을 넘는 모든 정수는 두 초과수의 합으로 표현 가능함을 보일 수가 있습니다.
두 초과수의 합으로 나타낼 수 없는 가장 큰 수는 실제로는 이 한계값보다 작지만, 해석학적인 방법으로는 더 이상 이 한계값을 낮출 수 없다고 합니다.

그렇다면, 초과수 두 개의 합으로 나타낼 수 없는 모든 양의 정수의 합은 얼마입니까?
*/
console.log(entryPoint(28123));

function entryPoint(maxIndex){
	var result = 0;
	var overNumber = [];
	var cnt = 0;
	for(var index = 1; index < maxIndex ; index++){
		if(isOverNumber(index)){
			overNumber[cnt++] = index;
		}
		result += index;
	}

	return result - overNumberSum(overNumber,maxIndex);
}

function isOverNumber(number){
	var sum = 0;
	for(var index = 1; index < number ; index++){
		if(number % index == 0){
			sum += index;
		}
	}

	if(sum > number){
		return true;
	} else{
		return false;
	}
}

function overNumberSum(overNumber, maxIndex){
	var sum = 0;
	var result = [];
	for(var index = 0; index < overNumber.length ; index++){
		for(var index2 = 0; index2 < overNumber.length ; index2++){
			var isValid = false;
			a = overNumber[index] + overNumber[index2];
			if(a < maxIndex){
				result[a] = 1;
			}
		}
	}

	for(var index = 0; index < result.length ; index++){
		if(result[index] == 1){
			sum += index;
		}
	}

	return sum;
}