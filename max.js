document.onload = function () { //Вызов функции 

	//Изменение атрибута "enabled" на "true" узла "Time1"
	document.getElementById("play").onclick = function ()
		{
		var h = document.getElementById("Time1").setAttribute("enabled"); //Запись атрибута "enabled" в h
		document.getElementById("Time1").setAttribute("enabled", h = "true"); //Изменение атрибута
		}
	
	//Изменение атрибута "enabled" на "false" узла "Time1"
	document.getElementById("stop").onclick = function () 
		{
		var h = document.getElementById("Time1").setAttribute("enabled"); //Запись атрибута "enabled" в h
		document.getElementById("Time1").setAttribute("enabled", h = "false"); //Изменение атрибута
		}
		
	////Изменение атрибута "diffuseColor"  узла "MatSp"
	document.getElementById('color').onclick = function ()
		{
			var h = document.getElementById("MatSp"); //Запись узла "MatSp" в переменную h
			//Сравнение атрибута и смена цвета
			if(h.getAttribute('diffuseColor')=='1 1 0') 
				h.setAttribute('diffuseColor', '1 1 1');
			else
				h.setAttribute('diffuseColor', '1 1 0');
		}
	
	document.getElementById('left').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation"); //Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Х
					ct[0] = -1 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
		}

	document.getElementById('right').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation"); //Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Х
					ct[0] = 1 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
				}
	
	document.getElementById('forward').onclick = function () 
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation"); //Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' '); //Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Z
					ct[0] = 0 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = -1 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
				}
		
	document.getElementById('back').onclick = function () 
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation");//Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Z
					ct[0] = 0 + ct[0];
					ct[1] = 0 + ct[1];
					ct[2] = 1 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
				}
	
	document.getElementById('up').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation");//Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в положительном направлении по оси Y
					ct[0] = 0 + ct[0];
					ct[1] = 1 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
				}
	
	document.getElementById('down').onclick = function ()
		{
					var ChangeTranslation = document.getElementById("Box1").getAttribute("translation");//Запись узла "translation" узла "Box1" в переменную var
					var ct = ChangeTranslation.split(' ');//Разделение строки на массив строк, где Separator == ' '. В каждом элементе массива хранятся координаты по одной из осей(X,Y,Z)
					//Перевод из String в Float
					ct[0]= parseFloat(ct[0]);
					ct[1]= parseFloat(ct[1]);
					ct[2]= parseFloat(ct[2]);
					//Задаем координаты движения объекта в отрицательном направлении по оси Y
					ct[0] = 0 + ct[0];
					ct[1] = -1 + ct[1];
					ct[2] = 0 + ct[2];
					//Запись новых координат в fmul, которые преобразовы в тип String
					fmul = String(ct[0] + ' ');
					fmul = String(fmul + ct[1] + ' ');
					fmul = String(fmul + ct[2]);
					document.getElementById('Box1').setAttribute("translation", fmul);//Запись fmull в атрибут "translation"
				}
}