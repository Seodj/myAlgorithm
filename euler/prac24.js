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
console.log(p024_2(1000000));

function entryPoint(){

}

function p024_2(n){   
    var arr = new Array(true,true,true,true,true,true,true,true,true,true);   
       
    var s = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;   
    if(s < n) return '최대 수를 초과하였습니다.';   
    var temp = n-1;   
    var r = 0;   
    for(var i=10; i>0; i--){   
        s /= i;   
        var k = parseInt(temp/s);
        console.log(k);
        temp = temp%s;
        console.log('temp ' + temp);
        var t=0;   
        for(var j=0; j<10; j++){   
            if(t==k && arr[j]){   
                r = r*10 + j;   
                arr[j] = false;   
                break;   
            }   
            if(arr[j])   
                t++;   
        }   
    }   
    return r;   
}   