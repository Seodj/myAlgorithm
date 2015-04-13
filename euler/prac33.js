/*
분수 49/98에는 재미있는 성질이 있습니다. 수학을 잘 모르는 사람이 
분모와 분자에서 9를 각각 지워서 간단히 하려고 49/98 = 4/8 처럼 계산해도 올바른 결과가 됩니다.

이에 비해 30/50 = 3/5 같은 경우는 다소 진부한 예라고 볼 수 있습니다.

위와 같은 성질을 가지면서 '진부하지 않은' 분수는, 
값이 1보다 작고 분자와 분모가 2자리 정수인 경우 모두 4개가 있습니다.

이 4개의 분수를 곱해서 약분했을 때 분모는 얼마입니까?
*/

console.log(entryPoint());

function entryPoint(){
	var bunjaArray = new Array();
	var bunmoArray = new Array();
	var bunjagob = 1;
	var bunmogob = 1;
	for(var bunja = 10; bunja <= 99; bunja++){
		for(var bunmo = 10; bunmo <=99; bunmo++){
			if(isFunnyFunction(bunja, bunmo)){
				bunjaArray.push(bunja);
				bunmoArray.push(bunmo);
			}
		}
	}

	for(var index = 0; index < bunjaArray.length ; index++){
		bunjagob *= bunjaArray[index];
		bunmogob *= bunmoArray[index];
	}

	if(bunmogob % bunjagob == 0){
		return bunmogob / bunjagob;
	}
	else{
		return bunmogob;
	}
}

function isFunnyFunction(bunja, bunmo){
	if(bunja == bunmo || bunja > bunmo){
		return false;
	}
	bunja = "" + bunja;
	bunmo = "" + bunmo;
	if(bunja.charAt(1) == bunmo.charAt(0) && bunja / bunmo == bunja.charAt(0) / bunmo.charAt(1)){
		return true;
	}
	if(bunja.charAt(0) == bunmo.charAt(1) && bunja / bunmo == bunja.charAt(1) / bunmo.charAt(0)){
		return true;
	}
	if(bunja.charAt(0) == bunmo.charAt(0) && bunja / bunmo == bunja.charAt(1) / bunmo.charAt(1)){
		return true;
	}
	else{
		return false;
	}
}
