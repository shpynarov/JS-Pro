var militaryObj = [];
function MilitaryObj(name,numberLifeUnits,maxNumberLifeUnits,distanceDay,distanceNow){
            this.name = name;
            this.numberLifeUnits = numberLifeUnits;
            this.maxNumberLifeUnits = maxNumberLifeUnits;
            this.distanceDay = distanceDay;
            this.distanceNow = distanceNow;
            militaryObj.push(this);
    
this.distanceGo = function(numberKm) {
        var numberKm = Number(numberKm);
        if(numberKm < this.distanceNow){
            this.distanceNow =  this.distanceNow - numberKm;
        }else{
            console.log(this.name + " столько км пройти не может");
        }
    }
this.maxLife = function(){
    this.numberLifeUnits = this.maxNumberLifeUnits;    
}
this.relax = function(){
    this.distanceNow = this.distanceDay;    
}
}







function canGoDistanceE(num){ 
    var arr = [];    
    for(i = 0; i< militaryObj.length ; i++){
            if(militaryObj[i].distanceNow >= num){
                arr.push(militaryObj[i])
            }
        }  
    console.log(arr);
}
function contactArrayF(arr){
    var arrContact = militaryObj.concat(arr);
    return arrContact;
}
function readyForBattle(num){
    var b = true;
    for(i = 0; i< militaryObj.length ; i++){
            if(militaryObj[i].numberLifeUnits >= num){
                continue;
            }else{
                b = false;
            }
    }  
    console.log(b);
}
function copyObj(index){
    return Object.assign({}, militaryObj[index]);   
}
function objSwap(index0,index1){
    var k = militaryObj[index0];
    militaryObj[index0] = militaryObj[index1];
    militaryObj[index1] = k;
    
}

var t4 =new MilitaryObj("Tank",2,12,12,10);
var t5 =new MilitaryObj("lexus",2,10,18,1);
var t6 =new MilitaryObj("RR",2,32,42,10);

//t4.distanceGo(1);
//t4.maxLife();
//canGoDistance(3);
//contactArray([1,2])
//readyForBattle(1);
//var k = copyObj(2);
//objSwap(0,1)
