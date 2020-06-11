function playSound(url) {
	const sound = new Audio();
	// создаём объект аудио
    sound.src = url;
    // задаём url
    sound.play();
    // проигрываем
}

function onStart() {
	document.querySelectorAll('TimeSensor[DEF]')
		.forEach(node => node.setAttribute('pauseTime', 0));
	// получаем все таймсенсоры и активируем их
	playSound('audio.mp3');
	// запускаем звук ракеты

	// устанавливаем слушатель нажатий клавиш
	document.onkeydown = function(ev) {
		const interpolator = document.querySelector('PositionInterpolator[DEF="PosInt"]');
		// получаем интерполятор
		let pathArrays = interpolator.getAttribute('keyValue').split(', ')
			.map(arr => arr.split(' ').map(el => +el));
		// Преобразуем аргумент пути ракеты в массив
		switch(event.code) { // смотрим какая нажата клавиша
			case "KeyA":
			case "ArrowLeft": // левая стрелка или A
				pathArrays = pathArrays.map(([x, y, z]) => [x -= .15, y, z]);;
				// увеличиваем в каждом участке пути x на 0.15
				break;
			case "KeyD":
			case "ArrowRight": // правая стрелка или D
				pathArrays = pathArrays.map(([x, y, z]) => [x += .15, y, z]);;
				// уменьшаем в каждом участке пути x на 0.15
				break;
		}
		interpolator.setAttribute('keyValue', pathArrays.map(arr => arr.join(' ')).join(', '));
		// устанавливаем в интерполятор обновлённое значение
	}
}

function changeSpeed(isUp) {
	const ts = document.querySelector('TimeSensor[DEF="TimeOr"]');
	// получаем таймсенсор куба
	ts.setAttribute('enabled', false);
	// оключаем его на время
	const newSpeed = isUp ? // если стрелка вверх
		ts.getAttribute('cycleInterval') / 2 : // делим текущую скорость на два
		ts.getAttribute('cycleInterval') * 2; // умножаем текущую скорость на два
	ts.setAttribute('cycleInterval', newSpeed);
	// устанавливаем таймсенсору новую скорость
	ts.setAttribute('enabled', true);
	// включаем таймсенсор обратно
}