document.onload = function () { //Вызов функции 

	//Изменение атрибута "enabled" на узла "Time1"
	document.getElementById("capp").onclick = function ()
		{
		var h = document.getElementById("Time1"); //Присваивание h элемента "Time1" 
		if(h.getAttribute('enabled')=='true')
			{
				h.setAttribute('enabled', 'false'); //Изменение атрибута
			}
			else
			{
				h.setAttribute('enabled', 'true'); //Изменение атрибута
			}
		}
	
	//Изменение атрибута "enabled" на узла "Time"
	document.getElementById('tt').onclick = function ()
		  {
			   var h = document.getElementById("Time"); //Присваивание h элемента "Time"
			if(h.getAttribute('enabled')=='true')
			{
				h.setAttribute('enabled', 'false'); //Изменение атрибута
			}
			else
			{
				h.setAttribute('enabled', 'true'); //Изменение атрибута
			}
		  }	
		
	document.getElementById('left').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation"); //Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Х
					ct[0] = -1 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
		}

	document.getElementById('right').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation"); //Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Х
					ct[0] = 1 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
				}
	
	document.getElementById('forward').onclick = function () 
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation"); //Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Z
					ct[0] = 0 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = -1 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
				}
		
	document.getElementById('back').onclick = function () 
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation");//Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Z
					ct[0] = 0 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 1 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
				}
	
	document.getElementById('up').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation");//Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Y
					ct[0] = 0 + ct[0];
					ct[1] = 1 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
				}
	
	document.getElementById('down').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("tnt1").getAttribute("translation");//Запись узла "translation" узла "tnt1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Y
					ct[0] = 0 + ct[0];
					ct[1] = -1 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в f, которые преобразовы в тип String
					f = String(ct[0] + ' ');
					f = String(f + ct[1] + ' ');
					f = String(f + ct[2]);
					document.getElementById('tnt1').setAttribute("translation", f);//Запись f в атрибут "translation"
				}
}