function MilitaryResource(type,health,distance){
	this.type = type;
	this.health = this.maxHealth = health;
	this.distance = this.maxDistance = distance;
}


MilitaryResource.prototype.isReadyToMove = function(distance){
	return distance <= this.distance; 
}
MilitaryResource.prototype.isReadyToFight = function(health){
	return health < this.health; 
}
MilitaryResource.prototype.restore = function(){
	this.health = maxHealth;
	this.distance = maxDistance;
}

MilitaryResource.prototype.clone = function(){
	return new MilitaryResource(this.type, this.maxHealth, this.maxDistance);
}
MilitaryResource.prototype.getReadyToMoveResource = function(distance){
	this.distance -=Number(distance);
}


function Squad(defaultResources){
    this.squad = [];
    if(defaultResources){
        this.combineResources(defaultResources);}
}

Squad.prototype.combineResources = function (resorcesToCombine){
	this.squad = this.squad.concat(resorcesToCombine);
}
Squad.prototype.restore = function () {
	this.squad.forEach(function(unit){
		unit.restore();
	})
}
Squad.prototype.isResourcesReadyToMove = function(distance){
    this.squad.forEach(

    
    )
    }

Squad.prototype.getReadyToMoveResources = function (distance){ 
    this.squad.forEach(function(unit){
    	getReadyToMoveResource(unit, distance);
    })
}




var knight = new MilitaryResource("knight",100,200);
var archer = new MilitaryResource("archer",100,200);
var squad = new Squad([knight,archer]);


var newResource = new MilitaryResource("knight",100,200);
console.log(newResource);
newResource.isReadyToMove(10);
newResource.isReadyToFight(300);



