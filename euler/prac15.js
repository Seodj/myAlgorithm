/*
아래와 같은 2 × 2 격자의 왼쪽 위 모서리에서 출발하여 오른쪽 아래 모서리까지 도달하는 길은 모두 6가지가 있습니다 (거슬러 가지는 않기로 합니다).

→ → ↓ ↓
→ ↓ → ↓
→ ↓ ↓ →
↓ → → ↓
↓ → ↓ →
↓ ↓ → →

그러면 20 × 20 격자에는 모두 몇 개의 경로가 있습니까?
*/
console.log(MoveLeftToRight(20));

function MoveLeftToRight(length){
	length += 1;
	var gukja = new Array(length);
	for(var index = 0; index < length ; index++){
		gukja[index] = new Array(length);
		gukja[0][index] = 1;
		gukja[index][0] = 1;
	}

	for(var index = 1; index < length ; index++){
		for(var index2 = 1; index2 < length ; index2++){
			gukja[index][index2] = gukja[index-1][index2] + gukja[index][index2-1];
		}
	}
	return gukja[20][20];
}