var a = Number(prompt("введите число"));
var b = true;
var a = a+'';
for(var i =0; i < a.length/2; i++){
    alert(a[i])
    if(a[i] != a[a.length - i-1]){
        b = false;
    }
}

if(b==true){
    alert("число зеркальное");
}else{
    alert("число не зеркальное");
}