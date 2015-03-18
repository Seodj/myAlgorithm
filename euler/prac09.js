/*
세 자연수 a, b, c 가 피타고라스 정리 a2 + b2 = c2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
예를 들면 3^2 + 4^2 = 9 + 16 = 25 = 5^2이므로 3, 4, 5는 피타고라스 수입니다.

a + b + c = 1000  인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?
*/

console.log(findMatchValue(1000));

function findPythagoras(a,b,c){
	if(a * a + b * b == c * c){
		return true;
	}
	return false;
}
function findMatchValue(number){
	for(var index1 = 1; index1 <= number ; index1++){
		for(var index2 = 1; index2 <= number ; index2++){
			for(var index3 = 1; index3 <= number ; index3++){
				if(index1 + index2 + index3 == number){
					if(findPythagoras(index1,index2,index3)){
						return index1 * index2 * index3;
					}
				}
			}
		}
	}
}