

function change_enable(btn, timer_id){
	const timer = document.getElementById(timer_id);
	const enabled = (timer.getAttribute("enabled")=="true");

	const now = Date.now()/1000;
	const time = timer.getAttribute("time");
	const start_time = timer.getAttribute("startTime");
	const change = time-start_time;

	if (!enabled){
		timer.setAttribute("startTime", (now-change).toString());
		timer.setAttribute("enabled", "true");
		btn.innerHTML = "Стоп";
	}
	else{

		timer.setAttribute("stopped", time);
		timer.setAttribute("enabled", "false");
		btn.innerHTML = "Старт";
	}	
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min)+min);
}

function pillowGenerator(){
	const DIM = 25;
	const ELEV = Math.floor(DIM/5);
	const HEIGHT = 4;

	let arr = [];

	for (let i=0;i<DIM;i++){
		let sub_arr = [];
		for(let j=0;j<DIM;j++){
			sub_arr.push(0);
		}
		arr.push(sub_arr);
	}

	let inc = HEIGHT/ELEV;
	let val = 0;
	let mult = 0.25;

	for (let i=0;i<ELEV;i++){
		for (let j = ELEV;j < DIM-ELEV;j++){
			if (i){
				mult = 0.25;
			}
			else{
				mult = 0;
			}
			arr[i][j] = val + getRandomInt(-1, 2)*inc*mult;
			arr[j][i] = val + getRandomInt(-1, 2)*inc*mult;
			arr[DIM-i-1][j] = val + getRandomInt(-1, 2)*inc*mult;
			arr[DIM-j-1][DIM-i-1] = val + getRandomInt(-1, 2)*inc*mult;
		}
		val += inc;
	}

	c = DIM/2;

	for(let i=ELEV; i<DIM-ELEV; i++){
		for(let j = ELEV; j<DIM-ELEV; j++){
			arr[i][j] = val;
			if (((c-i)*(c-i) + (c-j)*(c-j)) > 5*5 &&
				((c-i)*(c-i) + (c-j)*(c-j)) < 6*6){
				arr[i][j] = val - inc;
			}
		}
	}

	val = 0;
	for (let i = 0; i < ELEV; i++){
		val = 0;
		for (let j = 0; j < ELEV; j++){
			arr[i][j] = val;
			arr[i][DIM-j-1] = val;
			arr[DIM-i-1][j] = val;
			arr[DIM-i-1][DIM-j-1] = val;
			if (j<i){
				val += inc;
			}
		}
	}

	let str = '';
	for (let i = 0; i < DIM; i++){
		for (let j = 0; j < DIM; j++){
			str += arr[i][j].toString()+" ";
		}
	}

	const size = 40;
	let spacing = size/DIM;

	const pillow = document.getElementById("Pillow");
	pillow.setAttribute("height", str);
	pillow.setAttribute("xDimension", DIM.toString());
	pillow.setAttribute("zDimension", DIM.toString());
	pillow.setAttribute("xSpacing", spacing.toString());
	pillow.setAttribute("zSpacing", spacing.toString());


	window.x3dom.reload();
}





