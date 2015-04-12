/*
각 자리의 숫자를 4제곱해서 더했을 때 자기 자신이 되는 수는 놀랍게도 
단 세 개밖에 없습니다.

 1634 = 1^4 + 6^4 + 3^4 + 4^4
 8208 = 8^4 + 2^4 + 0^4 + 8^4
 9474 = 9^4 + 4^4 + 7^4 + 4^4 

(1 = 1^4의 경우는 엄밀히 말해 합이 아니므로 제외합니다)

위의 세 숫자를 모두 더하면 1634 + 8208 + 9474 = 19316 입니다.

그렇다면, 각 자리 숫자를 5제곱해서 더했을 때 
자기 자신이 되는 수들의 합은 얼마입니까?
*/

console.log(entryPoint());

function entryPoint(){
 	return addArray(findFiveJegob());
}

function addArray(array){
	var sum = 0;

	for(var index = 0; index < array.length ; index++){
		sum += array[index];
	}

	return sum;
}

function findFiveJegob(){
	var array = new Array();

 	for(var number = 2 ; number <= 999999 ; number++){
 		var sum = 0;
 		var temp = "" + number;
 		for(var index = temp.length - 1 ; index >= 0 ; index--){
 			var indexNumber = temp.charAt(index);
 			sum +=  indexNumber * indexNumber * indexNumber * indexNumber * indexNumber;
 		}
 		if(sum == number){
 			array.push(number);
 		}
 	}

 	return array;
}