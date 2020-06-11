document.onkeydown = function(ev) { // слушаем клавиши для передвижения шара
	const transform = document.querySelector('transform[DEF="sph"] > transform');
	// получаем трансформ шара
	const coords = transform.getAttribute('translation').split(' ').map(el => +el);
	// Получаем текущие координаты шара в виде массива
	switch(event.code) { // смотрим какая нажата клавиша
	    case "ArrowDown":
			coords[1] -= .2;
			break;
	    case "ArrowUp":
			coords[1] += .2;
			break;
		case "ArrowLeft": // левая стрелка или A
			coords[0] -= .2;
			// увеличиваем в каждом участке пути x на 0.15
			break;
		case "ArrowRight": // правая стрелка или D
			coords[0] += .2;
			// уменьшаем в каждом участке пути x на 0.15
			break;
	}
	transform.setAttribute('translation', coords.join(' '));
	// устанавливаем в трансформ обновлённое положение
}

function changeColor() {
	const interpolator = document.querySelector('ColorInterpolator[DEF="ColInt"]');
	// получаем интерполятор
	const newValue = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => Math.random()));
	// Создаём массив массивов со случайными значениями
	newValue.push(newValue[0]);
	// добавляем в него его первый элемент, чтобы анимация цветов была гладкой
	interpolator.setAttribute('keyValue', newValue.map(arr => arr.join(' ')).join(', '));
	// получаем из него строку и устанавливаем в качестве аттрибута интерполятору
}