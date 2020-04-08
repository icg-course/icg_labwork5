window.alert("Добро пожаловать в казино без коронавируса")
window.alert("Как играть??? 1)Передвигайте жетон в поле из чисел. 2)Нажмите кнопку Start, которая запускает стрелку на рулетке. 3)Нажмите кнопку Stop для того, чтобы остановить стрелку. Также можно удалить жетон с помощью кнопки Bankrupt. Кнопка STOP COVID-19 останавливает сферу с дневным светом. Можно передвигаться по сцене PageUp.")
var line = 0, i = 0, c = 0;
var audio = new Audio();
//обработчик нажатия кнопки старт
document.getElementById('btn_start').onclick = function() 
{
	document.getElementById('id_time_arrow').setAttribute("cycleInterval", "0.5");
	document.getElementById('id_time_arrow').setAttribute("enabled", "true");
	document.getElementById('id_time_sun').setAttribute("enabled", "true");
    if(!audio.autoplay)
    {
      audio.src = "casino.mp3";
      audio.autoplay = true;
      audio.loop = true
    }
}
//обработчик нажатия кнопки стоп
document.getElementById('btn_stop').onclick = function() 
{
    document.getElementById('id_time_arrow').setAttribute("enabled", "false");
    audio.autoplay = false;
    audio.src = "casino.mp3";
}
//обработчик нажатия кнопки банкрот
function removeNode()
{
    var r = document.getElementById('token');
        for (var i = 0; i < r.childNodes.length; i++) {
          if (r.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            r.removeChild(r.childNodes[i]);
			window.alert("Извините, вы обанкротились, придётся нажать F5, чтобы сыграть снова.")
            break;
        }
    }
} 
//обработчик нажатия кнопки Stop COVID-19
document.getElementById('btn_sun').onclick = function() 
{
   document.getElementById('id_time_sun').setAttribute("enabled", "false");
}	  
//Функция передвижения жетона
function move(point)
{
  line = 0;
  i = 0;
  while(i < 1){
  switch (line) {
    case 0:
      if(point[2] < 2.5){
        line = 1;
      }
      else if(point[2] < 7.5){
          line = 2;
        }else if (point[2] < 12.5){
              line = 3;
            }else if(point[2] < 17.5){
                  line = 4;
                }else if(point[2] < 22.5){
                      line = 5;
                    }else if(point[2] < 27.5){
                          line = 6;
					}
      break;
      case 1:
	if(point[0] > -2.5){
        point = [ 0, 0, 0];
        i++;
        c = 12;
      }else if(point[0] > -7.5){
        point = [ -5,0,0];
        i++;
        c = 13;
      }else if(point[0] > -12.5){
        point = [ -10,0,0];
        i++;
        c = 14;
      }else if(point[0] > -17.5){
        point = [ -15,0,0];
        i++;
        c = 15;
      }else if(point[0] > -22.5){
        point = [ -20,0,0];
        i++;
        c = 16;
      }else if(point[0] > -27.5){
        point = [ -25,0,0];
        i++;
        c = 17;
      }
      break;
	  case 2:
	if(point[0] > -2.5){
        point = [ 0,0,5];
        i++;
        c = 22;
      }else if(point[0] > -7.5){
        point = [ -5,0,5];
        i++;
        c = 23;
      }else if(point[0] > -12.5){
        point = [ -10,0,5];
        i++;
        c = 24;
      }else if(point[0] > -17.5){
        point = [ -15,0,5];
        i++;
        c = 25;
      }else if(point[0] > -22.5){
        point = [ -20,0,5];
        i++;
        c = 26;
      }else if(point[0] > -27.5){
        point = [ -25,0,5];
        i++;
        c = 27;
      }
      break;
	  case 3:
	if(point[0] > -2.5){
        point = [ 0,0,10];
        i++;
        c = 32;
      }else if(point[0] > -7.5){
        point = [ -5,0,10];
        i++;
        c = 33;
      }else if(point[0] > -12.5){
        point = [ -10,0,10];
        i++;
        c = 34;
      }else if(point[0] > -17.5){
        point = [ -15,0,10];
        i++;
        c = 35;
      }else if(point[0] > -22.5){
        point = [-20,0,10];
        i++;
        c = 36;
      }else if(point[0] > -27.5){
        point = [ -25,0,10];
        i++;
        c = 37;
      }
      break;
	  case 4:
	if(point[0] > -2.5){
        point = [ 0, 0, 15];
        i++;
        c = 42;
      }else if(point[0] > -7.5){
        point = [ -5, 0, 15];
        i++;
        c = 43;
      }else if(point[0] > -12.5){
        point = [ -10, 0, 15];
        i++;
        c = 44;
      }else if(point[0] > -17.5){
        point = [ -15, 0,15];
        i++;
        c = 45;
      }else if(point[0] > -22.5){
        point = [ -20, 0, 15];
        i++;
        c = 46;
      }else if(point[0] > -27.5){
        point = [ -25, 0, 15];
        i++;
        c = 47;
      }
      break;
	  case 5:
	if(point[0] > -2.5){
        point = [ 0, 0, 20];
        i++;
        c = 52;
      }else if(point[0] > -7.5){
        point = [ -5, 0, 20];
        i++;
        c = 53;
      }else if(point[0] > -12.5){
        point = [ -10, 0, 20];
        i++;
        c = 54;
      }else if(point[0] > -17.5){
        point = [ -15, 0,20];
        i++;
        c = 55;
      }else if(point[0] > -22.5){
        point = [ -20, 0, 20];
        i++;
        c = 56;
      }else if(point[0] > -27.5){
        point = [ -25, 0, 20];
        i++;
        c = 57;
      }
      break;
	  case 6:
	if(point[0] > -2.5){
        point = [ 0, 0, 25];
        i++;
        c = 62;
      }else if(point[0] > -7.5){
        point = [ -5, 0, 25];
        i++;
        c = 63;
      }else if(point[0] > -12.5){
        point = [ -10, 0, 25];
        i++;
        c = 64;
      }else if(point[0] > -17.5){
        point = [ -15, 0,25];
        i++;
        c = 65;
      }else if(point[0] > -22.5){
        point = [ -20, 0, 25];
        i++;
        c = 66;
      }else if(point[0] > -27.5){
        point = [ -25, 0, 25];
        i++;
        c = 67;
      }
      break;	  
	  default:
  }
}
  point[1] +=1;
  document.getElementById('pToken').setAttribute('set_destination', point);
}