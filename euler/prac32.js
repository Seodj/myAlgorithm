/*
1부터 n까지의 각 숫자를 한번씩만 써서 만들 수 있는 숫자를
 팬디지털(pandigital)이라고 합니다.
예를 들면 15234는 1부터 5의 숫자가 한번씩만 쓰였으므로 1 ~ 5 팬디지털입니다.

7254라는 숫자는 그런 면에서 특이한데, 39 × 186 = 7254 라는 곱셈식을 만들 때 
이것이 1 ~ 9 팬디지털이 되기 때문입니다.

이런 식으로 a × b = c 가 1 ~ 9 팬디지털이 되는 모든 c의 합은 얼마입니까?

(참고: 어떤 c는 두 개 이상의 (a, b)쌍에 대응될 수도 있는데, 이런 경우는 하나로 칩니다)
*/

console.log(entryPoint());

function entryPoint(){
	var pandigitalNumber = new Array();
	var sum = 0;
	for(var a = 1 ; a <= 9999; a++){
		for(var b = 1; b <= 9999; b++){
			var result = a * b;
			var number = a + "" + b + "" + result;
			if(isPandigital(number)){
				if(pandigitalNumber.indexOf(result) < 0){
					pandigitalNumber.push(result);
				}
			}
		}
	}
	for(var index = 0; index < pandigitalNumber.length; index++){
		sum += pandigitalNumber[index];	
	}
	return sum;
}

function isPandigital(number){
	var length = "" + number;
	var oneToNine = ['1','2','3','4','5','6','7','8','9'];
	var isPan = false;

	if(length.length != 9){
		return false;
	}
	
	for(var index = 0; index < 9; index++){
		if(oneToNine.indexOf(number.charAt(index)) >= 0){
			oneToNine.splice(oneToNine.indexOf(number.charAt(index)),1);
			isPan = true;
		} else{
			return false;
		}
	}
	if(isPan == true){
		return true;
	}
}