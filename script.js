addEventListener("keydown", function(event) {
	var element=document.getElementById('PosIntDom');
	if(!element){
		//alert('меня нет на странице');
		start();
		
	} 
	else {
		//alert('я присутствую');
		var delnode=document.getElementById("PosIntDom");
		delnode.remove();
		start();
		//alert('удален');
	}
  });

function start(){
	var CarPosition=document.getElementById("Car").getAttribute("translation");
	var SplitCarPosition=CarPosition.split(' ')
	var speed=1; //cкорость
	var countTime=4;
	var delta=speed/countTime;
	let i = 0;
	var x=SplitCarPosition[0]
	var z=SplitCarPosition[1]
	var y=SplitCarPosition[2]
	var buffer='';
	while (countTime>i){
		switch(event.keyCode){
			case 37: //left arrow key
				x=Number(x)-delta;
				var coord =String(x)+' '+z+' '+y+',';
				if (i==0){
					coord = String(x)+' '+z+' '+y;
				}
				buffer=coord+buffer;
				break;
			case 38: //Up arrow key
				y=Number(y)-delta;
				var coord =x+' '+z+' '+String(y)+',';
				if (i==0){
					coord = x+' '+z+' '+String(y);
				}
				buffer=coord+buffer;
				break;
			case 39: //right arrow key
				x=Number(x)+delta;
				var coord =String(x)+' '+z+' '+y+',';
				if (i==0){
					coord = String(x)+' '+z+' '+y;
				}
				buffer=coord+buffer;		
				break;
			case 40: //down arrow key
				y=Number(y)+delta;
				var coord =x+' '+z+' '+String(y)+',';
				if (i==0){
					coord = x+' '+z+' '+String(y);
				}
				buffer=coord+buffer;
				break;						
		}
		i++;
	}
	var revers=CarPosition+','+("keyValue",buffer.split(",").reverse().join(","));
	var Position=document.createElement("PositionInterpolator");
	Position.setAttribute("keyValue",revers);
	Position.setAttribute("key",'0 0.25 0.5 0.75');
	Position.setAttribute("DEF",'PosInt');
	Position.setAttribute("id",'PosIntDom');
	document.getElementById("Root").appendChild(Position);
	var newPoint=buffer.split(",")[0]
	document.getElementById("Car").setAttribute("translation",newPoint);
	//var g=0;
	
}
