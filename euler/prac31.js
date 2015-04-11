/*
영국의 화폐 단위는 파운드(£)와 펜스(p)이고, 동전의 종류는 아래와 같습니다.

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)

이 동전들을 가지고 2파운드를 만드는 방법은 다양할 것입니다. 예를 하나 들면 이렇습니다.

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

2파운드를 만드는 서로 다른 방법은 모두 몇가지나 있습니까?
*/

console.log(divideMoney(300));

function entryPoint(money){
	
}

function divideMoney(money){
	var divideNumber = new Array();
	if(money / 200 > 0){
		divideNumber[0] = parseInt(money / 200);
		money = money % 200;
	}
	if(money / 100 > 0){
		divideNumber[1] = parseInt(money / 100);
		money = money % 100;
	}
	if(money / 50 > 0){
		divideNumber[2] = parseInt(money / 50);
		money = money % 50;
	}
	if(money / 20 > 0){
		divideNumber[3] = parseInt(money / 20);
		money = money % 20;
	}
	if(money / 10 > 0){
		divideNumber[4] = parseInt(money / 10);
		money = money % 10;
	}
	if(money / 5 > 0){
		divideNumber[5] = parseInt(money / 5);
		money = money % 5;
	}
	if(money / 2 > 0){
		divideNumber[6] = parseInt(money / 2);
		money = money % 2;
	}
	if(money / 1 > 0){
		divideNumber[7] = parseInt(money / 1);
		money = money % 1;
	}

	return divideNumber;
}