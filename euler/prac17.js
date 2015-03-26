/*
1부터 5까지의 숫자를 영어로 쓰면 one, two, three, four, five 이고,
각 단어의 길이를 더하면 3 + 3 + 5 + 4 + 4 = 19 이므로 사용된 글자는 모두 19개입니다.

1부터 1,000까지 영어로 썼을 때는 모두 몇 개의 글자를 사용해야 할까요?

참고: 빈 칸이나 하이픈('-')은 셈에서 제외하며, 단어 사이의 and 는 셈에 넣습니다.
   예를 들어 342를 영어로 쓰면 three hundred and forty-two 가 되어서 23 글자,
   115 = one hundred and fifteen 의 경우에는 20 글자가 됩니다.
*/
// 1 ~ 19 다 다름.
// 20 ~ 99 까지 공통점
// 100 ~ 999 까지 공통점
// eleven
// twelve
// thirteen
// fourteen
// fifteen
// sixteen
// seventeen
// eighteen
// nineteen
// twenty
// thirty
// forty
// fifty
// sixty
// seventy

var result = "";

console.log(entryPoint(1000));
function entryPoint(maxValue){
	var sum = 0;
	for(var index = 1; index <= maxValue; index++){
		var number = index;
		if(number >= 100){
			result += overHundred(parseInt(number/100));
			number = parseInt(number%100);
			if(number == 0){
				continue;
			}
		}
		if(number >= 20){
			result += overTwenty(parseInt(number/10));
			number = parseInt(number%10);
		}
		if(number >= 1){
			result += underTwenty(number);
		}
		sum += countDigit(result);
	}

	return sum;
}

function overHundred(number){
	var hundredDigit;
	switch(number){
		case 1: hundredDigit = "one"; break;
		case 2: hundredDigit = "two"; break;
		case 3: hundredDigit = "three"; break;
		case 4: hundredDigit = "four"; break;
		case 5: hundredDigit = "five"; break;
		case 6: hundredDigit = "six"; break;
		case 7: hundredDigit = "seven"; break;
		case 8: hundredDigit = "eight"; break;
		case 9: hundredDigit = "nine"; break;
		case 10: return "onethousand"; break;
	}
	return hundredDigit+"hundred";
}

function overTwenty(number){
	var tenDigit;
	switch(number){
		case 2: tenDigit = "twenty"; break;
		case 3: tenDigit = "thirty"; break;
		case 4: tenDigit = "forty"; break;
		case 5: tenDigit = "fifty"; break;
		case 6: tenDigit = "sixty"; break;
		case 7: tenDigit = "seventy"; break;
		case 8: tenDigit = "eighty"; break;
		case 9: tenDigit = "twenty"; break;
	}

	return tenDigit;
}

function underTwenty(number){
	var unitDigit;
	switch(number){
		case 1: unitDigit = "one"; break;
		case 2: unitDigit = "two"; break;
		case 3: unitDigit = "three"; break;
		case 4: unitDigit = "four"; break;
		case 5: unitDigit = "five"; break;
		case 6: unitDigit = "six"; break;
		case 7: unitDigit = "seven"; break;
		case 8: unitDigit = "eight"; break;
		case 9: unitDigit = "nine"; break;
		case 10: unitDigit = "ten"; break;
		case 11: unitDigit = "eleven"; break;
		case 12: unitDigit = "twelve"; break;
		case 13: unitDigit = "thirteen"; break;
		case 14: unitDigit = "fourteen"; break;
		case 15: unitDigit = "fifteen"; break;
		case 16: unitDigit = "sixteen"; break;
		case 17: unitDigit = "seventeen"; break;
		case 18: unitDigit = "eighteen"; break;
		case 19: unitDigit = "ninety"; break;
	}

	return unitDigit;
}

function countDigit(result){
	return result.length;
}