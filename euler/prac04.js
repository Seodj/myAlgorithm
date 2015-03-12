/*
앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.

두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.

세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?
*/

console.log(findPalindrome());

function findPalindrome(){
	var max = 0;
	var result;
	for(var num1 = 999; num1 >= 100 ; num1--){
		for(var num2 = 999; num2 >= 100 ; num2--){
			result = num1 * num2;
			if(isPalindrome(result.toString()) && result > max){
				max = result;
			}
		}
	}
	return max;
}

function isPalindrome(result){
	var length = result.length;
	var isPalindrome = false;
	for(var index = length-1 ; index >= length/2 ; index--){
		var chindex = length - 1 - index;
		var temp = result.charAt(chindex);
		if(result.charAt(index) == result.charAt(chindex)){
			isPalindrome = true;
		} else{
			return false;
		}
	}
	return isPalindrome;
}