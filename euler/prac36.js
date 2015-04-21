/*
대칭수(palindrome)인 585는 2진수로 나타내도 1001001001(2)가 되어 여전히 대칭수입니다.

10진법과 2진법으로 모두 대칭수인 1,000,000 이하 숫자의 합을 구하세요.

(주의: 첫번째 자리가 0이면 대칭수가 아님)
*/

console.log(entryPoint(5));

function entryPoint(maxIndex){
	for(index = 1; index <= maxIndex; index++){
		var number = index;
		var binary = new Array();
		while(number >= 1){
			if(number == 1){
				binary.push(number / 2);
			}
			binary.push(number % 2);
			number /= 2;
		}
	}

	return binary;
}

function isPalindrome(){
	
}