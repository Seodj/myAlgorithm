/*
영국의 화폐 단위는 파운드(£)와 펜스(p)이고, 동전의 종류는 아래와 같습니다.

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)

이 동전들을 가지고 2파운드를 만드는 방법은 다양할 것입니다. 예를 하나 들면 이렇습니다.

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

2파운드를 만드는 서로 다른 방법은 모두 몇가지나 있습니까?
*/

var count = 0;
console.log(entryPoint(200));


function entryPoint(money){
	divideTwoPound(money);
	return count;
}

function divideTwoPound(money){
	if(money == 0 ) {
		return 0;
	}
	var maxIndex = parseInt(money / 200);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 200;
		divideOnePound(money - sum);
	}
}

function divideOnePound(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 100);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 100;
		divide50Pence(money - sum);
	}
}

function divide50Pence(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 50);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 50;
		divide20Pence(money - sum);
	}
}

function divide20Pence(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 20);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 20;
		divide10Pence(money - sum);
	}
}

function divide10Pence(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 10);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 10;
		divide5Pence(money - sum);
	}
}

function divide5Pence(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 5);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 5;
		divide2Pence(money - sum);
	}
}

function divide2Pence(money){
	if(money == 0 ) {
		count++;
		return 0;
	}
	var maxIndex = parseInt(money / 2);
	for(var index = 0 ; index <= maxIndex ; index++){
		var sum = index * 2;
		divide1Pence(money - sum);
	}
}

function divide1Pence(money){
	count++;
}