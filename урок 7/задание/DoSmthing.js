
var red1 = new MilitaryResource("red1",1,100,200);
var red2 = new MilitaryResource("red2",1,100,200);
var red3 = new MilitaryResource("red3",1,100,200);
var red4 = new MilitaryResource("red4",1,100,200);
var red5 = new MilitaryResource("red5",1,100,200);

var blue1 = new MilitaryResource("blue1",5,20,200);
var blue2 = new MilitaryResource("blue2",5,20,200);
var blue3 = new MilitaryResource("blue3",5,20,200);
var blue4 = new MilitaryResource("blue4",5,20,200);
var blue5 = new MilitaryResource("blue5",5,20,200);

var blueSquad = new Squad([blue1,blue2,blue3,blue4,blue5]);
var redSquad = new Squad([red1,red2,red3,red4,red5]);




function SquadHasAlive(someSquad){
    var arr = someSquad._squad;
    return arr.some(resourceAlive)
}
function resourceAlive(element, index, array){
    return element.health > 0;
}
Squad.prototype.atackedSqued =function(anotherSqued){
   
    var resource1 = this._squad[Math.floor(Math.random()*this._squad.length)];
    
    var rundomNum = Math.floor(Math.random()*anotherSqued._squad.length);
    var resource2 = anotherSqued._squad[rundomNum];
    resource2.attackedBy(resource1);
    console.log(resource1.type + ' атаковал' + resource2.type + ' остаток жизни у ' + resource2.type + " " + resource2.health);
    if(resource2.health == 0){
        anotherSqued._squad.splice(rundomNum,1);
        console.log(resource2.type + " убит");   
    }  
    
}


var timeOut = setInterval (function callback(){
    if(SquadHasAlive(redSquad) && SquadHasAlive(blueSquad)){
        if(Math.random() >= 0.5){    
            redSquad.atackedSqued(blueSquad);
        }else{
            blueSquad.atackedSqued(redSquad);
        }

    }else{
        if(SquadHasAlive(redSquad)){
            console.error("Красные победили");
            console.log(redSquad._squad);
        }else{
            console.error("Синие победили");
            console.log(blueSquad._squad);
        }
        
        clearTimeout(timeOut);
    }
},1000);
