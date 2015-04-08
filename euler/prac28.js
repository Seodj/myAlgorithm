/*
숫자 1부터 시작해서 우측으로부터 시계방향으로 감아 5×5 행렬을 만들면 아래와 같이 됩니다.

 21 22 23 24 25
 20  7  8  9 10
 19  6  1  2 11
 18  5  4  3 12
 17 16 15 14 13

여기서 대각선상의 숫자를 모두 더한 값은 101 입니다.

같은 방식으로 1001×1001 행렬을 만들었을 때, 대각선상의 숫자를 더하면 얼마가 됩니까?
*/
console.log(entryPoint(1001));

function entryPoint(matrix){
	return sumDiagonal(matrix);
}

function sumDiagonal(matrix){
	var sum = 0;
	var centerNumber = 1;
	var leftUpNumber = centerNumber;
	var rightUpNumber = centerNumber;
	var leftDownNumber = centerNumber;
	var rightDownNumber = centerNumber;
	for(var index = 3 ; index <= matrix ; index += 2){
		leftUpNumber += 4 * index - 6;
		rightUpNumber += 4 * index - 4;
		leftDownNumber += 4 * index - 8;
		rightDownNumber += 4 * index - 10;

		sum += leftUpNumber + rightUpNumber + leftDownNumber + rightDownNumber;
	}
	sum += centerNumber;

	return sum;
}