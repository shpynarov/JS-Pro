var usdEur = 0.85;
var usdUah = 27.28; 
var usdRub = 58.9;
var curreccy = ["usd","eur","uah","rub"];
var currencyConv = {
usd: {  
    uah: usdUah ,
    eur : usdEur ,
    rub: usdRub
    },
eur: {
    uah: usdUah/usdEur,
    usd: 1 / usdEur ,
    rub: usdRub/usdEur,
    },
uah: {
    usd: 1/usdUah, 
    rub: usdRub/usdUah,
    eur: usdEur/usdUah
    },
rub: {
    usd: 1/usdRub, 
    uah: usdUah/usdRub,
    eur: usdEur/usdRub
    },
exchange : function(num, from , to){
        if(curreccy.indexOf(from) != -1 && curreccy.indexOf(to) != -1 ){
            console.log(num*currencyConv[from][to]);
        }else{
            console.log("ввели неправильную валюту [usd,eur,uah,rub]");
        }
    }
}

//currencyConv["usd"]["uah"];
currencyConv.exchange(100,"usd","eur");
