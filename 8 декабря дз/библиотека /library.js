//check for equality
function checkForEquality(a,b){
    if (a===b){
	   return true;
    }
    else {
	   return false;
    }
}

function checkSpecular(a){
    a = Number(a);
    var b = true;
    var a = a+'';
    for(var i =0; i < a.length/2; i++){
        if(a[i] != a[a.length - i-1]){
            b = false;
            break;
        }
    }
    return b; 
}

function avarageOf2(a,b){
    a = Number(a);
    b = Number(b);
    return !Number.isNaN(b) ? 
        (a+b)/2:
        "Вы ввели не число";
}

function avarageOf2many(arr){
    arr = arr.split(',');
    var sum=0;
    var k = 0; 
    for(var i =0 ; i< arr.length ; i++){
	    arr[i] = Number(arr[i]);
        if(arr[i]>0 && !Number.isNaN(arr[i])){
            sum += Number(arr[i]);
            k++;
            }	
        }
    var sr = sum/k; 
    return sr;
}