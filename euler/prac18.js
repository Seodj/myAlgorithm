/*
다음과 같이 삼각형 모양으로 숫자를 배열했습니다.

3
7 4
2 4 6
8 5 9 3 

삼각형의 꼭대기부터 아래쪽으로 인접한 숫자를 찾아 내려가면서 합을 구하면, 위의 그림처럼 3 + 7 + 4 + 9 = 23 이 가장 큰 합을 갖는 경로가 됩니다.

다음 삼각형에서 합이 최대가 되는 경로를 찾아서 그 합을 구하세요.

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23 
*/

var triangle = "75 "
			+ "95 64 "
			+ "17 47 82 "
			+ "18 35 87 10 "
			+ "20 04 82 47 65 "
			+ "19 01 23 75 03 34 "
			+ "88 02 77 73 07 63 67 "
			+ "99 65 04 28 06 16 70 92 "
			+ "41 41 26 56 83 40 80 70 33 "
			+ "41 48 72 33 47 32 37 16 94 29 "
			+ "53 71 44 65 25 43 91 52 97 51 14 "
			+ "70 11 33 28 77 73 17 78 39 68 17 57 "
			+ "91 71 52 38 17 14 91 43 58 50 27 29 48 "
			+ "63 66 04 68 89 53 67 30 73 16 69 87 40 31 "
			+ "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

var number = triangle.split(" ");
var num = 0;
var triArray = new Array();
var height;
var temp = 1;
for(var index = 2 ; ; index++){
	temp += index;
	if(temp == number.length){
		height = index;
		break;
	}
}

console.log(findMaxValue(sumValue()));

function sumValue(){
	var sum = new Array();
	for(var index = 0; index < height ; index++){
		triArray[index] = new Array();
		for(var index2 = 0 ; index2 < index + 1 ; index2++){
			triArray[index][index2] = number[num];
			num++;
		}
	}

	sum[0] = new Array();
	sum[0][0] = triArray[0][0];

	for(var index = 1; index < height; index++){
		sum[index] = new Array();
		sum[index][0] = parseInt(sum[index-1][0]) + parseInt(triArray[index][0]);
		sum[index][index] = parseInt(sum[index-1][index-1]) + parseInt(triArray[index][index]);

		for(var index2 = 1; index2 < index ; index2++){
			if(parseInt(sum[index-1][index2-1]) > parseInt(sum[index-1][index2])){
				sum[index][index2] = parseInt(sum[index-1][index2-1]) + parseInt(triArray[index][index2]);
			} else{
				sum[index][index2] = parseInt(sum[index-1][index2]) + parseInt(triArray[index][index2]);
			}
		}
	}
	console.log(sum);
	return sum;
}

function findMaxValue(sum){
	var max = 0;
	for(var index = 0; index <= height ; index++){
		if(sum[height-1][index] > max){
			max = sum[height-1][index];
		}
	}
	return max;
}