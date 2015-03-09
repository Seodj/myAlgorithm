/* 
10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.

1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?
*/
addThreeFiveMultiple(1000);

function addThreeFiveMultiple(baseline){
	var sum = 0;
	
	for(var index = 1 ; index < baseline ; index++){
		if(index % 3 == 0 || index % 5 == 0){
			sum += index;
		}
	}

	console.log("result : " + sum);
}