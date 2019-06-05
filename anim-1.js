window.alert("Добро пожаловать на сцену Пляжный волейбол!")
window.alert("Сперва давайте выберем другой ракурс, нажав на кнопку <сменить ракурс>")	


	function func1() {																//Создаем функцию
			var elem = document.getElementById('ballanim');							//В которой назначается переменная elem и привязывается к анимации с ID "ballanim"
			elem.key = '0, 0.2, 0.4, 0.6, 1 '										//Задаются новые атрибуты для анимации
			elem.keyValue='8 0.15 5 , 8 0.5 5, 8 0.7 5, 8 0.6 5, 8 0.15 5 ';
				}
	
		function func2() {															//Создаем функцию
			var elem = document.getElementById('ballanim');							//В которой назначается переменная elem и привязывается к анимации с ID "ballanim"
			elem.key = '0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1'	//Задаются новые атрибуты для анимации
			elem.keyValue='8 0.15 5 , 8 1.3 4.5, 8 1.7 4, 8 2 3.5, 8 2.3 3, 8 2.4 2.5, 8 2.6 2, 8 2.7 1.5, 8 2.7 1, 8 2.6 0.5, 8 2.5 0.2, 8 2 0.2';
			
				}
	
		function func3() {															//Создаем функцию
			var elem = document.getElementById('view');								//В которой назначается переменная elem и привязывается к камере с ID "view"
			elem.position = '10 15 5';												//Задаются новые атрибуты для камеры
			elem.orientation = '1 0 0 -1.57';
			window.alert("Теперь давайте создадим баскетбольную площадку, нажав на SHIFT")
				}
	
		function func4() {															//Создаем функцию
			var elem1 = document.getElementById('view');							//В которой назначается переменная elem1 и привязывается к камере с ID "view"
			elem1.CenterCfRotation = '0 0 0';										//Задаются новые атрибуты для камеры
			elem1.position = '10 1 6';
			elem1.orientation = '1 0 0 0';
			window.alert("Ну что? Проверим Ваш навык игры?")
		}
	
		function func5() {															//Создаем функцию	
			window.alert("Пауза") = false;
		}