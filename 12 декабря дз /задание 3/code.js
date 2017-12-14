var num = prompt("Введите значение")

function toNum(num){
	if(typeof num == "string"){

		return num.length; 

	}else if(Number.isNaN(num)){
	   return 222;
	}
	else if(typeof num == "number"){

		return num;

	}else if(typeof num == "boolean"){

		return num == true ? 1 : 0 ;

	}else {

		return 10000;

	}

}