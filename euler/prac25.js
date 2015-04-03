/*
피보나치 수열은 아래와 같은 점화식으로 정의됩니다.

Fn = Fn-1 + Fn-2  (단, F1 = 1, F2 = 1).

이에 따라 수열을 12번째 항까지 차례대로 계산하면 다음과 같습니다.

F1 = 1
 F2 = 1
 F3 = 2
 F4 = 3
 F5 = 5
 F6 = 8
 F7 = 13
 F8 = 21
 F9 = 34
 F10 = 55
 F11 = 89
 F12 = 144 

수열의 값은 F12에서 처음으로 3자리가 됩니다.

피보나치 수열에서 값이 처음으로 1000자리가 되는 것은 몇번째 항입니까?
*/

console.log(entryPoint());

function entryPoint(){
	var index = 1;
	var before = [0];
	var after = [1];
	var length = 0;
	while(length < 1000){
		var temp = after;
		after = fibonazzi(before, after);
		before = temp;
		length = after.length;
		index++;
	}

	return index;
}

function fibonazzi(before, after){
	var sum = [];
	var carry = 0;
	for(var index = 0 ; index < after.length  ; index++){
		if(before[index] == undefined){
			var digit = (after[index] + carry) % 10;
			sum[index] = digit;
			carry = parseInt((after[index] + carry) / 10);
			continue;
		}
		var digit = (before[index] + after[index]) % 10;
		sum[index] = digit + carry;
		carry = parseInt((before[index] + after[index]) / 10);
	}
	if(carry >= 1){
		sum.push(carry);
	}

	return sum;
}