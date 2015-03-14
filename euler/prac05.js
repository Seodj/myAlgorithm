/*
1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.

그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
*/

console.log(findValue());

function findValue(){
	var isFind = false;
	var index = 1;
	while(!isFind){
		index++;
		if(index % 10 == 0 && index % 11 == 0 && index % 12 == 0 && index % 13 == 0 && index % 14 == 0 && index % 15 == 0
		 && index % 16 == 0 && index % 17 == 0 && index % 18 == 0 && index % 19 == 0){
			isFind = true;
		}
	}
	return index;
}