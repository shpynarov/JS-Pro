var a = prompt("введите числа через запятую");
var arr = a.split(',');
var sum=0;
var k = 0; 
for(var i =0 ; i< arr.length ; i++){
	arr[i] = Number(arr[i]);
    if(arr[i]>0){
    sum += Number(arr[i]);
    k++;
    }
	
}
var sr = sum/arr.length; 
alert("кол-во чисел в массиве = " + k + ". Среднее значение = " + sr);