/*
대칭수(palindrome)인 585는 2진수로 나타내도 1001001001(2)가 되어 여전히 대칭수입니다.

10진법과 2진법으로 모두 대칭수인 1,000,000 이하 숫자의 합을 구하세요.

(주의: 첫번째 자리가 0이면 대칭수가 아님)
*/

console.log(entryPoint(1000));

function entryPoint(maxIndex){
	var sum = 0;
	for(index = 1; index <= maxIndex; index++){
		var number = index;
		var binary = new Array();
		while(number >= 1){
			if(number == 1){
				binary.push(1);
				if(isBinaryPalindrome(binary) && isPalindrome(number)){
					console.log(binary + " " + number);
					sum += index;
				}
				break;
			}
			binary.push(number % 2);
			number = parseInt(number / 2);
		}
	}

	return sum;
}

function isBinaryPalindrome(binary){
	var isPal = true;
	for(var index = 0; index < binary.length / 2; index++){
		if(binary[index] != binary[binary.length - 1 - index]){
			isPal = false;
		}
	}

	return isPal;
}

function isPalindrome(number){
	var isPal = true;
	for(var index = 0; index < number.length / 2; index++){
		if(number.charAt(index) != number.charAt(binary.length - 1 - index)){
			isPal = false;
		}
	}

	return isPal;
}