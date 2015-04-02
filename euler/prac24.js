/*
어떤 대상을 순서에 따라 배열한 것을 순열이라고 합니다. 
예를 들어 3124는 숫자 1, 2, 3, 4로 만들 수 있는 순열 중 하나입니다.

이렇게 만들 수 있는 모든 순열을 숫자나 문자 순으로 늘어놓은 것을 
사전식(lexicographic) 순서라고 합니다.
0, 1, 2로 만들 수 있는 사전식 순열은 다음과 같습니다.

012   021   102   120   201   210

0, 1, 2, 3, 4, 5, 6, 7, 8, 9로 만들 수 있는 
사전식 순열에서 1,000,000번째는 무엇입니까?
*/
console.log(entryPoint(1000000));

function entryPoint(target){
    target -= 1;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = [];
    var factorialNumber = 9;
    var divideNumber = [];
    var index = 0;
    while(target >= 0){
        var factorialResult = factorial(factorialNumber);
        divideNumber[index] = parseInt(target / factorialResult);
        if(target == 0 ) break;
        target = target % factorialResult;
        index++;
        factorialNumber--;
    }

    for(var index = 0; index < divideNumber.length ; index++){
        result[index] = array[divideNumber[index]];
        array.splice(divideNumber[index],1);
    
    }

    return result;
}

function factorial(maxIndex){
    var result = 1;
    for(var index = 1; index <= maxIndex ; index++){
        result *= index;
    }
    return result;
}