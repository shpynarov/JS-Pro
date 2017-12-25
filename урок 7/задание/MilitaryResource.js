function MilitaryResource(type,damage,health,distance){
	this.type = type;
    this.damage = damage;
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

MilitaryResource.prototype.attackedBy = function(enemy){
    this.health -= enemy.damage;
}