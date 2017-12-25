function moneyConvert() {
	var valuta1 = document.getElementById("convfor").value;
	var valuta2 = document.getElementById("convin").value;
    var sum = document.getElementById("sum").value;

    var res;
    const UAH = 27;
    const EUR = 1.2;
    const USD = 1;

    if(valuta1 == "USD"){
        if(valuta2 == "UAH") res = sum * 27.15;
        if(valuta2 == "EUR") res = sum * 1.2;
        if(valuta2 == "USD") res = sum * 1;

    } else if(valuta1 == "UAH"){
        if(valuta2 == "USD") res = sum / 27.15;
        if(valuta2 == "EUR") res = sum / 27.15 / 1.2;
        if(valuta2 == "UAH") res = sum * 1;

    }else if(valuta1 == "EUR"){
        if(valuta2 == "USD") res = sum * 1.2;
        if(valuta2 == "UAH") res = sum * 27.15 * 1.2;
        if(valuta2 == "EUR") res = sum * 1;
    } else {
        res = "EROOOR" ;
    }
    document.getElementById("result").innerHTML = res;
}

