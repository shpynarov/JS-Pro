

var obj = { 
	Barmen:   {  Name :"Andrey",
        Hours :"12",
        Selary: 10000
       },
	Administrator : { 
		Name :"Anna",
        Hours :"14",
        Selary: 2000
       },
	Cook :    {  
   		Name :"Dima",
        Hours :"10",
        Selary: 3000
       } ,

	increaseSelary : function(a){
		this[a].Selary += 1000;
	}

}

function iterate(obj){
	for(var key in obj){
	  	obj.increaseSelary(key);
	}
}