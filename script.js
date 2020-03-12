//var root=document.getElementById('list');
//var shape=document.createElement("Shape");
//var b=document.createElement("Box");
//b.setAttribute("size","1 2 2");
//b.setAttribute("id","MyBox");
//shape.appendChild(b);
//document.getElementById("Root").appendChild(shape);
addEventListener("keydown", function(event) {
    var CarPosition=document.getElementById("Car").getAttribute("translation");
	var SplitCarPosition=CarPosition.split(' ')
	var speed=5; //cкорость
	var countTime=4;
	var delta=speed/countTime;
	let i = 0;
	var x=SplitCarPosition[0]
	var y=SplitCarPosition[1]
	var z=SplitCarPosition[2]
	var buffer='';
	while (countTime>i){
		switch(event.keyCode){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				x=Number(x)+delta;
				y=Number(y)+delta;
				var coord = String(x)+' '+String(y)+' '+z+',';
				if (i==0){
					coord = String(x)+' '+String(y)+' '+z;
				}
				buffer=coord+buffer;
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;						
		}
		i++;
	}
	//var reverse=buffer.split(",").reverse().join(",");
	var Position=document.getElementById("PosInter");
	var key=Position.getAttribute("keyValue");
	Position.setAttribute("keyValue",buffer.split(",").reverse().join(","));

	
	
	
	
	
  });



function movedown(x,y,speed,time) {
    myGamePiece.speedY += 1; 
}

function moveleft(x,y,speed,time) {
    myGamePiece.speedX -= 1; 
}

function moveright(x,y,speed,time) {
    myGamePiece.speedX += 1; 
}
