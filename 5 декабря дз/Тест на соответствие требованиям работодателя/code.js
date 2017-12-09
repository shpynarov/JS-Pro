var age = prompt('возраст');
age=Number(age);
if (age<50 && age>22 ) {
	if(confirm("вы имеете опыт работы?"))
	{
	alert("подходите");
	}else{
	alert("не подходите");
	}

}
else{
	alert("не подходите");
}
