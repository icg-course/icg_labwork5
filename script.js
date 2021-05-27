
//включение\выключение таймера взависимости от текущего состояния
//таймер и соответствующая кнопка передавются в фукцию
function change_enable(btn, timer_id){
	//получение элемента таймера по id
	const timer = document.getElementById(timer_id);

	//получение текущего статуса таймера
	const enabled = (timer.getAttribute("enabled")=="true");

	//получение текущего времени и приведение его к формату подобному в полях timeSensor
	const now = Date.now()/1000;
	//получение значений атрибутов time и startTime у таймера
	const time = timer.getAttribute("time");
	const start_time = timer.getAttribute("startTime");

	const change = time-start_time;

	//переключение статуса работы таймера взависимости от текущего
	if (!enabled){
		//назначение времени для избежания рывка анимации
		timer.setAttribute("startTime", (now-change).toString());
		timer.setAttribute("enabled", "true");
		btn.innerHTML = "Стоп";
	}
	else{
		timer.setAttribute("enabled", "false");
		btn.innerHTML = "Старт";
	}	
}

//получение случайного числа в пределах min max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min)+min);
}

//функция генерации подушки
function pillowGenerator(){
	//количество узлов из которых состоит подушка
	const DIM = 25;
	//количество узлов поднятия подушки с 0 до height
	const ELEV = Math.floor(DIM/5);
	//условная высота подушки
	const HEIGHT = 4;

	//массив высот для elevationGrid
	let arr = [];

	//заполнение массива 0
	for (let i=0;i<DIM;i++){
		let sub_arr = [];
		for(let j=0;j<DIM;j++){
			sub_arr.push(0);
		}
		arr.push(sub_arr);
	}

	//переменные для шага инкрементации высоты, начальное значение и мулитипликатор (для контроля высоты) 
	let inc = HEIGHT/ELEV;
	let val = 0;
	let mult = 0.25;

	//вычисление высот для сторон подушки
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

	//середина массива
	c = DIM/2;

	//создание углубления для короны
	//уменьшение где координаты соответствуют формуле 25<(x^2+y^2)<36
	for(let i=ELEV; i<DIM-ELEV; i++){
		for(let j = ELEV; j<DIM-ELEV; j++){
			arr[i][j] = val;
			if (((c-i)*(c-i) + (c-j)*(c-j)) > 5*5 &&
				((c-i)*(c-i) + (c-j)*(c-j)) < 6*6){
				arr[i][j] = val - inc;
			}
		}
	}

	//вычисление высот углов подушки для elevationGrid
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

	//перевод массива в string
	let str = '';
	for (let i = 0; i < DIM; i++){
		for (let j = 0; j < DIM; j++){
			str += arr[i][j].toString()+" ";
		}
	}

	//перевод из условных едениц в размеры x3dom
	const size = 40;
	let spacing = size/DIM;

	//получение элемента Pillow и установка соответствующих полей
	const pillow = document.getElementById("Pillow");
	pillow.setAttribute("height", str);
	pillow.setAttribute("xDimension", DIM.toString());
	pillow.setAttribute("zDimension", DIM.toString());
	pillow.setAttribute("xSpacing", spacing.toString());
	pillow.setAttribute("zSpacing", spacing.toString());


	window.x3dom.reload();
}





