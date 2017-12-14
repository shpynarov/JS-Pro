
function avarageOf2many(arr){
    arr = arr.split(',');
    var sum=0;
    var k = 0; 
//    for(var i =0 ; i< arr.length ; i++){
//	    arr[i] = Number(arr[i]);
//        if(arr[i]>0 && !Number.isNaN(arr[i])){
//            sum += Number(arr[i]);
//            k++;
//            }	
//        }
    
    
    var arr = arr.filter(function(number) {
        return !Number.isNaN(Number(number)) ;
    });


    
    arr.forEach(function(item, i, arr) {
        
            sum+=Number(item);
            k++;
        
        
    });

    
    var sr = sum/k; 
    return sr;
}

