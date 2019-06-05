	document.addEventListener("keydown", function(event) 							//обработка нажатия кнопок управления (Если зажата)
  {		
			if(event.keyCode == 16)													//Кнопка "Shift"
			if(document.getElementById('scene1').getAttribute("render") == "false") //То проверяем, если атрибут "render" узла "ransform" с ID "scene1" - false
			{
			document.getElementById('scene1').setAttribute("render", "true");    	//То меняем значение атрибута на "True"
			window.alert("Отлично! Теперь займем позицию игрока, нажав на кнопку <Бросить мяч самому>")
			}
		
			
					   

  }
 )

