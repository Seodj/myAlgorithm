/*
2 ≤ a ≤ 5 이고 2 ≤ b ≤ 5인 두 정수 a, b로 만들 수 있는 ab의 모든 조합을 구하면 다음과 같습니다.

 2^2=4,  2^3=8,   2^4=16,  2^5=32
 3^2=9,  3^3=27,  3^4=81,  3^5=243
 4^2=16, 4^3=64,  4^4=256, 4^5=1024
 5^2=25, 5^3=125, 5^4=625, 5^5=3125

여기서 중복된 것을 빼고 크기 순으로 나열하면 아래와 같은 15개의 숫자가 됩니다.

4,  8,  9,  16,  25,  27,  32,  64,  81,  125,  243,  256,  625,  1024,  3125

그러면, 2 ≤ a ≤ 100 이고 2 ≤ b ≤ 100인 a, b를 가지고 만들 수 있는 ab는 중복을 제외하면 모두 몇 개입니까?
*/

console.log(entryPoint(100));

function entryPoint(maxIndex){
	var result = new Array();
	for(var a = 2; a <= maxIndex ; a++){
		for(var b = 2; b <= maxIndex; b++){
			var combination = 1;
			for(var index = 1; index <= b; index++){
				combination *= a;
			}
			if(result.indexOf(combination) < 0){
				result.push(combination);
			}
		}
	}
	return result.length;
}
