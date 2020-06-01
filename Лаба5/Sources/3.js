console.log(" ");
console.log("   TASK 3:increasing consecutive numbers  ");

var number = "12341";

function increasing(num){
	var incr = true;
	for(var i=0; i<num.length+1; i++){
		if(num[i]>num[i+1])
			incr = false;
	}
return incr;
}
console.log(number +"  "+ increasing(number));
