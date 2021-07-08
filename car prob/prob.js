function doFunction(){
	//Empty div content to clear window
    document.getElementById("one").innerHTML = "";
	document.getElementById("two").innerHTML = "";
	document.getElementById("three").innerHTML = "";

	//Game Code
	var dist=0;
	var abc=50;
    var one = "Game started"+"<br/>"+"Petrol pumps generated at 10, 27, 37, 39, 62, 75"+"<br/>";
    document.getElementById('one').innerHTML = one;
	
    for(i=1; i<=100; i++){
		var d = Math.floor(Math.random()*6) + 1;
		abc = abc-(d*2);
		dist = dist+d;
		
		if(dist>=100){
			document.getElementById("three").innerHTML= "Goal Reached";
		}
		else{
			if(abc>0){
				var two = "MOVE "+i+" car at "+dist+", petrol remaining "+abc+"</br>";
				document.getElementById('two').innerHTML+= two;
				
				if(dist==10 || dist==27 || dist==37 || dist==39 || dist==62)	
					abc = abc + 30;
				}
			
				else{
					document.getElementById("three").innerHTML= "Game over";
					break;
				}		
		}		
	}
}

